import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-03-28T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl md:text-5xl font-serif font-bold text-smun-gold">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base font-sans text-smun-cream uppercase tracking-widest">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 py-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl md:text-4xl text-smun-gold font-serif">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl md:text-4xl text-smun-gold font-serif">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-3xl md:text-4xl text-smun-gold font-serif">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
