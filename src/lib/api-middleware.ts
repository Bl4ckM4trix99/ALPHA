import { NextApiRequest, NextApiResponse } from 'next'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { validateCsrfToken, getSecureHeaders } from '@/lib/security'

const rateLimiter = new RateLimiterMemory({
  points: 10, // Number of points
  duration: 1, // Per second
})

type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void

export function withSecurity(handler: ApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Apply security headers
      Object.entries(getSecureHeaders()).forEach(([key, value]) => {
        res.setHeader(key, value)
      })

      // Rate limiting
      try {
        await rateLimiter.consume(req.socket.remoteAddress || 'unknown')
      } catch {
        return res.status(429).json({ error: 'Too Many Requests' })
      }

      // CSRF protection for mutations
      if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method || '')) {
        const csrfToken = req.cookies['csrf-token']
        const headerToken = req.headers['x-csrf-token']

        if (!validateCsrfToken(csrfToken, headerToken as string)) {
          return res.status(403).json({ error: 'Invalid CSRF token' })
        }
      }

      // Origin validation
      const origin = req.headers.origin
      if (origin && !process.env.ALLOWED_ORIGINS?.split(',').includes(origin)) {
        return res.status(403).json({ error: 'Invalid origin' })
      }

      // Execute the API route handler
      return await handler(req, res)
    } catch (error) {
      console.error('API Error:', error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
