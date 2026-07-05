# QA Optimization Notes

1. Fixed hero title word wrapping: animation now splits by word first, then by character, so `Welcome` never breaks mid-word.
2. Replaced external hero dependency with a local 303KB MP4 to avoid blank first screen after deployment.
3. Compressed nine official PNG portraits into WebP assets, reducing the site portrait payload to under 1MB.
4. Added mobile single-column rules for hero, member stage, cards, posters, and interaction lab.
5. Set stable panel/card radii, min heights, and tap targets to prevent jumpy layout.
6. Kept hover movement restrained to avoid heavy, cheap-feeling motion.
7. Added `prefers-reduced-motion` support for motion-sensitive users.
8. Verified desktop and mobile have no document-level horizontal overflow.
9. Verified member interaction changes active profile image and text.
10. Kept source materials documented separately from deployable compressed assets.
