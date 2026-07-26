# 🎨 Customize This Portfolio for Yourself

This portfolio is designed to be easily rebranded. Just replace the
placeholder images with your own — no code changes needed.

## 📁 Image Folders (in `public/images/`)

### `profile/` — Your Photo
| File | Description |
|------|-------------|
| `profile.png` | Your headshot/avatar (square, 300x300+) |

### `hero/` — Hero Section Background
| File | Description |
|------|-------------|
| `bg.png` | Decorative background (1920x1080 recommended) |

### `projects/` — Your Project Screenshots
| File | Description |
|------|-------------|
| `project1.png` | Main/first project (800x600+) |
| `project2.png` | Second project |
| `project3.png` | Third project |

### `experience/` — Research & Work Experience
| File | Description |
|------|-------------|
| `exp1.png` | Image for experience card #1 |
| `exp2.png` | Image for experience card #2 (AstraZeneca → your internship) |
| `exp3.png` | Image for experience card #3 (DNA/genomics → your research) |
| `logo1.png` | Logo for experience #1 (university/company) |
| `logo2.png` | Logo for experience #2 (company logo) |
| `logo3.png` | Logo for experience #3 (project logo) |

### `skills/` — Ability Icons
| File | Description |
|------|-------------|
| `seo.png` | Icon for ability #1 |
| `chat.png` | Icon for ability #2 |
| `time.png` | Icon for ability #3 |

### `social/` — Social Media Icons (Footer + About Modal)
| File | Description |
|------|-------------|
| `linkedin.svg` | LinkedIn icon |
| `email.svg` | Email icon |
| `github.svg` | GitHub icon |

### `branding/` — Company Logo Strip
| File | Description |
|------|-------------|
| `company-1.png` through `company-11.png` | 11 brand logos (140x60+, transparent bg) |

### `tech/` — Tech Stack Icons (Static)
| File | Description |
|------|-------------|
| `python.svg` | Python logo |
| `r-lang.png` | R logo |
| `pytorch.png` | PyTorch logo |
| `scikit.png` | scikit-learn logo |
| `git.svg` | Git logo |

### `words/` — Rotating Word Badge Icons (Hero)
| File | Description |
|------|-------------|
| `ideas.svg` | Icon for "ML" |
| `concepts.svg` | Icon for "Statistics" |
| `designs.svg` | Icon for "Bioinformatics" |
| `code.svg` | Icon for "Research" |

### `ui/` — UI Elements
| File | Description |
|------|-------------|
| `arrow-down.svg` | CTA button arrow |
| `star.png` | Star icon for cards |

### `fav/` — Browser Tab Icon
| File | Description |
|------|-------------|
| `fav.png` | Website favicon (32x32 or 64x64) |

---

## 📝 Edit Your Content

Edit `src/constants/index.js` to change:
- Your name, titles, experience descriptions
- Social media links
- Counter statistics (projects, data points, etc.)
- Tech stack labels

---

## 🚀 Deploy

1. Replace images in `public/images/`
2. Edit content in `src/constants/index.js`
3. Run `npm run build`
4. Commit & push — GitHub Actions deploys automatically

Your site: `https://YOUR_USERNAME.github.io/personal-web/`