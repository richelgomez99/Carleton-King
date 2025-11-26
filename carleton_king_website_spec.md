# CARLETON KING - ACTOR WEBSITE SPECIFICATION
## carleton-king.com

---

## STRATEGIC PURPOSE

**Primary Function:** Serve as a professional verification point when agents/casting directors receive his submission and want to learn more.

**Secondary Function:** Host his demo reel in a controlled, fast-loading environment.

**Tertiary Function:** Establish his brand as a serious, working actor.

**What This Site is NOT:**
- Not a portfolio of his filmmaking work (that's Tru Luv Ent)
- Not a place to book him for production services
- Not social media or a blog
- Not cluttered with everything he's ever done

**The 10-Second Rule:** An agent clicking this link should understand within 10 seconds:
1. What he looks like (headshot)
2. That he has real credits (recognizable names visible)
3. How to see his work (reel accessible)
4. How to contact/submit for him

---

## DESIGN SYSTEM

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary Background | Rich Black | #0A0A0A | Main background, creates cinematic feel |
| Secondary Background | Deep Charcoal | #1A1A1A | Cards, sections, subtle contrast |
| Primary Accent | Burgundy | #722F37 | CTAs, highlights, hover states |
| Secondary Accent | Antique Gold | #CFB53B | Subtle accents, award mentions, borders |
| Text Primary | Off-White | #F5F5F5 | Main body text, headings |
| Text Secondary | Warm Gray | #A0A0A0 | Secondary info, captions |
| Accent Red | Deep Red | #8B0000 | Sparse use, links, important highlights |

### Typography

| Element | Font | Weight | Notes |
|---------|------|--------|-------|
| Name/Logo | Playfair Display or Cormorant Garamond | 600 | Elegant, cinematic, timeless |
| Section Headers | Montserrat or Raleway | 500 | Clean, modern, readable |
| Body Text | Inter or Source Sans Pro | 400 | Highly readable, professional |
| Accent Text | Same as headers | 300 | For subtle labels |

### Texture & Visual Elements

**Subtle Texture Options (use sparingly):**
- Carbon fiber pattern at 3-5% opacity as section background
- Crocodile/snakeskin texture as border accents or divider elements
- Noise grain overlay (2-3%) for cinematic depth

**Visual Principles:**
- Dark, cinematic aesthetic (like a movie poster, not a corporate site)
- Generous white space (let the content breathe)
- Photos should be the hero, not design elements
- Gold accents reserved for achievements/awards
- Burgundy for interactive elements

**Mood Reference:** Think prestige TV title cards (Succession, The Bear) meets high-end portfolio. Confident but not flashy. The work speaks.

---

## SITE STRUCTURE

### Navigation (Fixed Top Bar)

```
CARLETON KING          [Reel]  [Credits]  [About]  [Contact]
```

- Name as logo (left-aligned)
- Four nav items (right-aligned)
- Minimal, clean
- Sticky on scroll
- Hamburger menu on mobile

---

## PAGE SPECIFICATIONS

### PAGE 1: HOME (Landing Page)

**URL:** carleton-king.com

**Purpose:** Immediate impact. Show face, show work access, establish credibility.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav Bar]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    CARLETON KING                             │
│                        Actor                                 │
│                                                              │
│              [WATCH REEL] ← burgundy CTA button              │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │           HERO IMAGE: Cinematic Headshot            │    │
│  │           (Full width, slight parallax)             │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    RECENT CREDITS                            │
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│   │DAREDEVIL │  │ STASH 2  │  │MURDER... │  │FINAL     │   │
│   │Netflix   │  │Lead      │  │Discovery │  │MOMENTS   │   │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│                    [View All Credits]                        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   SAG-AFTRA Eligible  •  NYC Based  •  Represented by: TBD  │
│                                                              │
│            [Download Resume]    [Contact]                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Content Specifications:**

**Hero Section:**
- Name: Large, elegant typography
- "Actor" as subtitle (not "Actor/Director/Filmmaker" - keep it focused)
- Primary CTA: "Watch Reel" button
- Hero image: His strongest headshot, theatrical (not commercial smile)
- Consider subtle animation: slow zoom or parallax on scroll

**Recent Credits Strip:**
- 4-5 cards showing most recognizable/recent work
- Each card shows: Project name, network/studio, role type
- Prioritize recognizable names: DAREDEVIL, Discovery ID, Wolf Entertainment, Amazon
- Cards link to Credits page

**Footer Bar:**
- Status indicators: SAG-AFTRA Eligible, NYC Based
- "Represented by:" placeholder (update when signed, remove if not)
- Resume download button (PDF)
- Contact link

---

### PAGE 2: REEL

**URL:** carleton-king.com/reel

**Purpose:** Frictionless video viewing. Agent clicks, reel plays.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav Bar]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                      DEMO REEL                               │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │                                                      │    │
│  │              [EMBEDDED VIDEO PLAYER]                │    │
│  │                    16:9 Ratio                       │    │
│  │              Vimeo Pro or YouTube                   │    │
│  │                                                      │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│              Runtime: 2:30  •  Updated: November 2025        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    FEATURED CLIPS                            │
│                      (Optional)                              │
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│   │ Scene 1  │  │ Scene 2  │  │ Scene 3  │                  │
│   │DAREDEVIL │  │STASH 2   │  │BRAIN DEAD│                  │
│   └──────────┘  └──────────┘  └──────────┘                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Technical Specifications:**

**Video Hosting:**
- **Vimeo Pro** (preferred) - No ads, professional appearance, privacy controls
- Alternative: YouTube (unlisted) - but Vimeo signals professionalism
- Embed with custom player colors matching site (burgundy progress bar)

**Reel Requirements:**
- Length: 60-90 seconds ideal, 2 minutes max
- Resolution: 1080p minimum
- Opens with strongest moment (not a montage of names)
- Includes: Name slate at end with contact info
- NO music bed over dialogue scenes

**Featured Clips Section (Optional):**
- If he has scenes that showcase specific types (action, drama, comedy)
- Individual clips that agents might want to see separately
- Each labeled with project name and scene type

---

### PAGE 3: CREDITS

**URL:** carleton-king.com/credits

**Purpose:** Comprehensive but scannable resume. Validate that he works.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav Bar]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                       CREDITS                                │
│                                                              │
│  [Download Resume PDF]                                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  TELEVISION                                                  │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  DAREDEVIL                    Guest: Officer Minelli         │
│  Netflix / Marvel TV / ABC Studios                           │
│                                                              │
│  Murder Under the Friday Night Lights    Portraying: Jackboy │
│  Discovery ID / Lion Television                              │
│                                                              │
│  Final Moments                    Portraying: Dominick Lock  │
│  Wolf Entertainment                                          │
│                                                              │
│  [Additional TV credits...]                                  │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  FILM                                                        │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Stash 2: The Heartless              Lead: David             │
│  Dir. J.B. Coleman                                           │
│                                                              │
│  Brain Dead                          Lead: Theo              │
│  Dir. Jamie Senat                                            │
│                                                              │
│  [Additional film credits...]                                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  THEATER (Selected)                                          │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  [5-7 strongest theater credits, not the full list]          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  TRAINING & SKILLS                                           │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  Training:                                                   │
│  • [Acting training/coaches if any to list]                  │
│  • 20+ years professional experience                         │
│                                                              │
│  Special Skills:                                             │
│  Combat: Martial Arts (Jiu-Jitsu, Judo, Kendo, Mixed),       │
│          Boxing, Kickboxing, Firearms, Stunts                │
│  Movement: Parkour, Hip Hop, Jazz, Ice Skating               │
│  Voice: Tenor, Voiceover, Rapper, NYC & Southern Accents     │
│  Other: Drums, Teleprompter, Hosting                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Content Strategy:**

**Order of Sections:**
1. Television (leads with most recognizable network names)
2. Film (emphasize lead roles)
3. Theater (selected, not comprehensive)
4. Training & Skills

**Credit Prioritization:**
- Lead TV credits at top even if productions are smaller
- DAREDEVIL stays prominent (Marvel/Netflix recognition)
- Minimize or omit: Background, Featured Extra (unless on major show)
- For film: Lead with LEAD roles, supporting secondary

**What to EXCLUDE from website (keep on official resume):**
- Self-directed projects where he starred (raises questions)
- Extra/Background work
- Behind-the-scenes credits (save for Tru Luv site)
- Theater credits older than 5-7 years unless exceptional

**Skills Formatting:**
- Group by category (Combat, Movement, Voice, Other)
- Combat/Action skills should be prominent (differentiator)
- Remove anything that doesn't serve film/TV casting

---

### PAGE 4: ABOUT

**URL:** carleton-king.com/about

**Purpose:** Personality, humanity, the person behind the credits.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav Bar]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────┐                                          │
│  │                │    CARLETON KING                         │
│  │   Secondary    │                                          │
│  │   Headshot     │    Brooklyn-born actor with nearly two   │
│  │   or           │    decades of experience across film,    │
│  │   Lifestyle    │    television, and theater. From guest   │
│  │   Photo        │    appearances on Marvel's Daredevil to  │
│  │                │    lead roles in independent features,   │
│  │                │    Carleton brings depth, physicality,   │
│  └────────────────┘    and authenticity to every role.       │
│                                                              │
│  Known for his action capabilities and dramatic range, he    │
│  is trained in multiple martial arts disciplines and         │
│  performs his own stunts. His work spans drama, thriller,    │
│  and action genres.                                          │
│                                                              │
│  When not on set, Carleton is an accomplished filmmaker      │
│  whose work has been selected for international festivals    │
│  including Cannes Arts Fest and Amsterdam Movie Fest.        │
│                                                              │
│  Based in Brooklyn, NYC. SAG-AFTRA Eligible.                 │
│                                                              │
│                      ─────────────                           │
│                                                              │
│  Height: 6'1"  •  Eyes: Brown  •  Hair: Black                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Bio Guidelines:**

**Tone:** Professional but warm. Third person. Confident without arrogance.

**Structure:**
1. Opening line: Who he is, where he's from, experience level
2. Notable credits mentioned naturally
3. Differentiators: Action/stunt capabilities
4. Brief nod to filmmaker work (one sentence, positions as depth not distraction)
5. Practical info: Location, union status

**What NOT to include:**
- Personal life details
- Origin story ("ever since I was a child...")
- List of dreams/aspirations
- Anything that sounds like a cover letter

**Photo:**
- Different from hero headshot
- Can be slightly more casual/lifestyle
- Still professional quality
- Shows personality

---

### PAGE 5: CONTACT

**URL:** carleton-king.com/contact

**Purpose:** Make it effortless to reach him or his representation.

**Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  [Nav Bar]                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                       CONTACT                                │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  REPRESENTATION                                              │
│                                                              │
│  Theatrical: [Agent Name, Agency]  ← Update when signed      │
│              [agent email]                                   │
│              [agent phone]                                   │
│                                                              │
│  ─── OR if unrepresented: ───                               │
│                                                              │
│  For inquiries:                                              │
│  contact@carleton-king.com                                   │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  PROFILES                                                    │
│                                                              │
│  [IMDb Icon]  [Actors Access Icon]  [Instagram Icon]         │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│               [Download Resume PDF]                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Contact Strategy:**

**If Unrepresented:**
- Create a professional email: contact@carleton-king.com
- Consider: management@carleton-king.com or booking@carleton-king.com
- Use email, not a contact form (agents prefer direct email)

**If Represented:**
- Agent info goes first, prominently
- Personal contact below or removed

**Profile Links:**
- IMDb (essential)
- Actors Access (essential for casting)
- Instagram (optional, only if professional and active)
- NO: Facebook, TikTok, Twitter unless specifically curated for industry

---

## SEO & DISCOVERABILITY

### Basic SEO Setup

**Title Tag:**
```
Carleton King - Actor | Film & Television | NYC
```

**Meta Description:**
```
Carleton King is a Brooklyn-based actor with credits including Marvel's Daredevil, 
Discovery ID, and Wolf Entertainment. SAG-AFTRA eligible. View demo reel and credits.
```

**Keywords to Include Naturally:**
- Carleton King actor
- NYC actor
- Brooklyn actor
- SAG-AFTRA
- Action actor
- Martial arts actor

### Schema Markup

Implement Person schema for actor:
```json
{
  "@type": "Person",
  "name": "Carleton King",
  "jobTitle": "Actor",
  "url": "https://carleton-king.com",
  "sameAs": [
    "https://www.imdb.com/name/[his-imdb-id]",
    "https://www.actorsaccess.com/[his-profile]"
  ]
}
```

### Page Speed Optimization

- Compress all images (WebP format)
- Lazy load images below fold
- Host video on Vimeo/YouTube (not self-hosted)
- Minimize JavaScript
- Use CDN for assets

---

## TECHNICAL RECOMMENDATIONS

### Platform Options

**Option 1: Squarespace** (Recommended for non-coders)
- Clean templates
- Easy to update
- Good mobile responsiveness
- ~$16/month

**Option 2: Webflow** (More design control)
- Pixel-perfect customization
- Better for unique designs
- Steeper learning curve
- ~$14/month

**Option 3: Custom Build** (If you're coding it)
- Next.js or Astro for performance
- Tailwind CSS for styling
- Vercel or Netlify for hosting
- Most control, most effort

### Domain & Hosting

- Domain: carleton-king.com ✓ (purchased)
- SSL: Required (https)
- Email: Set up contact@carleton-king.com via Google Workspace or Zoho

### Analytics

- Google Analytics 4 (basic tracking)
- Track: Page views, reel plays, resume downloads
- Useful to see if submissions are being followed up

---

## CONTENT CHECKLIST

### Required Before Launch

- [ ] Primary headshot (theatrical, high-res)
- [ ] Secondary headshot or lifestyle photo
- [ ] Demo reel (hosted on Vimeo Pro)
- [ ] Resume PDF (formatted for download)
- [ ] Bio copy (written and approved)
- [ ] Contact email set up
- [ ] IMDb profile link
- [ ] Actors Access profile link

### Optional Enhancements

- [ ] Individual scene clips (if reel is long)
- [ ] Action/stunt reel (separate from main reel)
- [ ] Professional photos from productions
- [ ] Press mentions or reviews (if any)

---

## WHAT NOT TO DO

**Common Actor Website Mistakes:**

1. **Too much information** - Agents skim. Less is more.
2. **Autoplay video with sound** - Immediate close.
3. **Slow loading** - If reel doesn't play in 3 seconds, they're gone.
4. **Outdated information** - Nothing says amateur like a 2019 reel.
5. **Contact form instead of email** - Agents want to email directly.
6. **Social media overload** - One or two links max.
7. **Filmmaker credits competing with acting** - This site is for ACTING.
8. **Music playing** - Never.
9. **Flash or heavy animations** - Dated and slow.
10. **No mobile optimization** - Agents check on phones.

---

## POSITIONING: THE MULTI-HYPHENATE QUESTION

**On This Site:**
- Lead with ACTOR identity
- Filmmaker mentioned once, briefly, in About section
- Positioned as "depth" not "distraction"
- Example framing: "whose work has been selected for international festivals" (doesn't say "directs")

**Keep Separate:**
- Tru Luv Ent remains the filmmaker portfolio
- Do NOT cross-link prominently
- If someone Googles him, they'll find both - that's fine
- But this site should not confuse the message

**The One-Line Test:**
If an agent glances at this site for 5 seconds, they should think:
"Working actor, real credits, action-capable, professional."

NOT:
"Is this an actor or a director? What am I hiring him for?"

---

## NEXT STEPS

1. **Select platform** (Squarespace recommended for speed)
2. **Gather assets** (headshots, reel, resume)
3. **Write bio** (can draft based on this spec)
4. **Build site** (start with Home, Reel, Contact - Credits and About can follow)
5. **Set up email** (contact@carleton-king.com)
6. **Test on mobile** (critical)
7. **Submit to Google Search Console** (for indexing)
8. **Update Actors Access** with website link
9. **Begin agent submission campaign**

---

## END OF SPECIFICATION
