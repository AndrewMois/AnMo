export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export const site = {
  name: 'Andriy Moiseyenko',
  role: 'QA Automation Engineer',
  email: 'amoiseyenko@ukr.net',
  resumeUrl: '/resume/Andriy-Moiseyenko-Resume.pdf',
  url: 'https://anmo.dev',
  title: 'Andriy Moiseyenko | QA Automation Engineer',
  description:
    'QA Automation Engineer who builds test systems across web, mobile, APIs, performance, and ML-driven products. I ship products too.',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrskyray/' },
    { label: 'GitHub', href: 'https://github.com/AndrewMois' }
  ],
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ] satisfies NavigationItem[]
} as const;
