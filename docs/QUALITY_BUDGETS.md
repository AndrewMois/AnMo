# Quality budgets

These budgets protect the portfolio's defining qualities: immediate reading, calm interaction, reliable evidence, and respectful use on mobile connections. They are launch gates, not aspirational suggestions.

## Automated build budgets

| Budget                                           |                         Limit | Current Phase 6 result |
| ------------------------------------------------ | ----------------------------: | ---------------------: |
| Generated HTML, including critical CSS           |                       `25 KB` |              `18.5 KB` |
| Client scripts                                   |     `1` inline script maximum |                    `1` |
| Client JavaScript                                | `3.5 KB` uncompressed maximum |               `2.1 KB` |
| All responsive portrait derivatives in the build |              `1.2 MB` maximum |              `1.12 MB` |
| Serious or critical axe violations               |                           `0` |                    `0` |
| Page-level horizontal overflow at target widths  |                        `0 px` |                 `0 px` |

The repository enforces these limits with `npm run test:links` and `npm run test:e2e`.

## Preview and production Web Vitals

The real hosted Preview and production deployment must meet the following mobile targets before approval:

| Metric                    |     Target |
| ------------------------- | ---------: |
| Largest Contentful Paint  |  `≤ 2.5 s` |
| Cumulative Layout Shift   |   `≤ 0.10` |
| Interaction to Next Paint | `≤ 200 ms` |

These must be measured against the hosted URL because local preview timings do not represent network, CDN, TLS, cache, or production font behaviour. A regression in any metric blocks production until it is understood or explicitly accepted.

## Functional and accessibility gates

- The complete narrative is readable without JavaScript.
- Reduced-motion users receive no decorative reveal or smooth-scroll requirement.
- Every internal navigation link resolves to exactly one target.
- Every public external link uses HTTPS and an appropriate `rel` value.
- Live external availability is rechecked against the real Preview before production.
- Keyboard focus is visible and no interaction depends on hover.
- Heading order, landmarks, alternative text, color contrast, and touch geometry remain part of every browser review.
