import React, { useState, useRef } from 'react';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** Returns the Devicon CDN URL for an icon (e.g. devicon('javascript') -> javascript-original.svg) */
export const devicon = (name: string) =>
  `${DEVICON_BASE}/${name}/${name}-original.svg`;

export interface IconSetItem {
  src: string;
  label: string;
}

export interface IconSetProps {
  items: IconSetItem[];
  className?: string;
}

const IconSet: React.FC<IconSetProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchHandled = useRef(false);

  const handleIconPress = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleTouchStart = (index: number) => {
    touchHandled.current = true;
    handleIconPress(index);
  };

  const handleClick = (index: number) => {
    if (touchHandled.current) {
      touchHandled.current = false;
      return;
    }
    handleIconPress(index);
  };

  return (
    <div className={`grid grid-flow-col auto-cols-[5rem] gap-[1em] justify-items-start py-[1em] pb-[2em] overflow-x-auto overflow-y-visible w-full max-w-full min-w-0 min-h-full ${className || ''}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center group"
        >
          <div
            role="img"
            aria-label={item.label}
            className="relative w-[4.5em] h-[4.5em] overflow-hidden [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] cursor-default rounded-[1.25em] touch-manipulation"
            onClick={() => handleClick(index)}
            onTouchStart={() => handleTouchStart(index)}
          >
            <span
              className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex items-center justify-center backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] [will-change:transform] group-hover:[transform:translate3d(0,0,2em)]"
              style={{
                boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset',
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-[80%] h-[80%] min-w-0 min-h-0 object-contain pointer-events-none"
                loading="lazy"
              />
            </span>
          </div>

          <span
            className={`absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(0%)] ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IconSet;
