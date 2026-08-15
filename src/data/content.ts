export type ProofArea = {
  index: `0${number}`;
  label: string;
  detail: string;
};

export type ApproachStep = {
  index: `0${number}`;
  title: string;
  description: string;
};

export type CaseStudy = {
  id: 'bluwave-ai' | 'canada-revenue-agency' | 'young-mystic';
  kind: 'Professional system' | 'Product ownership';
  organization: string;
  title: string;
  introduction: string;
  context: string;
  response: readonly string[];
  demonstrates: readonly string[];
};

export type SupportingBuild = {
  id: 'guided-by-scent' | 'alex-healing';
  title: string;
  description: string;
  evidence: string;
};

export type CapabilityGroup = {
  title: string;
  statement: string;
  evidence: readonly string[];
};

export const content = {
  hero: {
    eyebrow: 'Quality engineering · Ottawa, Canada',
    title: 'QA Automation Engineer',
    titleContinuation: "with a developer's perspective.",
    summary:
      'I build quality systems for products that need to be understood beyond the interface — across devices, APIs, backend behaviour, data flows, and ML-driven decisions.',
    primaryAction: 'View selected work',
    secondaryAction: 'Start a conversation'
  },
  proofAreas: [
    {
      index: '01',
      label: 'Automation architecture',
      detail: 'Frameworks shaped around the system, not inherited by habit.'
    },
    {
      index: '02',
      label: 'APIs and backend behaviour',
      detail: 'Contracts, state, access, persistence, and negative paths.'
    },
    {
      index: '03',
      label: 'AI/ML system validation',
      detail: 'Forecast quality examined as both data and product behaviour.'
    },
    {
      index: '04',
      label: 'Performance and reliability',
      detail: 'Scenarios, thresholds, diagnostics, and reproducible evidence.'
    },
    {
      index: '05',
      label: 'Product development',
      detail: 'First-hand understanding of the systems behind the interface.'
    }
  ] satisfies ProofArea[],
  approach: {
    eyebrow: 'The system beneath the surface',
    title: 'Quality begins before the first test runs.',
    introduction:
      'I start by building a working model of the product: what it promises, how its layers communicate, where uncertainty enters, and which failures would matter most.',
    steps: [
      {
        index: '01',
        title: 'Understand the system',
        description:
          'Trace the user journey, services, data, environments, and delivery path until the visible behaviour has an explainable structure.'
      },
      {
        index: '02',
        title: 'Locate meaningful risk',
        description:
          'Turn requirements, boundaries, state transitions, and unknowns into a deliberate testing strategy rather than an indiscriminate inventory.'
      },
      {
        index: '03',
        title: 'Apply pressure with purpose',
        description:
          'Exercise negative paths, integrations, permissions, devices, performance profiles, and model behaviour where the system is most likely to reveal its truth.'
      },
      {
        index: '04',
        title: 'Create clear evidence',
        description:
          'Build automation, diagnostics, and CI feedback that help a team understand what failed, why it matters, and whether the product is ready.'
      }
    ] satisfies ApproachStep[]
  },
  caseStudies: [
    {
      id: 'bluwave-ai',
      kind: 'Professional system',
      organization: 'BluWave AI',
      title: 'Quality architecture for AI-powered energy products',
      introduction:
        'At BluWave AI, I own the testing approach across web and mobile interfaces, APIs, backend services, data workflows, and forecasting behaviour.',
      context:
        'A growing product surface needed more than isolated automated checks. It needed coherent quality foundations built from first principles: useful coverage, reliable environments, readable evidence, and methods suited to both deterministic software and model-driven behaviour.',
      response: [
        'Architected dedicated automation foundations for UI and mobile testing with WebdriverIO, Appium, and Mocha; API regression with Bruno and Postman/Newman; SOAP/XML services; and performance, load, and soak work with k6 and Locust.',
        'Integrated suites into Dockerized Jenkins pipelines with environment resolution, secure configuration, normalized reporting, and Jira/Xray result publishing.',
        'Designed risk-based API coverage across authentication, access control, CRUD workflows, filtering, persistence, schemas, status behaviour, negative paths, and deterministic cleanup.',
        'Validated forecasting quality through scenario-based testing and measures including MAE, RMSE, MAPE, correlation, bias, peak miss, and lag, connecting statistical behaviour to product expectations.',
        'Traced failures across logs, API responses, dashboards, devices, data, and CI evidence to give developers and product owners a clear engineering signal.'
      ],
      demonstrates: [
        'QA strategy ownership',
        'Automation architecture',
        'AI/ML validation',
        'Performance engineering',
        'Cross-layer diagnosis'
      ]
    },
    {
      id: 'canada-revenue-agency',
      kind: 'Professional system',
      organization: 'Canada Revenue Agency',
      title: 'Turning negative paths into a reusable testing capability',
      introduction:
        'At the Canada Revenue Agency, I developed Java automation with Selenium and TestNG for federal web applications and helped shape test design for a key initiative.',
      context:
        'Regression coverage needed to remain repeatable while requirements, edge cases, and delivery decisions continued to evolve across an Agile team.',
      response: [
        'Translated user stories and acceptance criteria into focused approaches and reusable automated scenarios.',
        'Created a negative-testing framework that made edge-case exploration systematic instead of case-by-case.',
        'Integrated automation into Jenkins, reviewed run evidence, triaged failures, and worked directly with developers on resolution.',
        'Coordinated test design and automation structure with stakeholders while reviewing work and mentoring junior testers.'
      ],
      demonstrates: [
        'Java automation',
        'Negative testing',
        'CI/CD feedback',
        'Technical leadership',
        'Collaborative delivery'
      ]
    },
    {
      id: 'young-mystic',
      kind: 'Product ownership',
      organization: 'Independent product',
      title: 'The product behind the tester',
      introduction:
        'Young Mystic is a multilingual, mobile-first essential-oil library used by more than 200 people — designed, built, and evolved as a complete product rather than a portfolio exercise.',
      context:
        'The product combines a calm consumer experience with authentication, structured editorial content, multilingual delivery, content management, and carefully bounded offline behaviour.',
      response: [
        'Built the application with SvelteKit, MongoDB, and Sanity, including authentication, account flows, server-side data boundaries, and a nontechnical publishing workflow.',
        'Designed the PWA and mobile experience around fast navigation, resilient public metadata, safe offline fallback, and clear separation from authenticated premium content.',
        'Maintained the product across architecture, UX, content modelling, security decisions, localization, browser QA, and deployment rather than treating development as a one-time handoff.'
      ],
      demonstrates: [
        'End-to-end product thinking',
        'Application architecture',
        'Authentication and data boundaries',
        'PWA reliability',
        'Long-term ownership'
      ]
    }
  ] satisfies CaseStudy[],
  developerPerspective: {
    eyebrow: 'Developer’s perspective',
    title: 'I know where systems break because I know how they are built.',
    body: [
      'Building complete products changed the way I test them. An interface is never only an interface: it is a contract with state, services, data, permissions, content, devices, and deployment decisions behind it.',
      'That perspective lets me move naturally between a user-visible symptom and the layer that produced it — and lets me build automation that reflects the actual architecture instead of merely replaying steps.'
    ]
  },
  supportingBuilds: [
    {
      id: 'guided-by-scent',
      title: 'Guided by Scent',
      description:
        'A calm mobile-first digital home built with SvelteKit and Sanity, replacing a long service page with a clear route-based product experience.',
      evidence:
        'Content modelling, responsive art direction, resilient CMS fallbacks, route transitions, and browser verification across WebKit and Chromium.'
    },
    {
      id: 'alex-healing',
      title: 'Alex Healing',
      description:
        'A social-first personal platform with a universal content architecture and a deliberately simple Russian-language editing experience.',
      evidence:
        'SvelteKit, Sanity, backward-compatible content modelling, mobile atmosphere, and touch behaviour refined without destabilizing layout geometry.'
    }
  ] satisfies SupportingBuild[],
  capabilityGroups: [
    {
      title: 'Automation systems',
      statement:
        'I choose and shape frameworks around the product surface, the team, and the evidence a release decision actually needs.',
      evidence: ['Java · Selenium · TestNG', 'WebdriverIO · Appium · Mocha', 'Cypress · Playwright']
    },
    {
      title: 'Interfaces and services',
      statement:
        'I test beyond happy-path responses: identity, authorization, state, persistence, cleanup, contracts, and failure behaviour.',
      evidence: ['REST · Bruno · Postman/Newman', 'SOAP · XML', 'Backend and data workflows']
    },
    {
      title: 'Performance and models',
      statement:
        'I treat performance and forecasting as observable behaviours that require designed scenarios, thresholds, and diagnostics.',
      evidence: ['k6 · Locust', 'Load · soak · performance', 'MAE · RMSE · MAPE · bias · lag']
    },
    {
      title: 'Delivery and diagnosis',
      statement:
        'Automation becomes valuable when it survives environments, runs consistently, and leaves a team with a clear signal.',
      evidence: ['Jenkins · Docker · Git', 'Jira/Xray', 'Logs · devices · CI evidence']
    },
    {
      title: 'Product development',
      statement:
        'I build production-minded web systems, which gives my quality work architectural context and respect for the user experience.',
      evidence: [
        'SvelteKit · TypeScript · JavaScript',
        'MongoDB · Sanity',
        'PWA · Vercel · responsive UX'
      ]
    }
  ] satisfies CapabilityGroup[],
  about: {
    eyebrow: 'About',
    title: 'Precision is a form of responsibility.',
    body: [
      'I am most engaged when a system is unfamiliar, consequential, and worth understanding properly. I like finding the structure inside ambiguity, turning it into a practical testing method, and leaving the team with something clearer than I found.',
      'My path includes software development, infrastructure support, and a Master of Pharmacy. Different disciplines, same instinct: details matter because people eventually live with the result.',
      'I care about technical correctness and about how a product feels in a person’s hands. For me, quality includes both.'
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a complex system worth understanding?',
    body: 'I am always interested in thoughtful products, difficult quality problems, and teams that value clear engineering evidence.',
    action: 'Write to me'
  }
} as const;
