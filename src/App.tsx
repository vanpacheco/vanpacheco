import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Mail,
  MapPin,
  X,
  Check,
  Copy,
  Menu
} from 'lucide-react';

import eddieTaxImg from './assets/eddietaxplus.png';
import truBuildImg from './assets/trubuildcg.png';
import inbanxImg from './assets/inbanx.png';
import profileImg from './assets/profile.jpg';

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
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-18 py-3.5 flex items-center justify-between">
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-white font-bold text-sm flex items-center justify-center tracking-tight shadow-sm group-hover:bg-blue-600 transition-colors">
              VP
            </div>
            <span className="font-semibold text-[15px] text-[#0F172A] tracking-tight">
              Vanessa Pacheco
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-normal text-slate-600">
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
              href="#contact"
              className="bg-[#0F172A] hover:bg-slate-800 text-white text-[13px] font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all shadow-sm hover:shadow"
            >
              <span>Get in touch</span>
              <ArrowDown className="w-3.5 h-3.5" />
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
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16">
        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16 sm:mb-20">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur border border-slate-200/70 shadow-sm rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[13px] font-medium text-slate-700">
                Available for remote work · Colombia
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-[12px] font-bold tracking-[0.12em] text-[#2563EB] uppercase mb-4">
              FRONT-END CRAFT · FULL-STACK THINKING
            </div>

            {/* Main Title - Large Sizing matching Screenshot */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold text-[#0F172A] tracking-[-0.035em] leading-[0.98] mb-6">
              Building digital<br />
              products that <br />
              feel {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#9333EA]">
                effortless.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-[16px] sm:text-[17px] leading-[1.65] max-w-[500px] mb-8">
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
              <div>
                <span className="font-bold text-slate-900 text-sm">ES / EN</span> bilingual
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) - Visual Hero Artwork Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px] flex flex-col">
              {/* Glass Card with Profile Image */}
              <div className="w-full aspect-[4/4.9] rounded-[32px] bg-gradient-to-b from-[#dcebfa]/90 via-[#e2edfa]/80 to-[#eddcf8]/80 border border-white/90 shadow-[0_20px_50px_rgba(99,102,241,0.14)] p-3 relative overflow-hidden backdrop-blur-md flex flex-col justify-between items-center text-center group">
                <div className="w-full h-full rounded-[24px] overflow-hidden shadow-inner bg-slate-100 relative">
                  <img
                    src={profileImg}
                    alt="Vanessa Pacheco"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient vignette for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Location Badge at Bottom inside Card */}
                  {/* <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="bg-white/90 backdrop-blur-md border border-white/90 shadow-sm text-slate-800 text-[12px] font-medium px-3.5 py-2 rounded-xl inline-flex items-center gap-2 w-full justify-start">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>Pueblo Bello, Colombia</span>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Card Footer Underneath */}
              <div className="flex items-center justify-between mt-3.5 px-1">
                <div>
                  <div className="font-bold text-[14px] text-slate-900">Vanessa Pacheco</div>
                  <div className="text-[12px] text-slate-500 mt-0.5">Computer Engineer · ES / EN</div>
                </div>

                {/* <div className="bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]/60 text-[11px] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                  <span>Open to work</span>
                </div> */}
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
                <div className="text-xs text-blue-600 font-medium">Celerik • Remote</div>
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
                <div className="text-xs text-blue-600 font-medium">Celerik • Remote</div>
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
                <div className="text-xs text-blue-600 font-medium">NOVUS INOVA • Remote</div>
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
                <div className="text-xs text-blue-600 font-medium">Condor Labs • Cartagena</div>
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
                  <li><strong>Mid-level Developer @ Celerik (2024—2025):</strong> React & .NET finance applications.</li>
                  <li><strong>Full-stack Developer @ Celerik (2021—2024):</strong> React, Tailwind CSS, GraphQL fintech product.</li>
                  <li><strong>Frontend Contractor @ NOVUS INOVA (2019—2021):</strong> Bluetooth sensors & Mapbox apps.</li>
                  <li><strong>Junior Developer @ Condor Labs (2017—2019):</strong> Healthcare UI systems & Scrum leadership.</li>
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
