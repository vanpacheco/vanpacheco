import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  MapPin,
  X,
  Check,
  Copy,
  Menu
} from 'lucide-react';

import eddieTaxImg from './assets/eddietaxplus.jpg';
import truBuildImg from './assets/trubuildcg.jpg';
import inbanxImg from './assets/inbanx.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('nessapachecod@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-ambient-mesh text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#E2ECF7]/80 border-b border-white/40">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center tracking-tight shadow-sm group-hover:bg-blue-600 transition-colors">
              VP
            </div>
            <span className="font-semibold text-sm text-slate-900 tracking-tight">
              Vanessa Pacheco
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-600">
            <a href="#work" className="hover:text-slate-900 transition-colors">
              Work
            </a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">
              Experience
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:nessapachecod@gmail.com"
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow-sm hover:shadow"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700 hover:text-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Work
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              Experience
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600"
            >
              About
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16">
        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/85 backdrop-blur border border-white/80 shadow-sm rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-700">
                Available for remote work • Colombia
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-3">
              FRONT-END CRAFT • FULL-STACK THINKING
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-950 tracking-tight leading-[1.08] mb-5">
              Building digital products that feel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                effortless.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              I'm Vanessa, a front-end-focused full-stack developer who turns complex ideas into clean, thoughtful experiences for teams around the world.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#work"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2 shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>View selected work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/vanpacheco08/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 hover:bg-white text-slate-900 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full inline-flex items-center gap-1.5 border border-slate-200/80 shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>

            {/* Metrics Highlights Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 pt-2 border-t border-slate-300/40 w-full">
              <div>
                <span className="font-bold text-slate-900 text-sm">9+</span> years of experience
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
              {/* <div>
                <span className="font-bold text-slate-900 text-sm">3</span> continents
              </div> 
              <div className="w-1 h-1 rounded-full bg-slate-400"></div> */}
              <div>
                <span className="font-bold text-slate-900 text-sm">ES / EN</span> bilingual
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) - Visual Hero Artwork Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] flex flex-col">
              {/* Glass Card */}
              <div className="w-full aspect-[4/4.8] rounded-3xl bg-gradient-to-b from-blue-100/90 via-indigo-100/60 to-purple-100/70 border border-white/90 shadow-xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between items-center text-center group">
                {/* Subtle Geometric Background Overlay */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#6366F1 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>

                <div className="w-full flex justify-end">
                  <div className="w-2 h-2 rounded-full bg-blue-400/40"></div>
                </div>

                {/* Big Glow Letter V */}
                <div className="relative my-auto flex items-center justify-center">
                  <div className="text-[120px] font-black tracking-tighter text-white/90 drop-shadow-[0_12px_24px_rgba(99,102,241,0.25)] select-none transform transition-transform group-hover:scale-105 duration-500">
                    V
                  </div>
                </div>

                {/* Location Badge at Bottom */}
                {/* <div className="relative z-10 w-full flex justify-center">
                  <div className="bg-white/90 backdrop-blur-sm border border-white/90 shadow-sm text-slate-700 text-[11px] font-semibold px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>Pueblo Bello, Colombia</span>
                  </div>
                </div> */}
              </div>

              {/* Card Footer Underneath */}
              <div className="flex items-center justify-between mt-3 px-1">
                <div>
                  <div className="font-bold text-xs text-slate-900">Vanessa Pacheco</div>
                  <div className="text-[10px] text-slate-500">Software Developer</div>
                </div>

                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 border border-emerald-300/60 text-[10px] font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SELECTED WORK / RECENT PROJECTS SECTION
            ========================================================================= */}
        <section id="work" className="mb-16 sm:mb-20 scroll-mt-20">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-1">
                SELECTED WORK
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Recent projects
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1 sm:mt-0">
              Design polish, technical depth, and business context.
            </p>
          </div>

          {/* 3 Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: TruBuildCG */}
            <article className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100/90 flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50 aspect-[16/10]">
                  <img
                    src={truBuildImg}
                    alt="TruBuildCG preconstruction website preview"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1.5">
                  FREELANCE
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  TruBuildCG
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A refreshed web presence for a US construction business, shaped around strong visual hierarchy and practical usability.
                </p>
              </div>

              <a
                href="https://trubuildcg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Visit project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Card 2: EddieTaxPlus */}
            <article className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100/90 flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50 aspect-[16/10]">
                  <img
                    src={eddieTaxImg}
                    alt="EddieTaxPlus website preview"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1.5">
                  FREELANCE
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  EddieTaxPlus
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A focused website redesign for a US-based tax business, creating clarity, trust, and an easier customer journey.
                </p>
              </div>

              <a
                href="#contact"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Visit project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Card 3: inbanx */}
            <article className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100/90 flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50 aspect-[16/10]">
                  <img
                    src={inbanxImg}
                    alt="inbanx fintech card and expense software preview"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1.5">
                  FULL-TIME
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  inbanx
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  React, Tailwind CSS, and GraphQL contributions to an expense management product for small and medium-sized US businesses.
                </p>
              </div>

              <a
                href="#contact"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                <span>Visit project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </article>
          </div>
        </section>

        {/* =========================================================================
            EXPERIENCE SECTION ("A career built across borders")
            ========================================================================= */}
        <section id="experience" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100/80 mb-6 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-1">
                EXPERIENCE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                A career built across borders
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1 sm:mt-0">
              International teams, complex domains, and thoughtful delivery
            </p>
          </div>

          {/* Timeline Table */}
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {/* Row 1 */}
            <div className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
              <div className="md:col-span-2 text-xs font-medium text-slate-400">
                2024—Pres
              </div>
              <div className="md:col-span-4">
                <div className="font-bold text-slate-900">Freelance Developer</div>
                <div className="text-xs text-blue-600 font-medium">Independent • Remote</div>
              </div>
              <div className="md:col-span-6 text-xs text-slate-600 leading-relaxed">
                Web redesigns and a live Wix-to-web platform migration for clients in the US and Colombia.
              </div>
            </div>

            {/* Row 2 */}
            <div className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
              <div className="md:col-span-2 text-xs font-medium text-slate-400">
                2024—2025
              </div>
              <div className="md:col-span-4">
                <div className="font-bold text-slate-900">Mid-level Developer</div>
                <div className="text-xs text-blue-600 font-medium">SCOTTI • Remote</div>
              </div>
              <div className="md:col-span-6 text-xs text-slate-600 leading-relaxed">
                React and .NET development for lending, disbursement, and asset-backed finance applications.
              </div>
            </div>

            {/* Row 3 */}
            <div className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
              <div className="md:col-span-2 text-xs font-medium text-slate-400">
                2021—2024
              </div>
              <div className="md:col-span-4">
                <div className="font-bold text-slate-900">Full-stack Developer</div>
                <div className="text-xs text-blue-600 font-medium">inbanx • Remote</div>
              </div>
              <div className="md:col-span-6 text-xs text-slate-600 leading-relaxed">
                React, Tailwind CSS, and GraphQL for a US employee expense management product.
              </div>
            </div>

            {/* Row 4 */}
            <div className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
              <div className="md:col-span-2 text-xs font-medium text-slate-400">
                2019—2021
              </div>
              <div className="md:col-span-4">
                <div className="font-bold text-slate-900">Frontend Contractor</div>
                <div className="text-xs text-blue-600 font-medium">Seymour & Rogers Inc • Remote</div>
              </div>
              <div className="md:col-span-6 text-xs text-slate-600 leading-relaxed">
                A bilingual Bluetooth sensor app and Mapbox-powered factory location software.
              </div>
            </div>

            {/* Row 5 */}
            <div className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
              <div className="md:col-span-2 text-xs font-medium text-slate-400">
                2017—2019
              </div>
              <div className="md:col-span-4">
                <div className="font-bold text-slate-900">Junior Software Developer</div>
                <div className="text-xs text-blue-600 font-medium">CamBio Tech • Cartagena</div>
              </div>
              <div className="md:col-span-6 text-xs text-slate-600 leading-relaxed">
                Health care interfaces, theme-switch component framework, and Scrum team leadership.
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ABOUT & CORE TOOLKIT SECTION
            ========================================================================= */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 scroll-mt-20">
          {/* Left Card: About */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/80 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-2">
                ABOUT
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-4 tracking-tight leading-snug">
                Precision, care, and people-first collaboration.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                I bring designs to life with close attention to interaction and detail, while keeping the systems behind them scalable and maintainable. I'm equally comfortable collaborating in Figma, shaping React interfaces, and working across the stack.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                I earned my Computer Engineering degree from Universidad Tecnológica de Bolívar through the 'Excelencia y Talento Caribe' scholarship.
              </p>
            </div>
          </div>

          {/* Right Card: Core Toolkit */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/80 flex flex-col">
            <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-4">
              CORE TOOLKIT
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'React Native',
                'Node.js',
                'GraphQL',
                '.NET',
                'Tailwind CSS',
                'Storybook',
                'Mapbox',
                'AWS',
                'Cypress'
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-200/80 transition-colors inline-block cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            CALL TO ACTION BANNER ("Let's build something thoughtful.")
            ========================================================================= */}
        <section id="contact" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-[11px] font-bold tracking-wider text-white/80 uppercase mb-2">
              HAVE A PROJECT IN MIND?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Let's build something thoughtful.
            </h2>
            <p className="text-white/90 text-xs sm:text-sm max-w-xl mb-8 leading-relaxed">
              Remote-friendly, bilingual, and ready to help bring a clean, polished product to life.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:nessapachecod@gmail.com"
                className="bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <Mail className="w-3.5 h-3.5 text-slate-700" />
                <span>Email me</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vanpacheco08/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-white/25 backdrop-blur-sm transition-all hover:translate-y-[-1px]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/vanpacheco"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-white/25 backdrop-blur-sm transition-all hover:translate-y-[-1px]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="max-w-[1120px] mx-auto py-8 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 border-t border-slate-300/40">
        <div>© 2025 Vanessa Pacheco</div>
        <div>Designed and built with care • Remote, Colombia</div>
      </footer>

      {/* =========================================================================
          RESUME MODAL
          ========================================================================= */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Vanessa Pacheco</h3>
                <p className="text-xs text-blue-600 font-medium">Frontend & Full-Stack Developer</p>
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-xs text-slate-600 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Education</h4>
                <p className="font-semibold text-slate-800">Universidad Tecnológica de Bolívar</p>
                <p>B.S. in Computer Engineering • GPA: 4.52 / 5.0</p>
                <p className="text-slate-500 italic">Recipient of the 'Excelencia y Talento Caribe' Scholarship</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Experience Summary</h4>
                <ul className="list-disc pl-4 space-y-1.5">
                  <li><strong>Freelance Developer (2024—Present):</strong> Web redesigns and platform migrations.</li>
                  <li><strong>Mid-level Developer @ SCOTTI (2024—2025):</strong> React & .NET finance applications.</li>
                  <li><strong>Full-stack Developer @ inbanx (2021—2024):</strong> React, Tailwind CSS, GraphQL fintech product.</li>
                  <li><strong>Frontend Contractor @ Seymour & Rogers Inc (2019—2021):</strong> Bluetooth sensors & Mapbox apps.</li>
                  <li><strong>Junior Developer @ CamBio Tech (2017—2019):</strong> Healthcare UI systems & Scrum leadership.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Core Toolkit</h4>
                <p>JavaScript, TypeScript, React, React Native, Node.js, GraphQL, .NET, Tailwind CSS, Storybook, Mapbox, AWS, Cypress.</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={copyEmail}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1.5"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Email copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:nessapachecod@gmail.com?subject=Frontend%20Developer%20Opportunity"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Contact Vanessa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
