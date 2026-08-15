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
  title: 'Andriy Moiseyenko — QA Automation Engineer',
  description:
    'QA Automation Engineer building quality systems across interfaces, APIs, backend services, performance, and AI-driven products.',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mrskyray/' },
    { label: 'GitHub', href: 'https://github.com/AndrewMois' }
  ],
  navigation: [
    { label: 'Approach', href: '#approach' },
    { label: 'Selected work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ] satisfies NavigationItem[]
} as const;
