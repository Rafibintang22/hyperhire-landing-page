import Image from 'next/image';
import { TooltipBox } from '../atoms';
import { PeopleItem } from '../atoms/CardPeople';
import { CardStackSlider, SkillBoxAutoSlide } from '../molecules';

export default function HeroSection() {
  const peopleData: PeopleItem[] = [
    {
      img: '/images/people.png',
      name: 'Abhishek Gupta',
      skill: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      strongSkill: '마케팅',
      experience: '2+',
      countryIcon: '/images/country.png',
    },
    {
      img: '/images/people.png',
      name: 'Abhishek Gupta',
      skill: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      strongSkill: '마케팅',
      experience: '2+',
      countryIcon: '/images/country.png',
    },
    {
      img: '/images/people.png',
      name: 'Abhishek Gupta',
      skill: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      strongSkill: '마케팅',
      experience: '2+',
      countryIcon: '/images/country.png',
    },
  ];

  const skills = [
    { icon: 'https://img.icons8.com/ios/100/FFFFFF/image--v1.png', text: '해외 마케팅' },
    { icon: 'https://img.icons8.com/ios/100/FFFFFF/image--v1.png', text: '퍼블리셔' },
    { icon: 'https://img.icons8.com/ios/100/FFFFFF/image--v1.png', text: '캐드원(제도사)' },
    { icon: 'https://img.icons8.com/ios/100/FFFFFF/image--v1.png', text: '해외 세일즈' },
    { icon: 'https://img.icons8.com/ios/100/FFFFFF/image--v1.png', text: '해외 CS' },
    { icon: 'https://img.icons8.com/ios/100/FFFFFF/image--v1.png', text: '해외 CS' },
  ];
  return (
    <section className="w-full min-h-screen relative text-white py-36 px-6 md:px-20">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/bg-hero-sec.png" alt="hero background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-[#09a7ba]/50 to-[#0499d3]/80"></div>
      </div>

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fadeIn">
          <TooltipBox
            text="풀타임, 파트타임"
            position="left"
            className=" !text-[white] !bg-[#8BC4FF] md:!bg-white md:!text-[#40E2E8] animate-fadeIn delay-300">
            <h1 className="inline-block text-4xl lg:text-5xl font-extrabold leading-tight animate-fadeInUp mt-2">
              최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
            </h1>
          </TooltipBox>

          <p className="text-lg font-bold text-white inline-block rounded-md animate-fadeInUp">
            법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로 채용해보세요.
          </p>

          <p className="hidden md:block underline font-bold cursor-pointer animate-fadeInUp">개발자가 필요하신가요?</p>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 animate-fadeIn">
            <div>
              <p className="border-t pt-2 font-bold text-xl w-max">평균 월 120만원</p>
              <p className="text-sm opacity-90">임금을 해당 국가를 기준으로 계산합니다.</p>
            </div>
            <div>
              <p className="border-t pt-2 font-bold text-xl w-max">최대 3회 인력교체</p>
              <p className="text-sm opacity-90">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
            </div>
            <div>
              <p className="border-t pt-2 font-bold text-xl w-max">평균 3일, 최대 10일</p>
              <p className="text-sm opacity-90">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
            </div>
          </div>
        </div>

        <TooltipBox bgColor="#E9F7EF" textColor="#00C696" text="월 100만원" classNameParent="animate-fadeIn">
          <CardStackSlider data={peopleData} />
        </TooltipBox>
      </div>

      <div className="hidden md:block pt-20 animate-fadeIn">
        <SkillBoxAutoSlide items={skills} />
      </div>

      <div className="grid grid-cols-2 gap-1 md:hidden mb-12">
        {skills.map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-2">
            <Image src={'/images/checkbox.png'} width={20} height={20} alt="check-box" />
            <span className="text-xl font-medium">{item.text}</span>
          </div>
        ))}
      </div>
      <p className="block md:hidden text-yellow-300 underline font-bold cursor-pointer animate-fadeInUp">
        개발자가 필요하신가요?
      </p>
    </section>
  );
}
