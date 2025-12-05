export interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: '채용',
    children: [
      { title: '해외 개발자 원격 채용', href: '/jobs/overseas-developer' },
      { title: '외국인 원격 채용 (비개발 직군)', href: '/jobs/overseas-non-dev' },
      { title: '한국어 가능 외국인 채용', href: '/jobs/korean-speaking' },
    ],
  },
  {
    title: '해외 개발자 활용 서비스',
    href: '/services/overseas-dev',
  },
];
