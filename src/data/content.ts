export type PracticeArea = {
  index: `0${number}`;
  title: string;
  tools: readonly string[];
};

export type ProfessionalCase = {
  id: 'bluwave-ai' | 'canada-revenue-agency';
  marker: string;
  organization: string;
  headline: string;
  introduction: string;
  proof: readonly string[];
  stack: readonly string[];
};

export type Product = {
  id: 'young-mystic' | 'guided-by-scent' | 'alex-healing';
  index: `0${number}`;
  title: string;
  kicker: string;
  description: string;
  proof: readonly string[];
  href: `https://${string}`;
};

export const content = {
  hero: {
    eyebrow: 'QA Automation Engineer · Ottawa',
    title: 'I know where systems break.',
    titleContinuation: 'I build them too.',
    summary:
      'I build test systems for web, mobile, APIs, performance, and ML-driven products — then trace failures past the first convenient answer.',
    primaryAction: 'See the work',
    secondaryAction: 'Talk to me',
    easterEgg: 'Yes, I tested this site.'
  },
  practice: {
    eyebrow: 'What I work with',
    title: 'The useful stuff, up front.',
    areas: [
      {
        index: '01',
        title: 'Web & mobile',
        tools: ['WebdriverIO · Appium · Mocha', 'Java · Selenium · TestNG', 'Playwright · Cypress']
      },
      {
        index: '02',
        title: 'APIs & backend',
        tools: ['REST · Bruno · Postman/Newman', 'SOAP · XML', 'Auth · data · negative paths']
      },
      {
        index: '03',
        title: 'Performance & ML',
        tools: ['k6 · Locust', 'Load · soak · performance', 'MAE · RMSE · MAPE · bias · lag']
      },
      {
        index: '04',
        title: 'Delivery & diagnosis',
        tools: ['Jenkins · Docker · Git', 'Jira/Xray', 'Logs · devices · CI']
      }
    ] satisfies PracticeArea[]
  },
  professionalCases: [
    {
      id: 'bluwave-ai',
      marker: 'AI for clean energy',
      organization: 'BluWave AI',
      headline: "I didn't inherit one test stack. I built several.",
      introduction:
        'At BluWave AI, a lean QA team covers web, iOS, Android, APIs, backend services, data flows, and ML forecasts. My job is to make that surface testable — and the failures explainable.',
      proof: [
        'Built dedicated frameworks for UI/mobile, REST and SOAP APIs, plus performance, load, and soak testing.',
        'Put the suites into Dockerized Jenkins pipelines with clean reports and Jira/Xray publishing.',
        'Tested forecasts as product behaviour: accuracy, bias, lag, missed peaks, and real business scenarios.'
      ],
      stack: [
        'WebdriverIO · Appium',
        'Bruno · Postman/Newman',
        'k6 · Locust',
        'Jenkins · Docker',
        'ML validation'
      ]
    },
    {
      id: 'canada-revenue-agency',
      marker: 'Federal delivery',
      organization: 'Canada Revenue Agency',
      headline: 'The unhappy path, made reusable.',
      introduction:
        'At the CRA, I built Java automation for federal web applications and turned negative testing from a checklist into a framework the team could reuse.',
      proof: [
        'Translated stories and edge cases into focused Selenium and TestNG scenarios.',
        'Integrated the suite with Jenkins and worked directly with developers when runs failed.',
        'Helped shape test design for a key initiative while reviewing work and mentoring junior testers.'
      ],
      stack: ['Java · Selenium · TestNG', 'Negative testing', 'Jenkins CI/CD', 'Test design']
    }
  ] satisfies ProfessionalCase[],
  products: [
    {
      id: 'young-mystic',
      index: '01',
      title: 'Young Mystic',
      kicker: 'Built for 200+ people. Owned end to end.',
      description:
        'A multilingual essential-oil library that grew into a real product — with accounts, structured content, mobile UX, and carefully bounded offline behaviour.',
      proof: [
        'SvelteKit · MongoDB · Sanity',
        'Authentication · PWA',
        'Architecture · UX · long-term ownership'
      ],
      href: 'https://young-mystic.com'
    },
    {
      id: 'guided-by-scent',
      index: '02',
      title: 'Guided by Scent',
      kicker: 'A quiet product with a lot happening underneath.',
      description:
        'A mobile-first digital home with route-based services, a nontechnical Sanity workflow, and deliberately soft interaction design.',
      proof: ['SvelteKit · Sanity', 'Responsive art direction', 'Playwright · WebKit'],
      href: 'https://anna-home-five.vercel.app'
    },
    {
      id: 'alex-healing',
      index: '03',
      title: 'Alex Healing',
      kicker: 'Built to feel personal. Built to stay editable.',
      description:
        'A social-first platform with a universal content model and a simple Russian-language Studio for everyday publishing.',
      proof: ['SvelteKit · Sanity', 'Content architecture', 'Mobile · touch behaviour'],
      href: 'https://alexhealing.com'
    }
  ] satisfies Product[],
  about: {
    eyebrow: 'A little context',
    title: 'Curious by default. Precise on purpose.',
    body: [
      'I started in pharmacy, moved through infrastructure and software development, and found my place in quality engineering. The common thread is simple: details matter when people live with the result.',
      'I like unfamiliar systems, honest teams, and problems that resist the first obvious answer.'
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk before the next release.",
    body: 'If the product is complicated, good. Those are the interesting ones.',
    action: 'Write to me'
  }
} as const;
