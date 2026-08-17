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
  title: 'Andriy Moiseyenko | QA Automation Engineer in Ottawa',
  description:
    'Andriy Moiseyenko is a QA Automation Engineer in Ottawa, Canada, building test automation across web, mobile, APIs, performance, CI/CD, and AI systems.',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anmou/' },
    { label: 'GitHub', href: 'https://github.com/AndrewMois' }
  ],
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ] satisfies NavigationItem[]
} as const;
