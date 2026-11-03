# The Town House, Nahan: Direction Brief

## Build status: Phase 5 pre-flight audit
| Check | Result |
|---|---|
| Slop (gradients, centred stack, identical cards, fonts) | PASS: 5/7 split hero, tilted notes, Young Serif + Mukta |
| Action colour | PASS: vermilion only on Call / Directions / open-now |
| Scale contrast | PASS: 120px chapter times vs 12px labels ≈ 10:1 |
| Imagery honesty | PASS: labelled placeholders only |
| Thumb reach | PASS: Today card in the first scroll, plus a mobile bottom dock |
| vs Suto / Chilli Bistro | Layout 5 · Type 5 · Colour 5 · Hero 5 · Order 4 |
| vs old site | 5 on every axis |
| Top-5 fixes | Title, meta and JSON-LD · real HTML content · zoom allowed · thumb-reach CTAs · 4.6★ linked |

**Fact conflict:** the old site says 11:30–23:00, but you said 11–11, so the build uses 11–11. Please confirm. Menu categories, counts and six prices were taken from the old site and are marked "to confirm".

**Shot list:** (1) the sticky-note arch, lit · (2) black-and-white frames of old Nahan · (3) sage wall with the pendants · (4) momos in the steamer · (5) Baba Ji Ki Booti · (6) tikka on the family table · (7) the birthday long table · (8) the window table at 11 am. Natural light, no flash.

**Wow upgrades:** a live review-notes feed · a birthday booking form · a full Hindi toggle.

## Facts on file (from your answers and the uploads)
- **The Town House**, All-Day Cafe & Kitchen · MC Complex, near Delhi Gate, Ramkundi, Nahan, HP 173001
- Call **98829 90174** (not on WhatsApp, so the site will have no WhatsApp button) · Open daily 11 am–11 pm (Diwali hours may differ)
- Google **4.6 · 129 reviews** · Zomato **4.5 · 462 delivery ratings**
- Owner: Dinesh Gujral
- Dine-in, takeaway, delivery, reservations, private parties, birthdays · Parking, Wi-Fi, AC, kid-friendly · UPI, cards, cash
- Real reviews (first name + last initial): Anu S., Aakash G., Mohit C., Lucky B., Nishant, Aayush S., Neerja T., S. G., Sidharth C.
- **Inferred, please confirm:** cuisine is multi-cuisine (North Indian, Indo-Chinese, Italian, continental, mocktails). This comes from the review photos: momos, tikkas, chole-lachha paratha, penne, pizza, burgers, Blue Lagoon.
- **Estimated:** cost for two is about ₹1,200. Google's per-person ranges in the reviews run from ₹200 to ₹1,000, and most fall between ₹400 and ₹800. The site will mark this as approximate.
- **Placeholders:** full menu and ₹ prices, signature dishes, story, offers, email, Instagram handle (thetownhousee, to confirm).
- **Things only this café has:** the clock in the logo's "O", the sticky-note wall, black-and-white framed photos of old Nahan (including the clock-tower gate), sage-green walls, scalloped pendant lamps, bentwood chairs, vinyl records, and a location near Delhi Gate.

## Phase 1B: Existing site audit (thetownhouse.co.in)
The page loads, but its HTML contains no readable content: the title is literally "Template 1", and everything else is painted by JavaScript. I can't render it visually, so the table below lists only what I could verify. Mobile and desktop screenshots would let me finish the audit.

| Area | Flaw found | Severity | Fix |
|---|---|---|---|
| Local SEO | Page title is "Template 1". It has no name, area or cuisine. | High | Title "The Town House: All-Day Cafe & Kitchen, Delhi Gate, Nahan", plus meta description, Open Graph tags and `Restaurant` JSON-LD |
| Speed & tech | Content exists only after JavaScript runs, so Google and AI search see an empty page | High | Server-readable HTML for hours, address, rating and menu |
| Accessibility | `maximum-scale=1, user-scalable=no` blocks pinch-zoom | High | Zoom allowed, 16px+ body text, 44px tap targets |
| Rest (CTAs, menu, trust) | Not verifiable without a render | n/a | Needs screenshots |

**Top 5 problems the new site MUST solve:** (1) The name, area and cuisine are invisible to search. (2) Content depends on JavaScript. (3) Zoom is blocked. (4) Tap-to-call and directions must be reachable within one thumb-scroll; I couldn't verify the current site, so this is a hard requirement. (5) The real 4.6★ / 129 reviews must be visible and linked.

## Phase 2: Inspiration research
N = letters in "TheTownHouse" = **12**
- (12 mod 20)+1 = **13** → Made in Webflow
- (36 mod 20)+1 = **17** → Behance
- (84 mod 20)+1 = **5** → Land-book
- (132 mod 20)+1 = **13**, a repeat, so I took the next number down → **14** → Framer gallery

**Honesty note:** I can't reliably browse those galleries from here. They load their content with JavaScript and some block automated visits. I haven't visited them and won't claim to have. The mechanics I'm borrowing come from your references (Bar Tòpas, Crav, STC Cafe, BiteBliss) and from patterns I know well:
- **STC Cafe** (your upload): type running behind a cut-out figure, and a 3-column menu (category rail / featured dish / price list). I'm borrowing the menu-rail mechanic.
- **Bar Tòpas** (your link): playful collage with personality. I'm borrowing deliberate overlaps that break section edges.
- **Crav Burgers** (your link; Awwwards blocked my visit, so this is from memory only): appetite-scale food against a strong colour field.

## Phase 3: Dice roll (T-H-E-T-O-W-N-H)
| Cat | Letter | Maths | Result |
|---|---|---|---|
| A Layout | T=20 | 20 mod 12+1 = 9 | Collage / scrapbook with deliberate overlaps |
| B Hero | H=8 | 8 mod 10+1 = 9 | Real reviews as hero |
| C Display | E=5 | 5 mod 10+1 = 6 | Soft rounded display serif |
| D Colour | T=20 | 20 mod 10+1 = 1 | Warm paper + ink + one loud accent |
| E Nav | O=15 | 15 mod 8+1 = 8 | Tabbed menu-category nav |
| F Motion | W=23 | 23 mod 8+1 = 8 | Scroll-snapped chapters, re-rolled to **2 Staggered reveals** because snap-scrolling fights a long menu on mobile |
| G Imagery | N=14 | 14 mod 8+1 = 7 | Illustration + photo mix |
| H Surface | H=8 | 8 mod 6+1 = 3 | Paper / print texture |

## Three directions

### 1. "Twelve to Eleven" ★ recommended
**Concept:** the clock in the logo becomes the site's spine. The café runs 11 am–11 pm, so the site is divided into chapters by hour (11:00 brunch, 16:00 chai and snacks, 20:00 dinner), and a live clock-face badge shows whether it's open right now. The hero is the café's real sticky-note wall, with the real Google reviews written on the notes.
- **Dice:** as rolled (collage, reviews hero, soft serif, paper + accent, tabbed menu, staggered reveals, photo + line illustration, paper grain)
- **Mood:** sage plaster, bentwood, notes on a wall, late-afternoon light
- **Colour:** `--canvas #F4EFE4` paper · `--ink #14281F` bottle-green black (from the logo) · `--surface #E6E9DC` sage tint · `--rule ink at 8%` · `--action #D9542B` the red of the clock-tower gate, used **only** on Call / Directions / Reserve / Open-now
- **Type:** Young Serif (display, 128px down to 56px) + Mukta (body and Hindi, 17px, with micro labels at 12px uppercase). Two families, and Mukta covers Devanagari.
- **Flow:** reviews wall (hero) → open-now clock + call → the hours as chapters (story strip with the old-Nahan photos) → tabbed menu → room gallery (collage) → find us at Delhi Gate → footer
- **Signature interaction:** each sticky note lifts and straightens on hover or tap, and the clock hands show the real time

### 2. "The Nahan Register"
**Concept:** an archival town gazette built around the black-and-white heritage photos on their walls, like a newspaper masthead from 1950s Nahan.
- Magazine spread on a 12-column grid (8/4) · gargantuan type-only masthead with a live dateline · near-monochrome newsprint + bottle-green action colour · Newsreader + IBM Plex Sans Devanagari · black-and-white photos with green duotone · hairline rules · almost no motion
- **Mood:** newsprint, archive, restraint, premium

### 3. "After Delhi Gate"
**Concept:** the evening crowd. Mocktails, dinner, birthdays and the bright Blue Lagoon.
- Offset hero with a cut-out drink breaking into the next section · deep green-black canvas + brass accent · Big Shoulders Display + Hind · horizontal-scroll "night menu" track · parallax depth
- **Mood:** dim, warm, lively, dinner-out

**Why direction 1:** it's built from things only this café has (the clock logo, the sticky-note wall, the hours, real reviews), so a regular would recognise it with the name removed. It also matches the brief you picked: an editorial base with playful moments.
