'use client';

import dynamic from 'next/dynamic';

const AchievementsContent = dynamic(() => import('./achievements-content'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
      <div className="text-orange-400">Loading...</div>
    </div>
  )
});

export default function AchievementsPage() {
  return <AchievementsContent />;
}
