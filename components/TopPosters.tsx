'use client';

import React from 'react';
import { Award, TrendingUp, CheckCircle, Shield } from 'lucide-react';

const LEADERS = [
  { id: 1, address: '0x71C7...9cA1', earnings: 4520, accuracy: '99.2%', claims: 142, rank: 1 },
  { id: 2, address: '0x8821...B221', earnings: 3100, accuracy: '98.5%', claims: 89, rank: 2 },
  { id: 3, address: '0xFFA1...0021', earnings: 2850, accuracy: '97.1%', claims: 210, rank: 3 },
  { id: 4, address: '0x2210...EEBC', earnings: 1900, accuracy: '95.8%', claims: 56, rank: 4 },
];

export const TopPosters = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="mb-10">
        <h2 className="text-4xl font-black tracking-tighter mb-2">TOP REPORTERS</h2>
        <p className="text-zinc-500 font-medium italic">Verified users currently eligible for the Vault distribution.</p>
      </header>

      <div className="grid gap-4">
        {LEADERS.map((user) => (
          <div 
            key={user.id} 
            className="group relative bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] flex items-center justify-between hover:border-emerald-500/30 transition-all hover:bg-zinc-900/60"
          >
            <div className="flex items-center gap-6">
              {/* Rank Badge */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg ${
                user.rank === 1 ? 'bg-emerald-500 text-black shadow-emerald-500/20' : 
                user.rank === 2 ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-500'
              }`}>
                {user.rank}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-mono font-bold text-zinc-200">{user.address}</p>
                  <CheckCircle size={14} className="text-emerald-500" />
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-1">
                    <Shield size={10} /> {user.claims} Claims
                  </span>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                    <TrendingUp size={10} /> {user.accuracy} Accuracy
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Total Earned</p>
              <p className="text-2xl font-mono font-black text-white group-hover:text-emerald-400 transition-colors">
                +{user.earnings.toLocaleString()} <span className="text-xs opacity-40">PROOF</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER INFO FOR CLIENT */}
      <div className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 mt-12">
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-emerald-500" />
          <h3 className="font-black uppercase tracking-widest text-sm">Reward Logic</h3>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The top 10% of reporters with an accuracy rate over 95% receive a bi-weekly distribution from 
          <span className="text-white font-bold"> The Vault</span>. High-stake honesty is the only way to climb the leaderboard.
        </p>
      </div>
    </div>
  );
};