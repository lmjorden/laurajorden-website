# Laura Jorden Website — How This Folder Works

This is your complete website. Every page is a plain HTML file you (or any web developer)
can open, edit, and publish. There is no software to install and no database — just files.

## How to preview it
Double-click `index.html` and it will open in your browser. Click around exactly like a
live site. To publish it, upload this entire folder to your web host (or send it to
whoever manages laurajorden.com) with the folder structure intact.

## Where things live

**Pages you'll edit most often:**
- `index.html` — homepage
- `about.html` — your bio and story
- `contact.html` — phone, email, office address, social links
- `old-town-scottsdale.html`, `mccormick-ranch-gainey-ranch.html`, `shea-cactus-corridor.html`,
  `north-scottsdale.html`, `paradise-valley.html`, `shea-tatum-preserve.html`, `arcadia.html`,
  `biltmore.html`, `downtown-phoenix-historic-district.html` — the nine area guide pages.
  `north-scottsdale.html` covers Silverleaf, Estancia, Desert Mountain, Desert Highlands,
  Troon North, and Whisper Rock as sections on one page.
- `blog/index.html` — the blog landing page
- `blog/*.html` — the six individual blog posts (one file each)

**Design files (edit once, it changes everywhere):**
- `css/styles.css` — every color, font, and spacing rule on the site lives here. Change
  the colors at the very top of the file (under `:root`) to update the whole site at once.
- `js/main.js` — controls the mobile menu, the "fade in as you scroll" effect, and the
  photo lightbox. You shouldn't need to touch this.
- `images/logo-mark.png` — your "LJ" monogram, used in the navigation bar next to your name.
- `images/logo-full.png` — your full logo (monogram + "Laura Jorden" + "Luxury Real Estate"),
  used in the footer of every page, from the logo file you sent.
- `images/laura-jorden-headshot.jpg` — your headshot, used on the homepage and About page.
- `favicon.svg` / `favicon.ico` — the small "LJ" icon that shows in browser tabs.

**Real area photos (new):**
- Four of your area pages now open with a real photo instead of the placeholder banner:
  North Scottsdale (Silverleaf golf course), McCormick Ranch & Gainey Ranch (the Scottsdale
  Greenbelt bike path), Old Town Scottsdale (the Waterfront canal at dusk), and Shea & Cactus
  Corridor (an aerial view of a custom estate you sent). The other three area pages still use
  the placeholder banner &mdash; send me photos for those anytime and I'll drop them in.
- The McCormick Ranch entrance monument photo and the Old Town Scottsdale twilight streetscape
  photo you sent are now in the photo galleries on their respective pages (each replacing one
  of the two placeholder tiles below the write-up).
- Both new photos also show up automatically in the "Nearby Areas" cards at the bottom of
  every area page and in the homepage's interactive neighborhood map, since those pull from
  the same shared photo list.
- The homepage's main area-card grid (the "What Neighborhoods Does Laura Jorden Specialize
  In?" section) now also shows your real photos for the areas that have one, instead of
  still showing placeholder banners there &mdash; no new photos needed for this, it was just
  reusing what you'd already sent.
- Paradise Valley now has a real hero photo (the golf green with Camelback and Mummy Mountain
  in the background), and the Shea & Cactus Corridor page has a second real photo in its
  gallery (an aerial view of a custom desert-landscaped estate), in addition to the aerial
  hero photo already there.
- Note: an earlier Paradise Valley photo you sent had a visible "Dave Sansom" photographer
  credit watermarked on it, which usually means it's copyrighted and not cleared for
  commercial use without a license. I didn't use that one &mdash; I used the golf-green photo
  you sent afterward instead, which has no watermark.
- The twilight glass entry door photo now fills the second gallery slot on the McCormick
  Ranch & Gainey Ranch page, so both of that page's gallery photos are real now.
- The backyard pool/fire pit photo overlooking a golf course now fills the first gallery
  slot on the North Scottsdale page (the second slot there still needs a photo of a
  guard-gated community entrance).
- The great room photo (opening to the pool patio) now fills the Shea & Cactus Corridor
  page's last placeholder gallery slot, so that page's gallery is fully real photos now.
- North Scottsdale's gallery now has five real photos total: the pool/fire pit patio, the
  carved wood gate at an adobe-style estate, that same estate's twilight pool, a family room
  with a navy accent wall opening to the golf course, and a pool ramada with fireplace at dusk.
- The canal path photo you sent is now on the Old Town Scottsdale page (you clarified it
  belongs there, not Arcadia).
- Arcadia's gallery now has four real photos (exterior, living room, bedroom, bathroom from
  a renovated Arcadia home), and the page's hero photo is now a real photo too — the
  "enhanced and sharpened" classic white-brick Arcadia home you sent, replacing the
  placeholder hero banner.
- New: **Biltmore** is now an area page (`biltmore.html`), covering the neighborhood around
  the historic Arizona Biltmore Hotel, its golf club, and Biltmore Fashion Park. It's linked
  from the nav footer, the homepage area cards, and the interactive map. The hero photo is
  the golf-course fairway lined with condos beneath Camelback Mountain, and the gallery's
  first photo is the twilight condo complex with the pool courtyard; the second gallery slot
  still needs a Biltmore interior photo. (An earlier version of this page had the wrong photos
  in these two spots — fixed after you flagged it.)
- New: **Downtown Phoenix Historic District** is now a ninth area page
  (`downtown-phoenix-historic-district.html`), covering Phoenix's protected historic
  neighborhoods near downtown — Willo, Encanto-Palmcroft, F.Q. Story, Roosevelt, Garfield,
  and Coronado. It's linked from the nav footer, the homepage area cards, and the interactive
  map. Both gallery photo slots on this page are still placeholders — send a couple of
  bungalow or streetscape photos anytime and I'll drop them in.
- The blog landing page (`blog/index.html`) now opens with a real photo (Scottsdale city
  lights at twilight) instead of the placeholder hero banner.

**Property video tours (new):**
- The homepage now has a "Take a Video Tour of Laura Jorden's Recent Listings" section
  (search `video-tours-feature` in `index.html`) with three of your real videos: the full
  walkthrough of 9518 N 46th Street, Phoenix, and quick vertical reels for 10797 N 108th Way,
  Scottsdale and a Charter Oak listing. Click any cover image on the live site to play the
  video right there on the page.
- Your original files were raw phone/drone exports (270MB&ndash;1.4GB each) &mdash; far too
  large for a web page to load quickly. I compressed each one for the web (720p&ndash;1080p,
  standard web bitrate) and put the compressed copies in the `videos` folder. The originals
  are not included in this download; keep your own copies of the raw files if you want them
  for anything besides the website.
- The 46th Street video was compressed in eight ~30-second segments and rejoined (a
  workaround for processing a very long 4K file); if you ever notice a brief audio hiccup
  around the 30-second marks when watching it, that's the cause &mdash; let me know if you'd
  like a smoother re-encode from the original file.
- Two items marked `[VERIFY]` in `index.html`: the 46th Street listing status, and the full
  street address for the Charter Oak property (I only had the neighborhood name from the
  file you sent). Search `[VERIFY]` to find and fill these in.
- To add more video tours later, copy a new section the same way, add the video file to
  `videos/`, a cover image to `images/`, and update the `data-video-src` and cover `<img>`
  paths.

**Video & photography, inspired by thekarasgroup.com:**
- The homepage now opens with a full-screen hero (`hero-immersive` in the CSS) instead of a
  boxed photo — currently your backyard pool/spa photo with the mountain view, full-bleed
  behind the headline. It's still built to hold a looping muted background video instead, if
  you'd rather use one later — search `hero-bg-image` near the top of `index.html` to find it.
- To add a real video: replace the `<div class="hero-bg-placeholder">...</div>` with:
  `<video class="hero-bg-video" autoplay muted loop playsinline poster="images/your-poster.jpg"><source src="images/your-video.mp4" type="video/mp4"></video>`
  A 15–30 second silent aerial or lifestyle loop (under ~15MB) works best for load speed.
  If you'd rather use a photo, just swap the placeholder `<div>` for an `<img class="hero-bg-image" src="...">`.
- The same full-screen treatment is now used at the top of every area page and blog post.
- Area cards, blog cards, and the About page's video-intro block use the same
  photo-with-caption style as the reference site — search `media-caption-card` or
  `video-frame` to find and swap in real images/video.
- Your real bio video is now embedded on the About page (the "Hear Laura Jorden's Approach,
  In Her Own Words" section), pulled from your Vimeo link. Visitors see your family photo
  (`images/bio-video-cover.jpg`) as the cover with a play button; clicking it loads and plays
  the video right there on the page. If you ever replace the video, search
  `player.vimeo.com/video/` in `build_core_pages.py` (or `about.html`) and swap in the new
  video's ID and privacy hash (the `?h=...` part of the embed URL, found on Vimeo under
  Share > Embed). To swap the cover photo, replace `images/bio-video-cover.jpg` with a new
  image of the same name.
- New: `north-scottsdale.html` covers Silverleaf, Estancia, Desert Mountain, Desert Highlands,
  Troon North, and Whisper Rock, and is linked from the nav, footer, and homepage.

**Editorial layout, inspired by kumarawilcoxon.com/neighborhoods/downtown-austin:**
- Every area page now opens with a "Welcome to [Area]" section — an italic tagline line plus
  a "What to Love" quick-hit bullet list — right below the photo/video hero, before the
  detailed pricing sections. Search `welcome-intro` in any area page to edit that wording.
- A "Let's Connect" floating button now appears in the bottom-right corner of every page
  (search `floating-contact` in `css/styles.css` or `js/main.js`). Clicking it opens a small
  panel with your phone and email — no page reload, no backend required.
- I did not replicate the live listings feed or Yelp/Walk Score widgets from that reference
  site. Those pull from paid data feeds (MLS/IDX, Walk Score, Yelp) that a static site like
  this one can't connect to. If you want live listings on the site later, that requires an
  IDX/MLS subscription service (the kind of thing platforms like Luxury Presence provide)
  rather than something addable to a plain HTML site. (I did add real, sourced Census stats
  below — see the "Neighborhood feature" section.)
- I don't have your actual listing photography or a video reel, so all of this is built and
  ready — it just needs real files dropped in where the placeholders are.

**Neighborhood feature, inspired by heidercompany.com/neighborhoods/georgetown:**
- You asked for a page like this one, so each of your nine area pages now has two new
  sections between the hero and the write-up: a dark stat strip (search
  `neighborhood-stats` in `build_areas.py`) and a "Nearby Areas" card grid at the bottom
  (search `nearby-areas`) that cross-links to your other area guides.
- The stat strip shows Population, Median Age, Population Density, and Median Household
  Income for each area, using real, current U.S. Census Bureau / American Community Survey
  figures — nothing made up. One honest limitation: most of your areas (Old Town Scottsdale,
  McCormick Ranch & Gainey Ranch, Shea/Cactus Corridor, North Scottsdale) aren't their own
  Census-designated place, so those four pages show Scottsdale citywide figures; Arcadia and
  Shea-Tatum show Phoenix citywide figures; Paradise Valley has its own town-level figures
  since it's a separate incorporated town. Every stat strip says which jurisdiction the
  numbers cover, and I left a `[VERIFY]` note to re-check the figures against the latest
  ACS release before publishing, since the Census updates these periodically. The source
  data: Scottsdale (pop. 246,183, median age 49, $110,886 median household income), Phoenix
  (pop. 1,673,122, median age 34.9, $81,332), Paradise Valley (pop. 12,205, median age 55.8,
  $247,159) — U.S. Census Bureau / ACS estimates.
- I could not replicate Heider's live "Available Listings" MLS search widget on each
  neighborhood page — same IDX/MLS-subscription limitation noted above.
- Heider's actual color palette isn't something I can inspect directly (no live browser
  access in this environment), so I kept your site's existing navy/gold/terracotta palette
  rather than guess at an exact match. If you send me a screenshot of the specific colors
  you want, I can adjust `css/styles.css` precisely.
- The twilight aerial estate photo you sent is now the Shea-Tatum / Phoenix Mountain
  Preserve page's hero image, and shows up automatically in its "Nearby Areas" card, the
  homepage area-card grid, and the interactive map pin.
- The palm-lined Encanto-Palmcroft street photo now fills the first gallery slot on the
  Downtown Phoenix Historic District page, and also shows up as that page's thumbnail in
  the homepage area cards, "Nearby Areas" cards, and the interactive map. The ivy-covered
  Spanish Colonial Revival entry photo you sent fills the second gallery slot, so that
  page's gallery is fully real photos now.
- The Downtown Phoenix Historic District page now has a dedicated restaurants write-up
  (Wren & Wolf, The Farish House, Windsor, Crown Public House, Glai Baan, The Arrogant
  Butcher, and Centrico) plus a table showing drive times to the Phoenix Art Museum, Heard
  Museum, Arizona Science Center, Chase Field, and Footprint Center. I sourced the
  restaurant list from a current web search rather than your own notes, so it's worth a
  quick sanity check — search `[VERIFY]` on that page for the exact spots you'd flag.
- Fixed: the historic district page's main hero photo wasn't showing (it still had a
  text placeholder even though real photos existed for the page). It now uses the
  palm-lined Encanto-Palmcroft street photo as the hero image.

**Interactive neighborhood map (new), inspired by heidercompany.com's map/card layout:**
- The homepage now has a real, clickable map (search `neighborhood-map-section` in
  `index.html`) right below the area cards: a dark card list on the left (all nine areas,
  same photo/placeholder thumbnails as the "Nearby Areas" cards) and an interactive map on
  the right with a gold pin for each area, at real coordinates. Clicking a card flies the map
  to that area and opens its pin's popup; clicking a pin does the same in reverse, and either
  one links straight to that area's full guide.
- This uses Leaflet.js (a free, open-source mapping library) and OpenStreetMap tiles (free,
  no account or API key needed) — both loaded from a public CDN, so there's nothing to sign
  up for or pay to keep this working. That said, OpenStreetMap's free tile service is meant
  for light traffic; if the site starts getting heavy visitor volume, it's worth switching to
  a paid tile provider (Mapbox or MapTiler both have simple swap-in options) so the map keeps
  loading quickly. I'm happy to make that swap when you're ready.
- The nine pin locations are real coordinates for each area (Old Town Scottsdale, McCormick
  Ranch, the Shea/Cactus Corridor, Paradise Valley, the Shea-Tatum corridor, Arcadia,
  Silverleaf for North Scottsdale, the Arizona Biltmore for Biltmore, and the Willo Historic
  District for the Downtown Phoenix Historic District) — approximate area centers, not
  precise boundary lines,
  since I don't have your neighborhood boundary/plat data. If you'd like the boundaries drawn
  more precisely later, send me shapefile or GeoJSON boundaries and I can update the pins to
  outlined areas.
- I wasn't able to preview this in a live browser before sending it to you (no browser tool
  available in this environment) — I checked the code carefully and it follows a very
  standard, well-tested pattern, but please click around it first and let me know if anything
  looks off.

**Brand style, pulled from your Buyer's Guide, Seller's Guide, and Listing Presentation:**
- Bold, uppercase black section headings with an underline rule — matches the banner-style
  headers in your guides (e.g. "COMMUNICATION IS KEY").
- A navy blue accent (`--navy` in `css/styles.css`) used sparingly for testimonial quote
  marks, the "Successful Stories" and "Credentials" labels, and stat numbers — pulled from
  the navy used throughout your Process to Sold and Listing Presentation decks.
- A handwritten-style script font (Caveat) for testimonial signatures and the "Let's
  Connect" heading on the Contact page, echoing the script accents in your materials.
- A "Credentials" section and Compass sales-volume stat blocks on the About page, sourced
  directly from your Listing Presentation.
- A warm bronze/copper accent (`--gold` and `--terracotta` in `css/styles.css` &mdash; both
  now set to the same copper tone) used for headline underlines, testimonial quotes, buttons,
  the map pins, and the photo placeholder boxes, so the site reads richer in color, not just
  black and white. This replaced an earlier muted gold that read too close to Sotheby's
  branding, and a rust/terracotta alternate that didn't land either &mdash; both `--gold` and
  `--terracotta` now point to the same warm copper (`#a8672f`) so the whole site uses one
  consistent accent. If this still isn't quite right, it's one line to change: edit `--gold`
  and `--terracotta` at the top of `css/styles.css` and every button, underline, and map pin
  updates at once.
- Your positioning statement ("Scottsdale & Paradise Valley Luxury Real Estate / Data-Driven
  Advisor | $1M–$10M+ / Relocation • Investment • Strategic Guidance") appears on the
  homepage hero, the About page, and as a short tagline in the footer. Search
  `positioning-statement` in `index.html` or `about.html` if you want to edit the wording.
- Your About page bio now mentions your Indiana University Hoosiers fandom and Midwest
  upbringing, in the "Outside the Office" section.

**Behind-the-scenes files (for search engines and AI tools, you won't need to edit these):**
- `sitemap.xml` — lists every page for Google.
- `robots.txt` — tells search engines and AI crawlers (ChatGPT, Claude, Perplexity, Google)
  they're welcome to read the site.
- `llms.txt` — a short summary of your business written specifically for AI assistants.

## How to change common things

**Phone number, email, license number, or address:** These appear in the footer of every
page and on the Contact page. Because every page is a separate file, you'll need to update
each one. Use your text editor's "Find and Replace" across all files — search for the old
phone number or email and replace it everywhere at once.

**A paragraph of text:** Open the relevant `.html` file in any text editor (even Notepad
or TextEdit), find the sentence in plain English, and edit it directly. Text is wrapped in
`<p>...</p>` tags — just edit what's between them and leave the tags alone.

**A photo:** Search each file for `media-block` — those are the placeholder boxes marked
with instructions like "PHOTO: twilight exterior of a signature Scottsdale listing." Replace
the placeholder `<div>` with an `<img src="images/your-photo.jpg" alt="description">` tag,
and drop your photo file into the `images` folder.

## Items to verify before you publish

Search every file for the text `[VERIFY]` — these are figures pulled from general market
knowledge or your own notes that should be double-checked before they go live. You'll find
them mostly on:

- The nine area pages (drive times, school boundaries, membership/HOA details, and the new
  Downtown Phoenix Historic District page's district count and light-rail details)
- The blog posts (pricing, closing timelines, seasonal notes — the blog still discusses
  pricing, unlike the area guide pages; see note below)
- The homepage FAQ and About page (license/brokerage details — already filled in from what
  you told me, but worth a final glance)

One thing worth a specific look before publishing:
1. **Short-term rental rules** mentioned on the Old Town Scottsdale and Old Town vs. Arcadia
   pages — city and HOA rules change, so confirm current policy.
2. **The Compass stat blocks and credentials list on the About page** (sales volume,
   national ranking, board memberships) were pulled from your Listing Presentation, which is
   dated 2025 — confirm these are still current before publishing.

**Note on pricing:** At your request, all specific price ranges, price tables, and
"average home price" questions were removed from the area guide pages and the
homepage area cards, so those pages now focus on lifestyle, landmarks, and neighborhood
character rather than dollar figures. The blog post "Paradise Valley Home Prices 2026" was
left as-is since it's a dedicated pricing article — let me know if you'd like that
adjusted too.

## Testimonials

Three testimonials appear on the homepage and three more on the About page, pulled from
your listing presentation. They're attributed generically ("— Buyer/Seller," "— Seller,"
"— Buyer") since no client names were included in the source material. If you'd like
names or initials added, search for `class="testimonial"` in `index.html` and `about.html`.

## A note on Fair Housing language

Every page was written to describe properties and locations — not the people who might buy
them — to stay compliant with the Fair Housing Act. If you add new copy yourself, avoid
phrases like "perfect for families" or "ideal for retirees"; describe the home or
neighborhood instead (lot size, school district, walkability, amenities).

## Neighborhood "vibe" content: restaurants, hotels/spas, and golf (new)

- Every area page now names specific restaurants, hotels/spas, or public golf courses to
  give each neighborhood a distinct sense of place, not just facts about lot sizes and
  schools. This was sourced from a live web search rather than your own notes, so please
  search each area page for `[VERIFY]` and sanity-check the specific names before publishing
  &mdash; restaurant and hotel branding changes often.
- Old Town Scottsdale: FnB, Caf&eacute; Monarch, Citizen Public House, and Virt&ugrave;
  Honest Craft for dining; Hotel Valley Ho and Senna House for hotels.
- McCormick Ranch & Gainey Ranch: the Grand Hyatt Scottsdale Resort (the rebranded Hyatt
  Regency at Gainey Ranch) for its spa and restaurants; McCormick Ranch Golf Club (Pine and
  Palm courses) called out specifically as public golf, since Gainey Ranch's own course is
  private.
- Shea & Cactus Corridor: Starfire Golf Club identified as a public, 27-hole facility;
  Village Tavern and Pomo Pizzeria added as Shops at Gainey Village dining options.
- Paradise Valley: LON's at the Hermosa Inn added alongside the resorts already on this
  page (this is also the new blog post's centerpiece &mdash; see below).
- Shea-Tatum / Phoenix Mountain Preserve: the Hilton Phoenix Tapatio Cliffs Resort, its
  Different Pointe of View restaurant, and the public Lookout Mountain Golf Club.
- North Scottsdale: clarified that Troon North's two courses are public (unlike the other
  five members-only clubs on this page), and added the Four Seasons Resort Scottsdale at
  Troon North and its restaurant Talavera.
- Biltmore: Geordi's at Wrigley Mansion, The Capital Grille, and Christopher's for dining;
  Spa Biltmore: Terra Luna at the Arizona Biltmore Hotel.
- Arcadia and the Downtown Phoenix Historic District already had restaurant write-ups from
  earlier rounds and weren't changed further here.

## Bio, credentials, and "Why Compass" (About page)

- The bulleted "Credentials" section is gone. Everything in it (REALTOR&reg; license year,
  the Real Trends/WSJ ranking, equestrian specialty, board memberships, education) is now
  one paragraph folded into your bio, per your request.
- Removed the FAQ section from the About page.
- Rewrote "Why Does Laura Jorden Work with Compass?" into a single short paragraph: Compass
  as the #1 luxury brand in metro Phoenix, and why you value being surrounded by experienced
  agents (off-market access and sharpening your own craft) &mdash; the Compass sales-volume
  stat blocks are gone.

## Reviews (new scrolling format)

- All six client reviews from your listing presentation are now used in full (not the
  shortened versions from before) and shown as a single auto-scrolling row of cards &mdash;
  on both the homepage and the About page &mdash; instead of a static 3-across grid. Hover
  over the row to pause it. Search `testimonial-scroll` in `css/styles.css` or
  `TESTIMONIALS` in `build_common.py` if you ever want to add, remove, or edit a review.

## Blog: Paradise Valley post rewritten

- Replaced "How Much Does a Home in Paradise Valley Cost in 2026?" with a new post, "Inside
  Paradise Valley: Resorts, Restaurants, and the Lifestyle Behind Arizona's Most Exclusive
  Address," covering the town's resorts and spas, LON's at the Hermosa Inn and El Chorro,
  Camelback Mountain trailhead access, and Cosanti &mdash; no pricing. It lives at the same
  web address as the old post, so no links break.
- That post's hero photo is now a real image: the twilight fire pit courtyard at the JW
  Marriott Scottsdale Camelback Inn Resort & Spa.
- The "Cactus Corridor vs. Paradise Valley" blog post now has a real hero photo (an
  expansive backyard patio, pool, and fire pit overlooking a golf course and mountains),
  and the "Moving to the Shea-Tatum Corridor" post now has a real hero photo too (a modern
  custom home entry). Both previously showed a text placeholder.
- The "How Long Does It Take to Close on a Luxury Home in Scottsdale?" post now has a real
  hero photo too: a vaulted-beam living room with a stone fireplace.

## More real photos added (Paradise Valley, Shea-Tatum, Arcadia, North Scottsdale, Biltmore)

- Paradise Valley's hero photo (the golf green with Camelback Mountain) has been gently
  brightened so the shadows in the foreground read more clearly, while keeping the sky and
  mountain detail intact. Its two gallery photos are now real: the twilight fire pit courtyard
  at the JW Marriott Scottsdale Camelback Inn, and the infinity pool at Sanctuary Camelback
  Mountain Resort & Spa.
- Shea-Tatum's two gallery photos are now real: a hiker overlooking the Phoenix skyline from
  a Phoenix Mountain Preserve trail, and a modern desert-contemporary home entry (the same
  entry photo used on the Shea-Tatum blog post).
- Arcadia's gallery now includes two neighborhood-landmark photos in place of the generic
  bedroom and bathroom shots: the vintage "Grocery" sign at La Grande Orange, and the
  lantern-lit patio at OHSO Brewery.
- North Scottsdale's gallery was trimmed from five photos to three: removed the navy-accent
  family room photo and the pool ramada/fireplace photo (the last photo in that group),
  keeping the patio/fire-pit golf view, the adobe gate, and the twilight adobe pool photo.
- Biltmore's second gallery photo (previously a placeholder) is now a real twilight photo of
  the historic Arizona Biltmore Hotel entrance and gardens.
- Arcadia's gallery was trimmed further: removed the home entry close-up and the family-room
  photo with the white swivel chairs, so the gallery now shows just the two neighborhood
  landmark photos (La Grande Orange and OHSO Brewery patio).
- Swapped in a cleaner La Grande Orange photo, then swapped again per your follow-up: that
  gallery slot now shows the full side-by-side image of both the Grocery and Pizzeria
  storefronts (uncropped, with both logos) rather than a single cropped storefront.

## Proofing PDF, capitalization, and a few text fixes

- Made a single combined PDF of every page's text (title, meta description, headings, body
  copy, and photo captions) for printing and proofreading. It's a separate file from the
  website itself, so it doesn't affect anything you publish.
- Fixed the proofing PDF so testimonials only appear once each. On the live site, the "What
  Do Laura Jorden's Clients Say?" row is intentionally duplicated once behind the scenes so
  the auto-scrolling effect loops smoothly — that's normal and not a bug on the site itself.
  Flattened into a PDF, though, that same duplication just looked like repeated reviews, so
  the proofing document now shows each of your six reviews only once.
- Standardized capitalization of "Real Estate Agent" wherever it follows Laura Jorden's name
  (as her professional title) across the homepage, About page, Contact page, and llms.txt —
  it's now consistently capitalized rather than a mix of "Real Estate Agent" and "real estate
  agent."
- Shea-Tatum's neighborhood description now starts "Established homes surrounding the Phoenix
  Mountain Preserve..." per your edit.
- On the About page video section: the heading is now "Laura, In Her Own Words" (previously
  "Hear Laura Jorden's Approach, In Her Own Words"), and the internal note about reusing the
  clip in listing presentations and lead outreach has been removed.

## Golf course rename and a Paradise Valley trim

- Renamed "Starfire Golf Club" to "Scottsdale Country Club" everywhere it appears on the
  Shea & Cactus Corridor page (the write-up, the FAQ question and answer, the meta
  description, and the "What We Love" list) — same course and location, just its current
  name.
- Removed the mention of LON's at the Hermosa Inn from the Paradise Valley area page,
  including its own FAQ question. (It's still mentioned on the Paradise Valley blog post if
  you'd like that removed too — just say the word.)

## Shea-Tatum "how far" FAQ rewritten

- The "How far is the Shea-Tatum corridor from Scottsdale and Phoenix?" answer now opens by
  noting that the corridor is technically part of the City of Phoenix, but borders both
  Paradise Valley and Scottsdale, and sits minutes from Downtown Phoenix and Sky Harbor
  Airport &mdash; a desirable, convenient location with mountain views. The drive-time table
  and Loop 101/SR-51 note are unchanged.

## Shea-Tatum schools FAQ corrected

- The "What schools serve the Shea-Tatum corridor?" answer now splits by geography per your
  correction: the east side of the corridor typically falls in Scottsdale Unified School
  District (Cherokee Elementary, Cocopah Elementary/Middle School, Chaparral High School),
  while west of 40th Street typically falls in Paradise Valley Unified School District
  (Mercury Mine Elementary, Shea Middle School, Shadow Mountain High School). I confirmed the
  Mercury Mine/Shea/Shadow Mountain feeder path belongs to Paradise Valley Unified before
  writing it in.

## Arcadia "how far" FAQ updated

- The "How far is Arcadia from Scottsdale and Phoenix?" answer now opens by noting Arcadia
  straddles Phoenix and Scottsdale, and sits minutes from both Downtown Phoenix and Old Town
  Scottsdale &mdash; a convenient, central Metro Phoenix location close to high-end retail
  and dining. The drive-time table and freeway note are unchanged.

## Bio passage finalized (35 years, no more [VERIFY] flags)

- Updated "more than 30 years" to "more than 35 years" everywhere it describes Laura's
  Arizona residency: the About page hero bio, the homepage "Who Is Laura Jorden?" section,
  the About page FAQ source text, the About page meta description, and llms.txt.
- Per your edited passage, removed the [VERIFY] flags from the About page credentials
  paragraph (the REALTOR&reg; ranking, the Scottsdale Unified board seats, and the residency
  clause) and dropped the paragraph's trailing "part of the 35-year Arizona residency (25
  years in Scottsdale)" clause, since that fact is now already stated in the paragraph above
  it. One unrelated [VERIFY] flag remains in the separate "Why Compass" section further down
  the page &mdash; let me know if you'd like that addressed too.

## GitHub upload, VERIFY cleanup, blog photos, and footer links

- Uploaded the site to GitHub (github.com/lmjorden/laurajorden-website) via GitHub Desktop,
  publicly visible, with GitHub Pages turned on so it's viewable as a live website at
  lmjorden.github.io/laurajorden-website in addition to the eventual laurajorden.com domain.
- Removed every `[VERIFY ...]` note across the site (about 70 of them, covering the area
  pages, blog posts, the About page, and the video section) per your request to just strip
  them now rather than re-check each fact first. Two of them flagged things only you know
  (the 46th Street listing's current status, and the Charter Oak property's full street
  address) &mdash; those now just show the info as originally written, with no verification
  note, so it's worth a personal glance at those two before you call the site final.
- Fixed the blog page: every one of the six blog post cards on the blog homepage was still
  showing "PHOTO: editorial image related to..." placeholder text instead of a real photo,
  even for posts that already had a real photo on their own individual page. All six cards
  now show a real photo. Two posts (Old Town Scottsdale vs. Arcadia, and Relocating to
  McCormick Ranch & Gainey Ranch) never had a photo picked for them at all until now &mdash;
  they use the Old Town Scottsdale streetscape photo and the McCormick Ranch entrance
  monument photo, respectively, reusing photos already sent for those neighborhoods.
- Removed Homes.com, Realtor.com, and Zillow from the "Find Laura Online" list on the
  Contact page and from the footer social links sitewide, per your request. Instagram,
  Facebook, and LinkedIn remain.

## Video captions rewritten with the real story behind each project

- 9518 N 46th Street: rewrote the caption to say what actually happened here &mdash; this was
  an investor project carried out with meticulous care at every stage (architectural plans,
  design, landscaping, staging), and it set a new record sale for the community, going under
  contract and closing in 44 days with multiple offers.
- 8310 E Charter Oak Drive, Scottsdale, AZ: added the full address (previously just said
  "Charter Oak" &mdash; I found the exact street address and confirmed it from your own MLS
  listing photo folder), plus a new caption explaining this was also an investor project, a
  Best Bathroom winner in Modern Luxury Interiors' Design 9 Awards, and sold at full price
  with multiple offers. Linked to the actual award article (modernluxury.com) so visitors can
  read the feature.
- Added a clickable "As Seen In" header photo under that caption, using your own primary-bath
  listing photo (the double vanity with the cherry-blossom branch) rather than the magazine's
  published copy of it &mdash; same photo, but sourced from your own MLS folder instead of
  scraped from their site, since their published version is credited to a named photographer
  and I can't verify licensing on it from a chat message alone. Clicking the photo opens the
  Design 9 article in a new tab.

## Biltmore and Shea/Cactus Corridor content cleanup, Scottsdale Country Club rebrand

- Biltmore: removed the line noting buyers should check reserve funding, resort fees, or
  golf-membership requirements &mdash; that FAQ answer now just points buyers to confirm each
  building's HOA rules.
- Shea/Cactus Corridor: removed every reference to irrigation and wells (including in the
  hero image alt text), and removed all "one- to five-acre parcel" language, replaced with
  general "large lot" wording throughout the page and its FAQ.
- Scottsdale Country Club: updated across the Shea/Cactus Corridor page to reflect the club's
  recent rebrand back to the Scottsdale Country Club name (it had been operating as Starfire
  Golf Club) and its current 18-hole championship course plus Six Shooter, a 10-hole short
  course, replacing the old three-nine-hole (King/Squire/Hawk) description.

## Updated 108th Way and Charter Oak videos with new branding

- Replaced both video files with the new 2026-branded reels you sent. Your original uploads
  were full 4K exports (over 300MB each) &mdash; way past GitHub's 100MB per-file limit &mdash;
  so I compressed them to 1080p (still sharp on web) at a web-friendly bitrate, matching the
  quality level of the other videos already on the site. Filenames are unchanged
  (`videos/reel-108th-way-scottsdale.mp4` and `videos/reel-charter-oak.mp4`), so no other page
  changes were needed &mdash; the existing video players just pick up the new files.

## Fixed the broken email signature

- Moving the domain to GitHub Pages broke your Gmail signature because its images were
  hot-linked to the old WordPress site (`laurajorden.com/wp-content/uploads/...`), which no
  longer exists at that address.
- New icon files added: `images/icon-instagram.png`, `images/icon-facebook.png`,
  `images/icon-linkedin.png` &mdash; simple navy circle icons matching your site's brand color,
  so the signature no longer depends on the old host.
- The signature now points to files already live on your own site: your headshot
  (`images/laura-jorden-headshot.jpg`) and logo (`images/logo-full.png`).
- I used your name/title/address/phone/socials exactly as they appear in this site's footer.
  I couldn't confirm a Pinterest link (it's not listed anywhere on the site), so it was left
  out — let me know the URL if you want it added back in.
- I didn't recreate the Compass logo image since I don't have rights to redistribute their
  logo file; the signature uses styled text ("Compass") instead, same as your site footer.
- New signature file: `laura-jorden-email-signature.html`, saved directly in your Downloads
  folder (not inside this website folder). Open it in a browser, select all the signature
  content, copy it, then paste into Gmail: Settings (gear icon) → See all settings → General
  → Signature → paste into your signature box → Save Changes at the bottom.
- Update (found the real cause): it wasn't DNS caching after all &mdash; I checked GitHub
  Pages' own settings directly and found it had never actually issued a security certificate
  (HTTPS) for www.laurajorden.com, even though the domain itself was pointed correctly. Since
  every image link uses `https://`, browsers refused to load them with no valid certificate,
  on every network, which is why the phone test didn't help either. I removed and re-added
  the custom domain in GitHub Pages to force it to request a fresh certificate. This usually
  finishes within a few minutes to a few hours. The signature's image links are back to
  `www.laurajorden.com` (the domain the certificate is issued for). Try the signature again
  in an hour or two &mdash; if images are still broken after that, let me know and I'll check
  the certificate status again.
- Also add the same signature separately in Apple Mail on your Mac: Mail app → Settings →
  Signatures → select your laura@laurajorden.com account → paste it in there too. Gmail's
  web signature setting doesn't carry over to Mac Mail automatically — they're separate.
- Fixed the headshot centering: your headshot file is a tall portrait photo
  (`images/laura-jorden-headshot.jpg`), so squeezing it into the signature's small square box
  was centering on the middle of the whole photo, cutting into the top of your hair and
  showing extra shoulder/jacket instead of your face. Added a new pre-cropped square version,
  `images/laura-jorden-headshot-signature.jpg`, framed on your face and shoulders with proper
  headroom, and pointed the signature at that file instead.

## Questions?

If anything here doesn't make sense, any web developer will recognize this as a standard
static HTML/CSS/JS site — there's nothing unusual about the structure, so it's easy for
someone else to pick up and maintain if needed.
