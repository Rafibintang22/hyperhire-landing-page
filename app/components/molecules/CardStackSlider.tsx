'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardPeople, { PeopleItem } from '../atoms/CardPeople';
import Image from 'next/image';

interface Props {
  data: PeopleItem[];
}

export default function CardStackSlider({ data }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const leftIndex = (index - 1 + data.length) % data.length;
  const centerIndex = index;
  const rightIndex = (index + 1) % data.length;

  const cards = [
    { item: data[leftIndex], pos: 'left' },
    { item: data[centerIndex], pos: 'center' },
    { item: data[rightIndex], pos: 'right' },
  ];

  const variants = {
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
      zIndex: 20,
      transition: { duration: 0.45, ease: 'easeInOut' },
    },
    left: {
      scale: 0.85,
      x: -140,
      opacity: 0.6,
      zIndex: 10,
      transition: { duration: 0.45, ease: 'easeInOut' },
    },
    right: {
      scale: 0.85,
      x: 140,
      opacity: 0.6,
      zIndex: 10,
      transition: { duration: 0.45, ease: 'easeInOut' },
    },
    exitLeft: {
      x: -200 * direction,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    exitRight: {
      x: 200 * direction,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <button onClick={prev} className="cursor-pointer absolute -left-5 z-30 px-3 py-2">
        <Image src={'https://img.icons8.com/ios/100/FFFFFF/back--v1.png'} alt="arrow-r" width={20} height={20} />
      </button>

      <div className="relative w-[700px] h-[420px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          {cards.map((card, i) => (
            <motion.div
              key={card.pos + index}
              custom={direction}
              className="absolute"
              initial="exitRight"
              animate={card.pos}
              exit={direction === 1 ? 'exitLeft' : 'exitRight'}
              variants={variants}>
              <CardPeople data={card.item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button onClick={next} className="cursor-pointer absolute -right-5 z-30 px-3 py-2">
        <Image src={'https://img.icons8.com/ios/100/FFFFFF/forward--v1.png'} alt="arrow-r" width={20} height={20} />
      </button>
    </div>
  );
}
