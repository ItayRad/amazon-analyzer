import { useEffect, useRef } from 'react'

// ─── Icons ───────────────────────────────────────────────────────────────────

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

// ─── Section wrapper with reveal animation ────────────────────────────────────

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section ${className}`}
    >
      {children}
    </section>
  )
}

// ─── Card component ───────────────────────────────────────────────────────────

interface CardProps {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  delay?: number
}

const Card = ({ icon, label, children, delay = 0 }: CardProps) => (
  <div
    className="group relative rounded-2xl p-px overflow-hidden"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* gradient border */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-transparent to-blue-500/20 rounded-2xl pointer-events-none" />
    <div className="relative rounded-2xl bg-[#0d1526] p-6 h-full transition-colors duration-300 group-hover:bg-[#111d38]">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400/20">
          {icon}
        </span>
        <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-amber-400">
          {label}
        </h2>
      </div>
      {children}
    </div>
  </div>
)

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5">
    <span className="font-display font-bold text-lg tracking-tight text-white">
      KDP<span className="text-amber-400">.</span>Analyzer
    </span>
    <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
      <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
      <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy</a>
      <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
    </div>
  </nav>
)

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
    {/* Background radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-400/5 blur-[100px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[80px]" />
    </div>

    {/* Subtle grid texture */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="relative z-10 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium tracking-widest uppercase mb-8 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        Internal Tool · Not Public
      </div>

      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up">
        KDP Market<br />
        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)' }}>
          Analyzer
        </span>
      </h1>

      <p className="font-sans text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto animate-fade-up-delay opacity-0">
        Internal analytics tool for independent publishing research.
      </p>

      <div className="mt-10 flex flex-wrap gap-3 justify-center animate-fade-up-delay-2 opacity-0">
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-[#0A0F1E] font-semibold text-sm hover:bg-amber-300 active:scale-95 transition-all duration-200"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
        >
          Contact
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
      <span className="text-xs tracking-widest uppercase">Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  </div>
)

// ─── Stat badge ───────────────────────────────────────────────────────────────

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-white/[0.03] border border-white/5">
    <span className="font-display text-2xl font-bold text-amber-400">{value}</span>
    <span className="text-xs text-slate-500 text-center">{label}</span>
  </div>
)

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-200">
      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-section.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }
        .animate-fade-up-delay {
          animation: fadeUp 0.7s ease-out 0.25s forwards;
        }
        .animate-fade-up-delay-2 {
          animation: fadeUp 0.7s ease-out 0.45s forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero ── */}
      <Hero />

      {/* ── Stats strip ── */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat value="BSR" label="Best Sellers Rank tracking" />
          <Stat value="Live" label="Real-time pricing data" />
          <Stat value="0" label="User data collected" />
          <Stat value="Internal" label="Access restricted" />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-6">

        {/* About / API Justification */}
        <Section id="about">
          <Card icon={<BookIcon />} label="About The Project — API Justification">
            <p className="text-slate-300 leading-relaxed text-base">
              This application integrates with the Amazon Product Advertising API to retrieve
              up-to-date Best Sellers Rank (BSR) data, pricing, and search volume metrics. The
              data is used strictly for internal market analysis to identify highly competitive
              publishing niches. This is an internal tool and is not distributed to the public.
            </p>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { label: 'BSR Data', desc: 'Real-time rank tracking across categories' },
                { label: 'Pricing', desc: 'Current market price intelligence' },
                { label: 'Search Volume', desc: 'Keyword demand metrics' },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-lg bg-white/[0.03] border border-white/5 px-4 py-3">
                  <div className="text-xs font-semibold text-amber-400 mb-1">{label}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </Section>

        {/* Privacy Policy */}
        <Section id="privacy">
          <Card icon={<ShieldIcon />} label="Privacy Policy">
            <p className="text-slate-300 leading-relaxed text-base">
              Privacy Policy: This application does not collect, harvest, store, or sell any
              personal user information. No trackers or cookies are used on this landing page.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                'No personal data collected or stored',
                'No third-party trackers or analytics',
                'No cookies placed on your device',
                'No data sold or shared with third parties',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <Card icon={<MailIcon />} label="Contact">
            <p className="text-slate-300 leading-relaxed text-base mb-5">
              For API compliance inquiries, please contact:
            </p>
            <a
              href="mailto:print.travelik@gmail.com"
              className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 font-medium text-sm hover:bg-amber-400/20 transition-all duration-200"
            >
              <MailIcon />
              print.travelik@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Card>
        </Section>

        {/* Analytics decoration card */}
        <Section id="metrics">
          <Card icon={<ChartIcon />} label="Data Metrics Overview">
            <p className="text-slate-400 text-sm mb-5">
              Sample categories tracked for niche discovery and competitive analysis.
            </p>
            <div className="space-y-3">
              {[
                { category: 'Travel Guides', bsr: '#1,204', competition: 'High', score: 78 },
                { category: 'Language Learning', bsr: '#3,891', competition: 'Medium', score: 54 },
                { category: 'Self-Help Journals', bsr: '#892', competition: 'Very High', score: 91 },
                { category: 'Puzzle Books', bsr: '#2,110', competition: 'Medium', score: 62 },
              ].map(({ category, bsr, competition, score }) => (
                <div key={category} className="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-slate-200 truncate">{category}</div>
                    <div className="text-xs text-slate-500">BSR {bsr} · {competition}</div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className="text-xs text-amber-400 font-medium w-8 text-right">{score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Section>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} KDP Market Analyzer · Internal use only · No user data collected
        </p>
      </footer>
    </div>
  )
}
