# Carleton King - Actor Website

Professional actor website for Carleton King at [carleton-king.com](https://carleton-king.com)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Assets Needed

Before deploying, add the following assets:

- [ ] **Headshot** - Primary theatrical headshot (hero section)
- [ ] **About Photo** - Secondary/lifestyle photo (about section)
- [ ] **Resume PDF** - Downloadable resume in `/public/resume.pdf`
- [ ] **Reel Thumbnail** - Video thumbnail for reel section
- [ ] **Vimeo/YouTube Embed** - Demo reel video embed code

## Customization

### Update Contact Email
Edit `app/page.js` and replace `contact@carleton-king.com` with actual email.

### Add Demo Reel
Replace the video placeholder in the reel modal with your Vimeo/YouTube embed.

### Update Profile Links
Add actual IMDb, Actors Access, and Instagram URLs in the contact section.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js - just click Deploy
4. Add custom domain `carleton-king.com` in Project Settings → Domains

### Custom Domain Setup
In Vercel dashboard:
1. Go to your project → Settings → Domains
2. Add `carleton-king.com`
3. Update your domain's DNS:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com` (for www subdomain)

---

Built with precision for casting professionals.
