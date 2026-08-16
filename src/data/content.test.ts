import { describe, expect, it } from 'vitest';

import { content } from './content';

const excludedProjects = [
  'Journal',
  'OpinioNet',
  'SmartFace',
  'GameTro',
  'SoulYoga',
  'Magic Bookstore',
  'RoboFriends',
  'Anime Museum'
];

describe('portfolio content', () => {
  it('contains the approved primary evidence set', () => {
    expect(content.professionalCases.map((study) => study.id)).toEqual([
      'bluwave-ai',
      'canada-revenue-agency'
    ]);

    expect(content.products.map((product) => product.id)).toEqual([
      'young-mystic',
      'guided-by-scent',
      'alex-healing'
    ]);
  });

  it('does not restore excluded portfolio projects', () => {
    const serializedContent = JSON.stringify(content);

    for (const project of excludedProjects) {
      expect(serializedContent).not.toContain(project);
    }
  });

  it('does not use Senior as the public title', () => {
    expect(content.hero.eyebrow).toContain('QA Automation Engineer');
    expect(content.hero.eyebrow).not.toContain('Senior');
  });

  it('keeps case-study identifiers unique', () => {
    const ids = content.professionalCases.map((study) => study.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it('publishes the approved live products without source links', () => {
    expect(content.products.map((product) => product.href)).toEqual([
      'https://young-mystic.com',
      'https://anna-home-five.vercel.app',
      'https://alexhealing.com'
    ]);
    expect(JSON.stringify(content)).not.toContain('View source');
  });
});
