import Image from 'next/image';

interface ContactItem {
  icon: string;
  title: string;
  isIcon: boolean;
}

export default function FooterSection() {
  const contactList: ContactItem[] = [
    {
      icon: 'https://img.icons8.com/fluency-systems-regular/50/source-code.png',
      title: '해외 개발자 원격 채용',
      isIcon: true,
    },
    { icon: 'https://img.icons8.com/puffy-filled/64/user.png', title: '외국인 원격 채용 (비개발)', isIcon: true },
    { icon: 'kor', title: '한국어 가능 외국인 채용', isIcon: false },
    { icon: 'https://img.icons8.com/material-rounded/64/settings.png', title: '해외 개발자 활용 서비스', isIcon: true },
  ];

  return (
    <footer className="w-full bg-[#FBFBFB] px-6 md:px-20 py-16 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Image src={'/images/logo-2.png'} alt="logo-2" width={50} height={50} />
              <span className="text-2xl font-bold text-gray-900">hyperhire</span>
            </div>
            <p className="leading-relaxed mb-4">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
            <p className="font-medium">010-0000-0000</p>
            <p className="font-medium">aaaaa@naver.com</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
            {contactList.map((item, idx) => (
              <div key={idx} className="rounded-xl p-5 bg-white flex flex-col gap-3">
                <div className="flex w-max px-3 py-3 rounded bg-gray-100 text-2xl opacity-70">
                  {item.isIcon ? (
                    <Image src={item.icon} alt={'icon' + item.title} width={20} height={20} />
                  ) : (
                    <span className="uppercase text-xs font-bold">{item.icon}</span>
                  )}
                </div>
                <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                <button className="text-sm text-gray-600 flex items-center gap-1">바로가기</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10 text-sm text-gray-600">
          <div>
            <p className="font-bold mb-1">상호명</p>
            <p className="mb-4">하이퍼하이어</p>
            <p className="font-bold mb-1">Hyperhire India Private Limited</p>
          </div>

          <div>
            <p className="font-bold mb-1">대표 CEO</p>
            <p className="mb-4">김주현</p>
            <p className="font-bold mb-1">사업자등록번호 CIN</p>
            <p className="font-bold">U74110DL2016PTC290812</p>
          </div>

          <div>
            <p className="font-bold mb-1">주소 ADDRESS</p>
            <p className="leading-relaxed font-bold">
              서울특별시 강남대로 479, 지하 1층 238호
              <br />
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
              <br />
              110053 India
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-500">© 2023 Hyperhire</p>
      </div>
    </footer>
  );
}
