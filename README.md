# INSOMNIA FEST WEBSITE — V11 FINAL

This build implements the latest event-card reference and typography/motion corrections.

## Event cards
- Desktop: large 2-column poster cards with fixed 520px height.
- Mobile: fixed 540px card height (525px on very small screens).
- Poster area is locked to a true 3:4 ratio so final artwork can be dropped in without changing card geometry.
- Event card now contains: event number, event title, description, DATE, TIME, LOCATION, VENUE, FORMAT and PRIZE, plus REGISTER.
- Logistics default to TBA until final values are supplied in `EVENT_DETAILS` in `app.js`; this prevents invented event information.

## Typography
- Larger event descriptions and category filters.
- Category names and event titles have stronger hierarchy.
- Long category titles are prevented from being clipped.
- Spotlight “THE NIGHTS OF INSOMNIA” uses safe line-height to prevent overlap.

## Animation
- Removed the continuous random-looking vertical floating motion from event cards.
- Event cards now enter with a controlled alternating horizontal slide, slight tilt and scale settle.
- Category cards use the same deliberate entrance treatment.
- Existing GSAP/ScrollTrigger cinematic motion remains for other sections.

## Other fixes retained
- Fixed navigation bar.
- Mobile pass logo visible.
- Newsletter email field removed from footer.
- Footer centered and readable.
- Instagram link points to the current INSOMNIA PiMS Instagram URL.

## Deployment
Replace the previous site files with this ZIP's contents. Do not merge the old stylesheet with this version.

### Latest visual update — 26 Sep 2026
- Festival dates are now displayed as a large headline-style element on the hero, with responsive desktop/mobile sizing.
- Brochure and Event Registration on the “Every Corner. One Insomnia.” section are now large editorial CTA blocks rather than small pill buttons.
- Mr & Miss Insomnia is now placed as the 10th discovery card, directly beside Photography on the two-column desktop/landscape grid. Mobile remains single-column.


### Main Spotlight carousel
Add the second 16:9 landscape poster as `assets/spotlight/main-landscape-02.png`. The homepage will automatically alternate between `main-landscape.png` and `main-landscape-02.png` every 5 seconds with a horizontal slide transition.

### Developer Instagram
Set `DEVELOPER_INSTAGRAM_URL` near the top of `app.js` to the developer's Instagram profile URL. The footer Instagram button sits between the “Built by Arnav Bansal (Batch 2022)” and “Digital Club, PiMS” lines.

## Get Passes page
The Get Passes page is fully integrated into the existing site structure:
- `passes.html` contains the page markup and batch/UPI data.
- Pass-page CSS is appended to the existing `styles.css`; there is no separate pass stylesheet.
- UPI copy-to-clipboard behavior is integrated into the existing `app.js`; there is no separate pass JavaScript file.
- QR placeholders in `passes.html` are intentionally empty. Replace each `.qr-placeholder` with the corresponding QR image when ready.
- The Pass Form URL is currently `https://forms.gle/749xNzWTr6WxfAj77` and is used directly by the pass buttons.


## Get Passes workflow
The integrated `passes.html` page contains the five batch-specific payment cards. Each batch has its own Google Form and Ticket Portal link. The flow shown to attendees is: payment -> pass form -> payment verification -> Ticket Portal -> download/save pass. The pass is intended to be kept private and safely screenshotted for all three nights; entry is scanned separately each night and the same-night scan cannot be reused.
