interface TooltipBoxProps {
  text: string;
  children: React.ReactNode;
  position?: 'left' | 'center';
  bgColor?: string;
  textColor?: string;
  className?: string;
  classNameParent?: string;
}

export default function TooltipBox({
  text,
  children,
  position = 'center',
  bgColor = 'white',
  textColor = 'black',
  className,
  classNameParent,
}: TooltipBoxProps) {
  return (
    <div className={`${classNameParent} relative inline-block`}>
      {children}

      {/* Tooltip */}
      <div
        className={`
          ${className}
          absolute whitespace-nowrap px-3 py-2 rounded-md shadow-md
          bottom-full mb-2
          ${position === 'left' ? 'left-0 -translate-x-0' : ''}
          ${position === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
        `}
        style={{ backgroundColor: bgColor, color: textColor }}>
        {text}

        <div
          className={`
            absolute w-0 h-0 
            border-l-[8px] border-r-[8px] border-t-[8px]
            border-l-transparent border-r-transparent
            top-full
            ${position === 'left' ? 'left-4' : ''}
            ${position === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
          `}
          style={{ borderTopColor: bgColor }}
        />
      </div>
    </div>
  );
}
