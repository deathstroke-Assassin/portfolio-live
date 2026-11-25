# Mohamed Al-Khayat — Portfolio

A responsive, static portfolio built with semantic HTML, CSS, and vanilla JavaScript. No build step is required.

## Preview

Open `index.html` in a browser, or serve this folder with any static file server. Google Fonts and Font Awesome are loaded from their CDNs; the page still has a system-font and text/icon fallback if those services are unavailable.

## Personal assets to add

- `assets/images/profile-strong.jpg` — optimized casual portrait used in the hero
- `assets/images/about-lifestyle-strong.jpg` — optimized separate garden portrait for the About section
- `assets/cv/cv.pdf` — actual CV opened from the hero CTA
- `assets/images/projects/` — replace the CSS mock project artwork with screenshots as projects are ready

The hero and About sections use separate portraits. If either image is removed, the image area shows an initials fallback. Keep the file names above or edit the paths in `index.html`.

## Personal details to update

- GitHub and LinkedIn links are set to Mohamed's profiles; update them in `index.html` if they change.
- Fill in the college/university and graduation year placeholders in Education, along with the MEAN course duration.
- Update project descriptions with accurate details.
- Replace the sample testimonials with genuine feedback before publishing.
- Add real project repository and demo links in each project card when available.
- Add a real backend/email integration in `js/contact.js` before expecting the contact form to deliver messages. Until then, it validates input and explains that no message was sent.

## Structure

```text
portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── theme.js
│   └── contact.js
└── assets/
    ├── images/
    │   └── projects/
    └── cv/
```

Theme preference is stored in `localStorage`. Motion stays limited to a short hero entrance, brief hover and theme transitions, and an event-driven cursor on fine pointers. There are no continuous animation loops, card tilt, or scroll-reveal effects. The page respects `prefers-reduced-motion` and uses Intersection Observer for active navigation and the back-to-top control.
