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
    expect(content.caseStudies.map((study) => study.id)).toEqual([
      'bluwave-ai',
      'canada-revenue-agency',
      'young-mystic'
    ]);

    expect(content.supportingBuilds.map((build) => build.id)).toEqual([
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
    expect(content.hero.title).toBe('QA Automation Engineer');
    expect(content.hero.title).not.toContain('Senior');
  });

  it('keeps case-study identifiers unique', () => {
    const ids = content.caseStudies.map((study) => study.id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
