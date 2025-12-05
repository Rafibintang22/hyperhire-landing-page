'use client';

import { useEffect, useRef, useState } from 'react';
import { SkillBox } from '../atoms';
import { SkillBoxProps } from '../atoms/SkillBox';

interface SkillBoxAutoSlideProps {
  items: SkillBoxProps[];
  interval?: number;
}

export default function SkillBoxAutoSlide({ items, interval = 5000 }: SkillBoxAutoSlideProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  const itemWidth = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return 150;
    return (track.children[0] as HTMLElement).offsetWidth + 20;
  };

  const totalMainWidth = items.length * itemWidth();

  useEffect(() => {
    const step = itemWidth();

    const timer = setInterval(() => {
      setX((prev) => prev - step);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  useEffect(() => {
    if (Math.abs(x) >= totalMainWidth) {
      const track = trackRef.current;
      if (!track) return;

      track.style.transition = 'none';

      setX(0);

      requestAnimationFrame(() => {
        if (track) track.style.transition = 'transform 0.7s ease';
      });
    }
  }, [x, totalMainWidth]);

  return (
    <div className="w-full overflow-hidden h-[80px] flex items-center">
      <div
        ref={trackRef}
        className="flex gap-5 transition-transform duration-700 ease"
        style={{ transform: `translateX(${x}px)` }}>
        {items.map((item, i) => (
          <SkillBox key={`main-${i}`} icon={item.icon} text={item.text} />
        ))}

        {items.map((item, i) => (
          <SkillBox key={`clone-${i}`} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
