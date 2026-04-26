# Cornell DEBUT Website

Official website for **Cornell DEBUT** — Cornell University's Biomedical Engineering Project Team.

Live site: [cornelldebut.org](https://cornelldebut.org)

---

## Repository Structure

```
debut-website/
├── index.html              # Main HTML file — all 5 pages live here
├── css/
│   └── styles.css          # All styles, organized by section
├── js/
│   └── main.js             # Page navigation, member filter, FAQ accordion
├── images/
│   ├── members/            # Headshot photos (JPG/PNG)
│   └── sponsors/           # Sponsor logo images (PNG/SVG)
└── README.md
```

---

## Pages

| Page | Description |
|------|-------------|
| Home | Hero, stats bar, mission statement, subteam overview, alumni ticker |
| About | DEBUT competition info, analyst roles, team composition, project timeline |
| Members | Headshot grid filterable by subteam |
| Apply | Application links, open/closed status badge, FAQ accordion |
| Sponsors | Benefits, sponsorship tiers, sponsor form link |

---

## How to Make Common Updates

### Update member photos or names

1. Add the new headshot to `images/members/` — keep filenames clean (e.g. `Firstname_Lastname.jpg`)
2. Open `index.html` and find the Members page section (search for `MEMBERS PAGE`)
3. Find the correct subteam block (e.g. `data-team="1a"`)
4. Copy an existing `.member-card` block and update the `src`, `alt`, and name text
5. To mark someone as a subteam lead, add `<span class="member-lead-tag">Lead</span>` after their name

### Toggle application status open/closed

In `index.html`, find the Apply page section and change the badge class:

```html
<!-- Applications CLOSED -->
<div class="apply-closed-badge">Applications currently closed</div>

<!-- Applications OPEN — swap to this: -->
<div class="apply-open-badge">Applications open</div>
```

Then update the application links — replace the `<span class="apply-pos-link">` placeholders with real `<a>` tags:

```html
<a href="https://your-form-link.com" target="_blank" class="apply-pos-link">Apply Now →</a>
```

### Add a new subteam

1. In `index.html`, add a new filter button in the `.filter-row`:
   ```html
   <button class="filter-btn" onclick="filterTeam('newteam', this)">New Team</button>
   ```
2. Add a new `.subteam-section` block with `data-team="newteam"` in the members grid area

### Update alumni placements ticker

In `index.html`, find the `<!-- Alumni Placement Ticker -->` comment. Edit the `.ticker-item` blocks in **both** the first set and the duplicate set (the duplicate is required to keep the scroll loop seamless).

### Add a sponsor logo

1. Save the logo image to `images/sponsors/`
2. On the Sponsors page, add an `<img>` tag in the appropriate tier section

### Update sponsorship packet link

Search for `Cornell-2023-2024-Sponsorship-Packet.pdf` in `index.html` and replace with the new file URL.

---

## Deployment

### GitHub Pages (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set Source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/debut-website`
5. To use your custom domain (`cornelldebut.org`), add it in Pages settings and update your DNS

### Netlify (alternative)

1. Drag the entire `debut-website/` folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Add your custom domain in Site Settings → Domain Management
3. Update DNS nameservers at your domain registrar to point to Netlify

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--red` | `#b91c1c` | Brand accent, leads, active states |
| `--bg` | `#0c0c0c` | Page background |
| `--bg2` | `#111111` | Card / inset backgrounds |
| `--bg3` | `#181818` | Featured card backgrounds |
| `--text` | `#f0ede8` | Primary text |
| `--text-dim` | `rgba(240,237,232,0.45)` | Body / secondary text |
| `--serif` | EB Garamond | Display headings |
| `--sans` | DM Sans | Body, nav, labels |

All CSS variables are defined at the top of `css/styles.css` in the `:root` block.

---

## Contact

**debut@cornell.edu** — for questions about the team or website

This is a registered student organization of Cornell University.
