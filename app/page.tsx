'use client';

import React from 'react';
import {
  PlayCircle,
  X,
  ArrowRight,
  Coins,
  ShieldCheck,
  Cpu,
  Database,
  Scale,
  BrainCircuit,
} from 'lucide-react';

export default function ProofPostLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      {/* HEADER */}
      <nav className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 group">
          <img
            src="/ProofPost_Logo.png"
            className="w-10 h-10 rounded-xl shadow-emerald-500/20 shadow-lg"
            alt="ProofPost logo"
          />
          <span className="text-xl font-black italic tracking-tighter">
            PROOF<span className="text-emerald-500">POST</span>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://x.com/ProofPostAI"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            aria-label="ProofPost on X"
          >
            <X size={18} />
          </a>

          <button className="bg-emerald-500 text-black px-6 py-2 rounded-full font-black text-xs hover:bg-emerald-400 transition-all uppercase tracking-widest">
            Coming Soon
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-32">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Built during 0G APAC Hackathon
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
          Stake your <span className="italic text-emerald-500">content.</span>
          <br />
          Prove your <span className="text-zinc-300">credibility.</span>
        </h1>

        <p className="text-lg text-zinc-500 max-w-3xl mb-12 font-medium leading-relaxed">
          ProofPost is the accountability layer for the AI era.
          <br className="hidden md:block" />
          Instead of trying to perfectly detect what is real, we make users accountable for what they post.
          By combining AI agents with on-chain staking, ProofPost turns content into something you must stand behind — not just publish.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="group bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-500 transition-all flex items-center gap-2">
            Coming Soon
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://youtu.be/fsdEE4iIHuY"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-zinc-900 border border-white/5 font-bold hover:bg-zinc-800 transition-all"
          >
            <PlayCircle size={22} className="text-emerald-500" />
            Watch Demo
          </a>
        </div>
      </section>

      {/* DEMO */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <div className="relative group p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[3rem] shadow-2xl">
          <div className="aspect-video bg-zinc-950 rounded-[2.8rem] overflow-hidden border border-white/5 relative">
            <iframe
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://www.youtube.com/embed/fsdEE4iIHuY"
              title="ProofPost Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* PROBLEM / THESIS */}
      <section className="px-6 py-28 border-y border-white/5 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-8">
            Detection alone is not enough
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            AI-generated content is getting better every month. Centralized detectors can be bypassed, and confidence scores alone do not create trust.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Most platforms ask:
          </p>

          <p className="text-white text-2xl md:text-3xl font-black mb-10">
            “Is this content real?”
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            ProofPost asks a different question:
          </p>

          <p className="text-emerald-500 text-2xl md:text-4xl font-black">
            “Who is willing to stake on it?”
          </p>

          <p className="text-zinc-500 mt-10 max-w-3xl mx-auto">
            In ProofPost, AI provides signals. The protocol enforces consequences.
            That shift moves trust from guesswork to accountability.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-32 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Core Flow
          </div>
          <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6">
            How ProofPost works
          </h2>
          <p className="text-zinc-500 text-lg max-w-3xl mx-auto">
            Posts become accountable objects with AI risk analysis, economic stake, and transparent on-chain logic.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          <FeatureCard
            icon={<Scale size={20} className="text-emerald-400" />}
            title="1. Stake the Post"
            desc="Users publish text, images, or video and lock stake behind the claim."
          />
          <FeatureCard
            icon={<BrainCircuit size={20} className="text-cyan-400" />}
            title="2. AI Agents Analyze"
            desc="AI agents evaluate uploaded media and generate synthetic or manipulation risk signals."
          />
          <FeatureCard
            icon={<ShieldCheck size={20} className="text-yellow-400" />}
            title="3. Trust or Challenge"
            desc="Users stake on either side of a post during a 7-day resolution window."
          />
          <FeatureCard
            icon={<Coins size={20} className="text-orange-400" />}
            title="4. Vault & Rewards"
            desc="Fees and slashed stake flow into the vault, which is later distributed to top trusted contributors."
          />
        </div>
      </section>

      {/* WHY 0G */}
      <section className="px-6 py-32 border-y border-white/5 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase italic">
                Why 0G
              </h2>

              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                ProofPost is not just a frontend app with AI features added on top.
                It needs decentralized infrastructure for compute, storage, and economic execution.
              </p>

              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                0G gives us the stack to do that: AI agents for media analysis, decentralized storage for content and provenance, and chain-level logic for staking, vaults, slashing, and reputation.
              </p>

              <div className="space-y-6">
                <TechPoint
                  icon={<Cpu size={16} className="text-emerald-400" />}
                  title="0G Compute"
                  desc="AI agents run inference on uploaded images and videos to generate deepfake and manipulation risk signals without depending on a centralized AI provider."
                />
                <TechPoint
                  icon={<Database size={16} className="text-cyan-400" />}
                  title="0G Storage"
                  desc="Media, metadata, and provenance records can be stored in decentralized storage so posts remain tamper-resistant and historically auditable."
                />
                <TechPoint
                  icon={<ShieldCheck size={16} className="text-yellow-400" />}
                  title="0G Chain"
                  desc="Staking, vault escrow, challenge resolution, slashing, and wallet reputation are enforced as transparent on-chain actions with economic consequences."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatBox label="AI Layer" val="0G Compute" />
              <StatBox label="Media Layer" val="0G Storage" />
              <StatBox label="Economic Layer" val="0G Chain" />
              <StatBox label="Hackathon" val="0G APAC 2026" />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STATUS */}
      <section className="px-6 py-32 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          Current Status
        </div>

        <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6">
          Currently building
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          The platform is under active development.
          We currently have a frontend MVP showing posting, staking, AI risk labels, vault flow, and dispute states.
          The next step is deeper 0G integration for AI inference, storage, and on-chain economic logic.
        </p>

        <div className="grid md:grid-cols-3 gap-5 text-left">
          <MiniStatus title="MVP Frontend" desc="Feed, staking UI, vault display, challenge flow, and media post states." />
          <MiniStatus title="AI Pipeline" desc="Simulated for demo now, planned to run through 0G Compute agents." />
          <MiniStatus title="Protocol Logic" desc="Vault, slashing, and reputation designed for chain-based enforcement on 0G." />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="/ProofPost_Logo.png"
            className="w-6 h-6 rounded-lg opacity-50 grayscale"
            alt="ProofPost logo"
          />
          <span className="text-zinc-600 font-bold uppercase tracking-[0.4em] text-[10px]">
            ProofPost 2026
          </span>
        </div>

        <p className="text-zinc-600 text-sm">
          Built during the 0G APAC Hackathon.
        </p>
      </footer>
    </div>
  );
}
/* Helper Components */

interface TechPointProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function TechPoint({ icon, title, desc }: TechPointProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex-shrink-0 w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

interface StatBoxProps {
  label: string;
  val: string;
}

function StatBox({ label, val }: StatBoxProps) {
  return (
    <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl text-center">
      <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-2">
        {label}
      </p>
      <p className="text-xl font-mono font-bold text-emerald-400">{val}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-white/10 transition-all">
      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-black tracking-tight mb-3">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

interface MiniStatusProps {
  title: string;
  desc: string;
}

function MiniStatus({ title, desc }: MiniStatusProps) {
  return (
    <div className="p-6 bg-zinc-900/40 border border-white/5 rounded-[2rem]">
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
