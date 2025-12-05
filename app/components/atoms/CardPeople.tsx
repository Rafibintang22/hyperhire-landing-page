import Image from 'next/image';

export interface PeopleItem {
  img: string;
  name: string;
  strongSkill: string;
  experience: string;
  skill: string[];
  countryIcon: string;
}

interface CardPeopleProps {
  data: PeopleItem;
}

export default function CardPeople({ data }: CardPeopleProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md px-4 py-12 items-center gap-4 max-w-xs justify-between">
      <div className="relative w-28 h-28 rounded-full overflow-hidden">
        <Image src={data.img} alt={data.name} width={112} height={112} className="object-cover w-full h-full" />

        <Image
          src={data.countryIcon}
          alt={'country-' + data.name}
          width={28}
          height={28}
          className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-7 h-7 rounded-full border-2"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-black text-black">{data.name}</h3>
        <h3 className="text-lg font-semibold text-third">
          {data.strongSkill} · {data.experience}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {data.skill.map((item, idx) => (
          <span key={idx} className="skill-item w-max border border-gray-500 rounded text-black px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
