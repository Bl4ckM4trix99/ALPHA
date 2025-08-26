import { serialize } from 'cookie'
import DOMPurify from 'isomorphic-dompurify'

// Sanitize HTML to prevent XSS
export const sanitizeHtml = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  })
}

// URL validation for SSRF prevention
export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url)
    // Add your allowed domains here
    const allowedDomains = ['your-domain.com', 'api.your-domain.com']
    return allowedDomains.includes(parsedUrl.hostname)
  } catch {
    return false
  }
}

// Validate and sanitize file paths
export const sanitizeFilePath = (path: string): string => {
  // Remove any null bytes
  path = path.replace(/\0/g, '')
  
  // Remove any attempts to traverse directories
  path = path.replace(/\.\./g, '')
  
  // Remove any double slashes
  path = path.replace(/\/\//g, '/')
  
  // Remove any Windows-style backslashes
  path = path.replace(/\\/g, '/')
  
  return path
}

// CSRF token validation
export const validateCsrfToken = (cookieToken: string, headerToken: string): boolean => {
  if (!cookieToken || !headerToken) return false
  return cookieToken === headerToken
}

// Generate secure response headers
export const getSecureHeaders = () => ({
  'Cache-Control': 'no-store, max-age=0',
  'Pragma': 'no-cache',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
})

// Create secure cookie
interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  path?: string;
  maxAge?: number;
  domain?: string;
  expires?: Date;
}

export const createSecureCookie = (name: string, value: string, options: CookieOptions = {}) => {
  return serialize(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    ...options,
  })
}

// Rate limiting helper
const rateLimit = new Map()

export const checkRateLimit = (ip: string, limit: number = 100, window: number = 60000): boolean => {
  const now = Date.now()
  const userRequests = rateLimit.get(ip) || []
  
  // Remove old requests
  const recentRequests = userRequests.filter((time: number) => time > now - window)
  
  if (recentRequests.length >= limit) {
    return false
  }
  
  recentRequests.push(now)
  rateLimit.set(ip, recentRequests)
  return true
}

// Input validation patterns
export const patterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  username: /^[a-zA-Z0-9_-]{3,20}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  filename: /^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/,
}
