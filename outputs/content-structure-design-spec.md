# Chill's TWICE Welcome - Content Structure And Design Spec

## Content Structure
- Hero: full-screen ambient video, fixed glass navigation, high-impact title, AI visual designer identity.
- Character index: nine TWICE members, official profile imagery, one active portrait with member switcher.
- Cinema / works / posters: three curatorial cards plus six visual poster studies.
- Interaction lab: six ReactBits-inspired text effects for a Korean girl-group feeling without noisy decoration.

## PC Design Rules
- Canvas: max-width 1700px, generous vertical rhythm, fixed glass navigation.
- Palette: goose yellow `#f5dc78`, cloud white, cool blue `#9ecfff`, deep ink `#17314f`.
- Material: translucent panels with blur, thin blue-gray borders, restrained shadows.
- Typography: large editorial hero type, compact card headings, no negative letter spacing.

## Mobile Rules
- One-column layout below 720px.
- Keep video local and lightweight; portraits use compressed WebP assets.
- Reduce poster wall height, keep tap targets above 44px, avoid overlapping nav text.
- Respect reduced-motion preferences.

## Research Notes
- Xiaohongshu was reachable but unauthenticated search was gated by “登录探索更多内容”, so no XHS images were extracted.
- JYP official profile page supplied member names, birth dates, and profile images.
- ReactBits was used as animation direction reference for split, shimmer, blur, outline, marquee, and reveal text effects.
