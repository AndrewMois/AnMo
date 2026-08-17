import { describe, expect, it } from 'vitest';

import { site } from './site';

describe('site identity', () => {
  it('uses the approved public positioning', () => {
    expect(site.role).toBe('QA Automation Engineer');
    expect(site.email).toBe('amoiseyenko@ukr.net');
    expect(site.resumeUrl).toBe('/resume/Andriy-Moiseyenko-Resume.pdf');
    expect(site.url).toBe('https://anmo.dev');
    expect(site.title).toContain(site.name);
    expect(site.title).toContain(site.role);
    expect(site.description).toContain(site.name);
    expect(site.description).toContain('Ottawa');
  });

  it('keeps navigation anchors unique and locally resolvable', () => {
    const anchors = site.navigation.map((item) => item.href);

    expect(new Set(anchors).size).toBe(anchors.length);
    expect(anchors.every((anchor) => anchor.startsWith('#'))).toBe(true);
  });

  it('uses secure professional profile links', () => {
    expect(site.socialLinks.every((link) => link.href.startsWith('https://'))).toBe(true);
  });
});
