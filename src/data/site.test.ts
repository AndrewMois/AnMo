import { describe, expect, it } from 'vitest';

import { site } from './site';

describe('site identity', () => {
  it('uses the approved public positioning', () => {
    expect(site.role).toBe('QA Automation Engineer');
    expect(site.email).toBe('amoiseyenko@ukr.net');
    expect(site.url).toBe('https://anmo.dev');
  });

  it('keeps navigation anchors unique and locally resolvable', () => {
    const anchors = site.navigation.map((item) => item.href);

    expect(new Set(anchors).size).toBe(anchors.length);
    expect(anchors.every((anchor) => anchor.startsWith('#'))).toBe(true);
  });
});
