import Image from 'next/image';

export interface SkillBoxProps {
  icon: string;
  text: string;
}

export default function SkillBox({ icon, text }: SkillBoxProps) {
  return (
    <div className="flex px-2 py-4 rounded justify-start gap-3 items-center bg-white/20 min-w-max">
      <div className="bg-white/40 rounded px-2 py-2">
        <Image src={icon} alt={'skill-' + text} width={20} height={20} className="object-contain" />
      </div>
      <span className="font-medium text-white">{text}</span>
    </div>
  );
}
