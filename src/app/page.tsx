'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { translations } from "./translations";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="CyberHeart Logo" className="h-10 w-10" />
              <div className="text-2xl font-bold web3-gradient-text">CyberHeart</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="#vision" className="hover:text-cyan-400 transition">{t.nav.vision}</a>
              <a href="#technology" className="hover:text-cyan-400 transition">{t.nav.technology}</a>
              <a href="#ecosystem" className="hover:text-cyan-400 transition">{t.nav.ecosystem}</a>
              <a href="#tokenomics" className="hover:text-cyan-400 transition">{t.nav.tokenomics}</a>
              <a href="#governance" className="hover:text-cyan-400 transition">{t.nav.governance}</a>
              <a href="#roadmap" className="hover:text-cyan-400 transition">{t.nav.roadmap}</a>
              <a href="#team" className="hover:text-cyan-400 transition">{t.nav.team}</a>
              <a href="#partners" className="hover:text-cyan-400 transition">{t.nav.partners}</a>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
                className="px-3 py-1.5 rounded-lg border border-cyan-500/40 hover:bg-cyan-500/10 transition text-cyan-400 text-xs"
              >
                {lang === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 glass-card p-4 rounded-xl">
              <div className="flex flex-col gap-3 text-sm">
                <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.vision}</a>
                <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.technology}</a>
                <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.ecosystem}</a>
                <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.tokenomics}</a>
                <a href="#governance" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.governance}</a>
                <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.roadmap}</a>
                <a href="#team" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.team}</a>
                <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 transition py-2">{t.nav.partners}</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="web3-gradient-text">CyberHeart</span> — {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="h-2 w-12 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full mb-4" />
              <p className="text-gray-200">{t.hero.bullet1}</p>
            </Card>
            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="h-2 w-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full mb-4" />
              <p className="text-gray-200">{t.hero.bullet2}</p>
            </Card>
            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="h-2 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4" />
              <p className="text-gray-200">{t.hero.bullet3}</p>
            </Card>
          </div>

          <div className="flex justify-center">
            <a href={lang === 'en' ? '/litepaper-en.pdf' : '/litepaper-tr.pdf'} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-cyan-500/50 hover:bg-cyan-500/10 px-6 md:px-8 text-sm md:text-base">
                {t.hero.cta}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 web3-gradient-text">{t.vision.title}</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {t.vision.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-8 transition-transform hover:scale-105">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{t.vision.own}</h3>
              <p className="text-gray-400">{t.vision.ownDesc}</p>
            </div>
            <div className="glass-card p-8 transition-transform hover:scale-105">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{t.vision.build}</h3>
              <p className="text-gray-400">{t.vision.buildDesc}</p>
            </div>
            <div className="glass-card p-8 transition-transform hover:scale-105">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{t.vision.share}</h3>
              <p className="text-gray-400">{t.vision.shareDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center web3-gradient-text">
            {t.technology.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-8 transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{t.technology.modular}</h3>
              <p className="text-gray-300">{t.technology.modularDesc}</p>
            </Card>

            <Card className="glass-card p-8 transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{t.technology.scalability}</h3>
              <p className="text-gray-300">{t.technology.scalabilityDesc}</p>
            </Card>

            <Card className="glass-card p-8 transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{t.technology.privacy}</h3>
              <p className="text-gray-300">{t.technology.privacyDesc}</p>
            </Card>

            <Card className="glass-card p-8 transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{t.technology.security}</h3>
              <p className="text-gray-300">{t.technology.securityDesc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center web3-gradient-text">
            {t.ecosystem.title}
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            {t.ecosystem.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t.ecosystem.defi}</h3>
              <p className="text-gray-400 text-sm">{t.ecosystem.defiDesc}</p>
            </Card>

            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">{t.ecosystem.gamefi}</h3>
              <p className="text-gray-400 text-sm">{t.ecosystem.gamefiDesc}</p>
            </Card>

            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t.ecosystem.socialfi}</h3>
              <p className="text-gray-400 text-sm">{t.ecosystem.socialfiDesc}</p>
            </Card>

            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">{t.ecosystem.rwa}</h3>
              <p className="text-gray-400 text-sm">{t.ecosystem.rwaDesc}</p>
            </Card>
          </div>

          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3 web3-gradient-text">{t.ecosystem.developer}</h3>
            <p className="text-gray-300">{t.ecosystem.developerDesc}</p>
          </Card>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center web3-gradient-text">{t.tokenomics.title}</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.tokenomics.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="glass-card p-8 text-center">
              <div className="text-sm text-cyan-400 mb-2">{t.tokenomics.totalSupply}</div>
              <div className="text-4xl font-bold">30,000,000,000 CYHT</div>
            </Card>
            <Card className="glass-card p-8 text-center">
              <div className="text-sm text-purple-400 mb-2">{t.tokenomics.initialPrice}</div>
              <div className="text-4xl font-bold">0.0001 USDT</div>
            </Card>
          </div>

          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t.tokenomics.distribution}</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-gray-300">{t.tokenomics.ecosystem}</span>
                <span className="text-cyan-400 font-semibold">30%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-gray-300">{t.tokenomics.community}</span>
                <span className="text-purple-400 font-semibold">25%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-gray-300">{t.tokenomics.team}</span>
                <span className="text-cyan-400 font-semibold">15%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-gray-300">{t.tokenomics.nodes}</span>
                <span className="text-purple-400 font-semibold">10%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-gray-300">{t.tokenomics.partners}</span>
                <span className="text-cyan-400 font-semibold">8%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-gray-300">{t.tokenomics.marketing}</span>
                <span className="text-purple-400 font-semibold">7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">{t.tokenomics.treasury}</span>
                <span className="text-cyan-400 font-semibold">5%</span>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 mt-6">
            <p className="text-gray-300 text-center">
              <strong className="text-cyan-400">{t.tokenomics.valueAccrual}</strong> {t.tokenomics.valueAccrualDesc}
            </p>
          </Card>
        </div>
      </section>

      {/* Governance Section */}
      <section id="governance" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center web3-gradient-text">{t.governance.title}</h2>
          <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            {t.governance.description}
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="font-semibold mb-2">{t.governance.step1}</h3>
              <p className="text-sm text-gray-400">{t.governance.step1Desc}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="font-semibold mb-2">{t.governance.step2}</h3>
              <p className="text-sm text-gray-400">{t.governance.step2Desc}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="font-semibold mb-2">{t.governance.step3}</h3>
              <p className="text-sm text-gray-400">{t.governance.step3Desc}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">4</span>
              </div>
              <h3 className="font-semibold mb-2">{t.governance.step4}</h3>
              <p className="text-sm text-gray-400">{t.governance.step4Desc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center web3-gradient-text">{t.roadmap.title}</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-sm text-cyan-400 mb-2">{t.roadmap.phase1}</div>
              <h3 className="text-xl font-semibold mb-4">{t.roadmap.phase1Title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t.roadmap.phase1_1}</li>
                <li>• {t.roadmap.phase1_2}</li>
                <li>• {t.roadmap.phase1_3}</li>
                <li>• {t.roadmap.phase1_4}</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-sm text-purple-400 mb-2">{t.roadmap.phase2}</div>
              <h3 className="text-xl font-semibold mb-4">{t.roadmap.phase2Title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t.roadmap.phase2_1}</li>
                <li>• {t.roadmap.phase2_2}</li>
                <li>• {t.roadmap.phase2_3}</li>
                <li>• {t.roadmap.phase2_4}</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-sm text-cyan-400 mb-2">{t.roadmap.phase3}</div>
              <h3 className="text-xl font-semibold mb-4">{t.roadmap.phase3Title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t.roadmap.phase3_1}</li>
                <li>• {t.roadmap.phase3_2}</li>
                <li>• {t.roadmap.phase3_3}</li>
                <li>• {t.roadmap.phase3_4}</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 transition-transform hover:scale-105">
              <div className="text-sm text-purple-400 mb-2">{t.roadmap.phase4}</div>
              <h3 className="text-xl font-semibold mb-4">{t.roadmap.phase4Title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• {t.roadmap.phase4_1}</li>
                <li>• {t.roadmap.phase4_2}</li>
                <li>• {t.roadmap.phase4_3}</li>
                <li>• {t.roadmap.phase4_4}</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center web3-gradient-text">
            {t.team.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Sébastien Borget</h3>
              <div className="text-cyan-400 text-sm mb-3">{t.team.ceo}</div>
              <p className="text-xs text-gray-400">{t.team.bio1}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Manuel Araoz</h3>
              <div className="text-purple-400 text-sm mb-3">{t.team.cto}</div>
              <p className="text-xs text-gray-400">{t.team.bio2}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Jason Yanowitz</h3>
              <div className="text-cyan-400 text-sm mb-3">{t.team.coo}</div>
              <p className="text-xs text-gray-400">{t.team.bio3}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Illia Polosukhin</h3>
              <div className="text-purple-400 text-sm mb-3">{t.team.tech}</div>
              <p className="text-xs text-gray-400">{t.team.bio4}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Santiago Palladino</h3>
              <div className="text-cyan-400 text-sm mb-3">{t.team.tech}</div>
              <p className="text-xs text-gray-400">{t.team.bio5}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Jake Chervinsky</h3>
              <div className="text-purple-400 text-sm mb-3">{t.team.legal}</div>
              <p className="text-xs text-gray-400">{t.team.bio6}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">Meltem Demirors</h3>
              <div className="text-cyan-400 text-sm mb-3">{t.team.strategy}</div>
              <p className="text-xs text-gray-400">{t.team.bio7}</p>
            </Card>

            <Card className="glass-card p-6 text-center transition-transform hover:scale-105">
              <h3 className="font-semibold text-lg mb-1">David Schwartz</h3>
              <div className="text-purple-400 text-sm mb-3">{t.team.ecosystem}</div>
              <p className="text-xs text-gray-400">{t.team.bio8}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center web3-gradient-text">
            {t.partners.title}
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.partners.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Card className="glass-card px-6 py-3 text-center transition-transform hover:scale-105">
              <span className="text-cyan-400">🔗 {t.partners.infrastructure}</span>
            </Card>
            <Card className="glass-card px-6 py-3 text-center transition-transform hover:scale-105">
              <span className="text-purple-400">🛡️ {t.partners.security}</span>
            </Card>
            <Card className="glass-card px-6 py-3 text-center transition-transform hover:scale-105">
              <span className="text-cyan-400">💰 {t.partners.defi}</span>
            </Card>
            <Card className="glass-card px-6 py-3 text-center transition-transform hover:scale-105">
              <span className="text-purple-400">🎮 {t.partners.games}</span>
            </Card>
            <Card className="glass-card px-6 py-3 text-center transition-transform hover:scale-105">
              <span className="text-cyan-400">👥 {t.partners.community}</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk & Disclaimer Section */}
      <section id="risk" className="py-24 px-4 section-glow">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center web3-gradient-text">
            {t.risk.title}
          </h2>
          <Card className="glass-card p-8">
            <p className="text-gray-300 leading-relaxed">
              {t.risk.description}
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="docs" className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="CyberHeart Logo" className="h-10 w-10" />
              <div className="text-2xl font-bold web3-gradient-text">CyberHeart</div>
            </div>

            <div className="text-center text-gray-500 text-sm">
              {t.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
