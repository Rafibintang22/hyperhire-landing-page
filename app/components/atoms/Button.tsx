interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-4 py-1 rounded-md bg-white text-third hover:bg-gray-100 transition ${className}`}>
      {children}
    </button>
  );
}
