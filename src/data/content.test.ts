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

  it('publishes only confirmed HTTPS project links', () => {
    const links: Array<{ label: string; href: string }> = [];

    for (const study of content.caseStudies) {
      if ('links' in study && study.links) links.push(...study.links);
    }

    for (const build of content.supportingBuilds) links.push(...build.links);

    expect(links.length).toBeGreaterThan(0);
    expect(links.every((link) => link.href.startsWith('https://'))).toBe(true);
    expect(links.some((link) => link.href.includes('demo.young-mystic.com'))).toBe(false);
    expect(links.some((link) => link.href.includes('guidedbyscent.ca'))).toBe(false);
  });
});
