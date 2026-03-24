import { useEffect, useState, useRef } from 'react';

type StatCardProps = {
  value: number; // numeric portion to animate
  suffix?: string;
  label: string;
  duration?: number; // animation duration in ms
};

export default function StatCard({ value, suffix = '', label, duration = 1200 }: StatCardProps) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = null;
    const start = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - (startRef.current || 0)) / duration, 1);
      const current = Math.round(progress * value);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(start);
      }
    };
    rafRef.current = requestAnimationFrame(start);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-center gap-3">
        <span className="text-3xl md:text-4xl font-extrabold text-gray-900">{display}</span>
        {suffix ? <span className="text-lg md:text-xl font-semibold text-blue-600">{suffix}</span> : null}
      </div>
      <p className="mt-2 text-gray-600 font-medium">{label}</p>
    </div>
  );
}
