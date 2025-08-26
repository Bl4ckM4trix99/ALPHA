'use client';
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-orange-500">404 - Not Found</h2>
        <p className="text-gray-400">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
