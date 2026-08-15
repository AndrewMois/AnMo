# Design strategy

## Direction: Golden Precision

Golden Precision is warm engineering exactness. Cream and ivory create human warmth; graphite gives authority; disciplined gold marks importance; cobalt appears rarely as an electric counterpoint. The result must feel authored and expensive in craft, never like a luxury-services template.

The visual identity should emerge from proportion, typography, material depth, photographic art direction, and impeccable states rather than decorative volume.

## Palette

Working tokens, subject to contrast testing during implementation:

| Role           | Working color | Intent                               |
| -------------- | ------------- | ------------------------------------ |
| Warm ivory     | `#F5F0E7`     | Primary atmosphere                   |
| Soft cream     | `#EAE1D2`     | Layered surfaces                     |
| Graphite       | `#171918`     | Main text and structural authority   |
| Deep ink       | `#102027`     | Dark episodes and image framing      |
| Muted gold     | `#B48A3C`     | Control points and selected emphasis |
| Burnished gold | `#8D6728`     | Accessible darker gold state         |
| Cobalt         | `#2457C5`     | Rare technical charge                |
| Steel blue     | `#506A78`     | Accessible secondary system detail   |

Gold must not carry long body copy. Cobalt should be surprising and scarce: a selected node, focus ring, or moment of system resolution, not a second dominant brand color.

## Typography

Use a contemporary humanist or geometric sans as the primary voice. A restrained editorial serif may appear in one or two personal statements, never as a luxury affectation. A system monospace may label coordinates or states in very small doses.

Typography must create hierarchy through scale, rhythm, and whitespace. Avoid oversized generic startup headlines, all-caps section walls, and endless tiny technical labels.

Final font selection must consider licensing, loading cost, Cyrillic needs only if a Russian version is later approved, and visual distinction from common employer websites.

## Composition

The single memorable gesture is an **inspection spine**: a precise line or signal path that travels through the page and connects system states. It can move between foreground and background, cross controlled grid boundaries, and become a navigation aid without turning into a progress gimmick.

Desktop composition may be asymmetric, with changing density and scale. Mobile is designed independently: the spine becomes a compact rail or sequence of checkpoints, sticky behavior is reduced, and every section remains legible without horizontal movement.

The page should contain several distinct spatial episodes rather than identical rectangular sections:

1. expansive hero;
2. compressed proof field;
3. investigative quality sequence;
4. deep case-study chapters;
5. personal photographic pause;
6. minimal contact closure.

## Photography

The approved portrait has strong natural depth, generous dark negative space, a direct smile, and clothing colors already compatible with cream, graphite, muted green, and gold.

Do not turn it into a conventional circular headshot. Explore a monolithic treatment in which the portrait feels built into the composition:

- controlled crop using the existing negative space;
- subtle tonal grade toward deep ink and warm ivory;
- optional edge integration with the inspection spine;
- gentle material grain or light treatment only if it preserves skin and fabric realism;
- responsive art direction with separate desktop and mobile crops.

The original file remains untouched. Derived web assets should use AVIF/WebP plus a JPEG fallback, explicit dimensions, responsive sources, and a conservative quality setting.

## Motion

Motion communicates investigation and resolution:

- Hero: uncertain points or fragments organize into one readable system signal.
- Scroll: the inspection spine activates checkpoints as related content enters view.
- Case studies: context, risk, intervention, and evidence reveal in a controlled sequence.
- Interaction: hover, focus, and active states feel precise and tactile without changing layout geometry.
- Light: very subtle shifts may create depth, but no permanent ambient animation should consume attention.

Animation must use transform and opacity where possible, remain responsive on mid-range mobile devices, and have a complete reduced-motion state in which all content is immediately present.

## Avoid

- template-shaped hero plus card grid;
- employer-brand mimicry;
- generic SaaS dashboard visuals;
- terminal, code rain, glitch, bug icons, green checkmarks, magnifying glasses;
- glassmorphism as a default surface;
- gold gradients, marble, black-and-gold luxury clichés;
- walls of logos or skill badges;
- parallax and horizontal scroll that interfere with reading;
- animation used to hide ordinary composition.
