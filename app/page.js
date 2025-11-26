'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [reelModalOpen, setReelModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [visibleSections, setVisibleSections] = useState(new Set(['home', 'featured', 'reel', 'credits', 'skills', 'about', 'contact']))

  // Scroll detection for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section for nav highlighting
      const sections = ['home', 'reel', 'credits', 'about', 'contact']
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // Credits data
  const tvCredits = [
    { title: 'DAREDEVIL', role: 'Officer Minelli', type: 'Guest', network: 'Netflix / Marvel TV', imdb: 'https://www.imdb.com/title/tt3322312/' },
    { title: 'Murder Under the Friday Night Lights', role: 'Jackboy', type: 'Portrayal', network: 'Discovery ID', imdb: 'https://www.imdb.com/title/tt21374436/' },
    { title: 'Reborn Queen CEO, Ex-Husband Cries', role: 'Kidnapper', type: 'Recurring', network: 'TV Mini Series', imdb: 'https://www.imdb.com/title/tt38854114/' },
    { title: 'From XL to Extra Love', role: 'Private Security Guard', type: 'Recurring', network: 'TV Mini Series', imdb: 'https://www.imdb.com/title/tt32420570/' },
    { title: 'The Adjuster', role: 'S.W.A.T. Team #1', type: 'Guest', network: 'TV Mini Series', imdb: 'https://www.imdb.com/title/tt30224498/' },
    { title: 'Untold Genius', role: 'Young Dwayne', type: 'Guest', network: 'TV Series', imdb: null },
  ]

  const filmCredits = [
    { title: 'Stash 2: The Heartless', role: 'David', type: 'Lead', director: 'J.B. Coleman', imdb: 'https://www.imdb.com/title/tt37961628/' },
    { title: 'Brain Dead', role: 'Theo', type: 'Lead', director: 'Jamie Senat', imdb: 'https://www.imdb.com/title/tt14371552/' },
    { title: 'Bloody Money', role: 'Sticky', type: 'Lead', director: 'Brigid Turner', imdb: 'https://www.imdb.com/title/tt11915804/' },
    { title: 'Cheaters: Multiple Choice', role: 'Shadow', type: 'Lead', director: null, imdb: 'https://www.imdb.com/title/tt27499885/' },
    { title: 'R.A.W.M.', role: 'Barry', type: 'Lead', director: 'Keedem West', imdb: 'https://www.imdb.com/title/tt13912628/' },
    { title: 'Appointed', role: 'Leon Mariner', type: 'Lead', director: 'Kenya Cagle', imdb: 'https://www.imdb.com/title/tt10451786/' },
    { title: 'Colors of Kismet', role: 'Victor', type: 'Lead', director: 'Elroy Martinez Jr.', imdb: 'https://www.imdb.com/title/tt4824302/' },
  ]

  const theaterCredits = [
    { title: 'Stage Four', role: 'Son', venue: 'Blue Pearl Theatrics', festival: 'Defiance Festival' },
    { title: 'Maxine', role: 'Brady', venue: 'Blue Pearl Theatrics', festival: 'Shattered Festival' },
    { title: 'Blue Wall of Silence', role: 'T.J.', venue: 'Blue Pearl Theatrics', festival: 'Passion of Power' },
    { title: 'Two Trains Running', role: 'Hambone', venue: 'Bed Stuy Theatre Group', festival: null },
    { title: "My Brother's Keeper", role: 'Basil', venue: 'Dr. HeruKhuti', festival: null },
  ]

  const skills = {
    combat: ['Martial Arts', 'Jiu-Jitsu', 'Judo', 'Kendo', 'Boxing', 'Kickboxing', 'Firearms', 'Stunts'],
    movement: ['Parkour', 'Hip Hop Dance', 'Jazz Dance', 'Ice Skating'],
    voice: ['Tenor', 'Voiceover', 'Rapper', 'NYC Accent', 'Southern Accent'],
  }

  const featuredCredits = [
    { title: 'DAREDEVIL', subtitle: 'Marvel / Netflix', image: 'daredevil' },
    { title: 'STASH 2', subtitle: 'Lead Role', image: 'stash' },
    { title: 'DISCOVERY ID', subtitle: 'Murder Under...', image: 'discovery' },
    { title: 'AMAZON', subtitle: 'Mrs. Maisel', image: 'amazon' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden font-sans">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl tracking-wider font-light hover:text-[#CFB53B] transition-colors duration-300 font-playfair"
          >
            CARLETON KING
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Reel', 'Credits', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm tracking-widest uppercase transition-all duration-300 relative ${
                  activeSection === item.toLowerCase() ? 'text-[#CFB53B]' : 'text-[#888888] hover:text-[#F5F5F5]'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#722F37] transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`w-6 h-px bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/98 backdrop-blur-lg border-b border-white/5 transition-all duration-500 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {['Reel', 'Credits', 'About', 'Contact'].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg tracking-widest uppercase text-[#888888] hover:text-[#F5F5F5] transition-colors text-left"
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 50}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: 'all 0.3s ease',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#141414]" />

        {/* Subtle radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(114,47,55,0.3) 0%, transparent 70%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          {/* Headshot */}
          <div
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-2 border-[#722F37]/30 shadow-2xl animate-fade-in-up"
          >
            <img 
              src="/headshot.png" 
              alt="Carleton King - Actor"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl tracking-wider mb-4 font-playfair font-light animate-fade-in-up animation-delay-200"
          >
            CARLETON KING
          </h1>

          {/* Subtitle */}
          <p className="text-[#888888] text-lg md:text-xl tracking-[0.3em] uppercase mb-2 animate-fade-in-up animation-delay-400">
            Actor
          </p>

          {/* Status line */}
          <p className="text-[#666666] text-sm tracking-widest uppercase mb-12 animate-fade-in-up animation-delay-500">
            SAG-AFTRA Eligible • Brooklyn, NYC
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setReelModalOpen(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#722F37] hover:bg-[#8B3D47] text-white tracking-widest uppercase text-sm transition-all duration-500 overflow-hidden animate-fade-in-up animation-delay-600"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Reel
            </span>
            <span className="absolute inset-0 bg-[#CFB53B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center gap-3 text-[#0A0A0A] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Reel
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444] animate-fade-in animate-float animation-delay-1500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Credits Strip */}
      <section
        id="featured"
        data-animate
        className="py-16 bg-[#0f0f0f] border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[#666] text-xs tracking-[0.3em] uppercase mb-10">Recent Work</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredCredits.map((credit, i) => (
              <div
                key={credit.title}
                className="group relative aspect-[4/3] bg-[#141414] overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[#722F37]/0 group-hover:bg-[#722F37]/20 transition-colors duration-500 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-sm font-medium tracking-wider">{credit.title}</h3>
                  <p className="text-[#888] text-xs tracking-wider">{credit.subtitle}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-[#333] text-xs">
                  {credit.image}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reel Section */}
      <section
        id="reel"
        data-animate
        className="py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#722F37] text-xs tracking-[0.3em] uppercase mb-4">Demo Reel</p>
            <h2 className="text-3xl md:text-4xl tracking-wider mb-4 font-playfair">See The Work</h2>
            <p className="text-[#888] max-w-md mx-auto">
              A collection of performances across television and independent film.
            </p>
          </div>

          {/* Video Player Placeholder */}
          <div
            className="relative aspect-video bg-[#141414] cursor-pointer group overflow-hidden"
            onClick={() => setReelModalOpen(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#722F37]/90 group-hover:bg-[#722F37] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 border border-white/5 group-hover:border-[#722F37]/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center text-[#333] text-sm tracking-wider">
              REEL THUMBNAIL
            </div>
          </div>

          <p className="text-center text-[#666] text-sm mt-6">Runtime: 2:30 • Updated November 2025</p>
        </div>
      </section>

      {/* Credits Section */}
      <section
        id="credits"
        data-animate
        className="py-24 md:py-32 bg-[#0c0c0c]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#722F37] text-xs tracking-[0.3em] uppercase mb-4">Experience</p>
            <h2 className="text-3xl md:text-4xl tracking-wider font-playfair">Credits</h2>
          </div>

          {/* Television Credits */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[#CFB53B] text-sm tracking-[0.2em] uppercase">Television</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#CFB53B]/30 to-transparent" />
            </div>
            <div className="space-y-0">
              {tvCredits.map((credit, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-12 gap-4 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 px-2 -mx-2"
                >
                  <div className="col-span-12 md:col-span-5">
                    {credit.imdb ? (
                      <a href={credit.imdb} target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] group-hover:text-[#CFB53B] transition-colors duration-300 hover:underline">
                        {credit.title}
                      </a>
                    ) : (
                      <span className="text-[#F5F5F5] group-hover:text-[#CFB53B] transition-colors duration-300">
                        {credit.title}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-[#888]">
                    {credit.type}: {credit.role}
                  </div>
                  <div className="col-span-6 md:col-span-3 text-[#666] text-right">{credit.network}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Film Credits */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[#CFB53B] text-sm tracking-[0.2em] uppercase">Film</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#CFB53B]/30 to-transparent" />
            </div>
            <div className="space-y-0">
              {filmCredits.map((credit, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-12 gap-4 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 px-2 -mx-2"
                >
                  <div className="col-span-12 md:col-span-5">
                    {credit.imdb ? (
                      <a href={credit.imdb} target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] group-hover:text-[#CFB53B] transition-colors duration-300 hover:underline">
                        {credit.title}
                      </a>
                    ) : (
                      <span className="text-[#F5F5F5] group-hover:text-[#CFB53B] transition-colors duration-300">
                        {credit.title}
                      </span>
                    )}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-[#888]">
                    {credit.type}: {credit.role}
                  </div>
                  <div className="col-span-6 md:col-span-3 text-[#666] text-right">{credit.director ? `Dir. ${credit.director}` : ''}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Theater Credits */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[#CFB53B] text-sm tracking-[0.2em] uppercase">Theater</h3>
              <span className="text-[#666] text-xs">(Selected)</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#CFB53B]/30 to-transparent" />
            </div>
            <div className="space-y-0">
              {theaterCredits.map((credit, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-12 gap-4 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 px-2 -mx-2"
                >
                  <div className="col-span-12 md:col-span-5">
                    <span className="text-[#F5F5F5] group-hover:text-[#CFB53B] transition-colors duration-300">
                      {credit.title}
                    </span>
                    {credit.festival && <span className="ml-2 text-xs text-[#722F37]">({credit.festival})</span>}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-[#888]">Lead: {credit.role}</div>
                  <div className="col-span-6 md:col-span-3 text-[#666] text-right">{credit.venue}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#888] hover:text-[#CFB53B] transition-colors duration-300 text-sm tracking-wider"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-animate
        className="py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#722F37] text-xs tracking-[0.3em] uppercase mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl tracking-wider font-playfair">Special Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Combat */}
            <div className="md:col-span-2">
              <h4 className="text-[#CFB53B] text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#722F37] rounded-full" />
                Combat & Action
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.combat.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#722F37]/20 border border-[#722F37]/30 text-sm tracking-wider hover:bg-[#722F37]/30 hover:border-[#722F37]/50 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Movement */}
            <div>
              <h4 className="text-[#888] text-xs tracking-[0.2em] uppercase mb-4">Movement</h4>
              <div className="flex flex-wrap gap-2">
                {skills.movement.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-sm tracking-wider text-[#888] hover:text-[#F5F5F5] hover:border-white/20 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Voice */}
            <div>
              <h4 className="text-[#888] text-xs tracking-[0.2em] uppercase mb-4">Voice & Accents</h4>
              <div className="flex flex-wrap gap-2">
                {skills.voice.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-sm tracking-wider text-[#888] hover:text-[#F5F5F5] hover:border-white/20 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Physical Stats */}
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <p className="text-[#666] text-xs tracking-widest uppercase mb-1">Height</p>
                <p className="text-xl">6&apos;1&quot;</p>
              </div>
              <div>
                <p className="text-[#666] text-xs tracking-widest uppercase mb-1">Weight</p>
                <p className="text-xl">170 lbs</p>
              </div>
              <div>
                <p className="text-[#666] text-xs tracking-widest uppercase mb-1">Eyes</p>
                <p className="text-xl">Brown</p>
              </div>
              <div>
                <p className="text-[#666] text-xs tracking-widest uppercase mb-1">Hair</p>
                <p className="text-xl">Black</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className="py-24 md:py-32 bg-[#0c0c0c]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] bg-[#141414] overflow-hidden">
                <img 
                  src="/headshot.png" 
                  alt="Carleton King"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#722F37]/50" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#722F37]/50" />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <p className="text-[#722F37] text-xs tracking-[0.3em] uppercase mb-4">About</p>
              <h2 className="text-3xl md:text-4xl tracking-wider mb-8 font-playfair">The Actor</h2>

              <div className="space-y-4 text-[#AAAAAA] leading-relaxed">
                <p>
                  Brooklyn-born actor with nearly two decades of experience across film, television, and theater. From
                  guest appearances on Marvel&apos;s <span className="text-[#F5F5F5]">Daredevil</span> to lead roles in
                  independent features, Carleton brings depth, physicality, and authenticity to every role.
                </p>
                <p>
                  Known for his action capabilities and dramatic range, he is trained in multiple martial arts
                  disciplines and performs his own stunts. His work spans drama, thriller, and action genres with equal
                  command.
                </p>
                <p className="text-[#888]">
                  An accomplished filmmaker whose work has been selected for international festivals including Cannes
                  Arts Fest and Amsterdam Movie Fest, he brings a director&apos;s eye for performance and story to every
                  project.
                </p>
              </div>

              {/* Quick stats */}
              <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl md:text-3xl text-[#CFB53B] font-playfair">20+</p>
                  <p className="text-[#666] text-xs tracking-wider uppercase mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl text-[#CFB53B] font-playfair">8+</p>
                  <p className="text-[#666] text-xs tracking-wider uppercase mt-1">Lead Film Roles</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl text-[#CFB53B] font-playfair">2</p>
                  <p className="text-[#666] text-xs tracking-wider uppercase mt-1">Festival Selections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className="py-24 md:py-32"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#722F37] text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl tracking-wider mb-8 font-playfair">Contact</h2>

          {/* Contact Info */}
          <div className="mb-12 p-8 bg-[#0c0c0c] border border-white/5">
            <p className="text-[#666] text-xs tracking-widest uppercase mb-4">For Inquiries</p>
            <a
              href="mailto:dragon64818@aol.com"
              className="block text-xl md:text-2xl text-[#F5F5F5] hover:text-[#CFB53B] transition-colors duration-300 mb-3"
            >
              dragon64818@aol.com
            </a>
            <a
              href="tel:+19176588087"
              className="block text-lg text-[#888] hover:text-[#CFB53B] transition-colors duration-300"
            >
              (917) 658-8087
            </a>
          </div>

          {/* Profile Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://www.imdb.com/name/nm8586448/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#666] hover:text-[#CFB53B] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-white/10 group-hover:border-[#CFB53B]/50 flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-bold">IMDb</span>
              </div>
              <span className="text-xs tracking-wider">IMDb</span>
            </a>
            <a
              href="#"
              className="group flex flex-col items-center gap-2 text-[#666] hover:text-[#CFB53B] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-white/10 group-hover:border-[#CFB53B]/50 flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-bold">AA</span>
              </div>
              <span className="text-xs tracking-wider">Actors Access</span>
            </a>
            <a
              href="#"
              className="group flex flex-col items-center gap-2 text-[#666] hover:text-[#CFB53B] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-white/10 group-hover:border-[#CFB53B]/50 flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </div>
              <span className="text-xs tracking-wider">Instagram</span>
            </a>
          </div>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white transition-all duration-300 text-sm tracking-wider"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-sm">© {new Date().getFullYear()} Carleton King. All rights reserved.</p>
          <p className="text-[#444] text-sm">Brooklyn, NYC • SAG-AFTRA Eligible</p>
        </div>
      </footer>

      {/* Reel Modal */}
      {reelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setReelModalOpen(false)}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            onClick={() => setReelModalOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video bg-[#0A0A0A] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#666] text-sm tracking-wider mb-4">VIDEO PLAYER</p>
                <p className="text-[#444] text-xs">Embed Vimeo or YouTube here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
