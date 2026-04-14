// 'use client';

// import React, { useState, useRef } from 'react';
// import {
//   Wallet, Zap, AlertTriangle, ShieldCheck, Brain, Plus, 
//   Flame, CheckCircle, Home, User, TrendingUp, Bell, 
//   Scale, Image as ImageIcon, Video, Loader2, Coins, Share2, Clock, X
// } from 'lucide-react';
// import { TopPosters } from '../components/TopPosters'; // Adjusted path

// export default function ProofPostMVP() {
//   const [activeTab, setActiveTab] = useState('feed');
//   const [connected, setConnected] = useState(false);
//   const [userBalance, setUserBalance] = useState(5000); 
//   const [vaultTotal, setVaultTotal] = useState(12450);
//   const [platformOwnerBalance, setPlatformOwnerBalance] = useState(150.5); // Initial mock profit
  
//   // Post & AI States
//   const [content, setContent] = useState('');
//   const [stake, setStake] = useState(100);
//   const [isScanning, setIsScanning] = useState(false);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const fileInputRef = useRef(null);

//   // Staking Modal States
//   const [showStakingModal, setShowStakingModal] = useState(false);
//   const [modalType, setModalType] = useState('trust'); 
//   const [targetPost, setTargetPost] = useState(null);
//   const [stakeAmount, setStakeAmount] = useState(100);

//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       author: '0xDEAD...BEEF',
//       content: 'I have evidence that the central bank is planning a digital currency rollout by Q4.',
//       media: null,
//       stake: 800,
//       aiScore: 0,
//       status: 'normal',
//       createdAt: new Date(Date.now() - 3600000),
//     },
//     {
//       id: 2,
//       author: '0x3341...1102',
//       content: 'Leaked photo of the new Mars rover engine. Breakthrough in ion propulsion.',
//       media: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
//       stake: 150,
//       aiScore: 0.94,
//       status: 'slashed',
//       createdAt: new Date(Date.now() - 86400000),
//     }
//   ]);

//   const connectWallet = () => setConnected(true);

//   const handleImageClick = () => fileInputRef.current.click();
//   const onFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setSelectedImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handlePost = () => {
//     if (!content || userBalance < stake) return;
//     setIsScanning(true);
//     setScanProgress(0);

//     const interval = setInterval(() => {
//       setScanProgress(prev => (prev >= 100 ? 100 : prev + 2));
//     }, 40);

//     setTimeout(() => {
//       clearInterval(interval);
//       const isAI = selectedImage ? true : Math.random() > 0.8; 
//       const newPost = {
//         id: Date.now(),
//         author: '0x71C7...9cA1',
//         content,
//         media: selectedImage,
//         stake: stake,
//         aiScore: isAI ? 0.98 : 0.05,
//         status: isAI ? 'slashed' : 'normal',
//         createdAt: new Date(),
//       };

//       if (isAI) {
//         setVaultTotal(prev => prev + stake); // Slashed posts go 100% to vault for this demo
//         setUserBalance(prev => prev - stake);
//       } else {
//         setUserBalance(prev => prev - stake);
//       }
      
//       setPosts([newPost, ...posts]);
//       setIsScanning(false);
//       setContent('');
//       setSelectedImage(null);
//     }, 2500);
//   };

//   const openStakingModal = (post, type) => {
//     setTargetPost(post);
//     setModalType(type);
//     setShowStakingModal(true);
//     setStakeAmount(100); 
//   };

//   const confirmStake = () => {
//     if (userBalance < stakeAmount) return;

//     // --- TAX CALCULATION ---
//     const vaultFee = stakeAmount * 0.05;
//     const burnFee = stakeAmount * 0.03;
//     const ownerFee = stakeAmount * 0.02;
//     const netStake = stakeAmount - (vaultFee + burnFee + ownerFee);

//     setVaultTotal(prev => prev + vaultFee);
//     setPlatformOwnerBalance(prev => prev + ownerFee);
//     setUserBalance(prev => prev - stakeAmount);

//     setPosts(posts.map(p => {
//       if (p.id === targetPost.id) {
//         return { 
//           ...p, 
//           status: modalType === 'challenge' ? 'challenged' : 'trusted',
//           stake: p.stake + netStake 
//         };
//       }
//       return p;
//     }));

//     setShowStakingModal(false);
//     setTargetPost(null);
//   };

//   const getTimeRemaining = (createdAt) => {
//     const deadline = new Date(createdAt.getTime() + 7 * 24 * 60 * 60 * 1000);
//     const now = new Date();
//     const diff = deadline.getTime() - now.getTime();
//     if (diff < 0) return "Voting Closed";
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     return `${days}d ${hours}h left`;
//   };

//   return (
//     <div className="flex min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
//       <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" accept="image/*" />

//       {/* STAKING MODAL */}
//       {showStakingModal && (
//         <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
//           <div className="bg-zinc-900 border border-white/10 p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-black italic uppercase tracking-tighter">
//                 {modalType === 'trust' ? 'Confirm Trust' : 'Initiate Challenge'}
//               </h3>
//               <button onClick={() => setShowStakingModal(false)} className="text-zinc-500 hover:text-white transition-colors">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="bg-black/40 p-6 rounded-3xl border border-white/5 mb-8">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-xs font-black text-zinc-500 uppercase">Stake Amount</span>
//                 <span className="text-emerald-400 font-mono font-black text-xl">{stakeAmount}</span>
//               </div>
//               <input type="range" min="10" max={userBalance} step="10" value={stakeAmount} 
//                 onChange={(e) => setStakeAmount(Number(e.target.value))}
//                 className="w-full accent-emerald-500 h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer" 
//               />
              
//               <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
//                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
//                   <span>Vault Fee (5%)</span>
//                   <span className="text-orange-400">+{(stakeAmount * 0.05).toFixed(1)}</span>
//                 </div>
//                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
//                   <span>Burn (3%)</span>
//                   <span className="text-red-400">🔥 {(stakeAmount * 0.03).toFixed(1)}</span>
//                 </div>
//                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
//                   <span>Team (2%)</span>
//                   <span className="text-zinc-300">{(stakeAmount * 0.02).toFixed(1)}</span>
//                 </div>
//               </div>
//             </div>

//             <button onClick={confirmStake}
//               className={`w-full py-4 rounded-2xl font-black text-lg transition-all active:scale-[0.98] ${
//                 modalType === 'trust' ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'
//               }`}
//             >
//               CONFIRM {modalType.toUpperCase()}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* HEADER */}
//       <header className="fixed top-0 right-0 h-20 flex items-center px-8 z-[100] gap-4">
//         {connected && (
//             <div className="flex flex-col items-end px-5 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl">
//                 <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">User Balance</span>
//                 <span className="text-emerald-400 font-mono font-black text-lg">{userBalance.toLocaleString()} $PROOF</span>
//             </div>
//         )}
//         {!connected ? (
//           <button onClick={connectWallet} className="bg-white text-black px-8 py-3 rounded-full font-black hover:bg-emerald-400 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest">
//             <Wallet size={16} className="inline mr-2"/> Connect Wallet
//           </button>
//         ) : (
//           <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md border border-emerald-500/30 px-5 py-3 rounded-full shadow-emerald-500/10 shadow-lg font-mono text-sm text-emerald-400 font-bold">
//              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//              0x71C7...9cA1
//           </div>
//         )}
//       </header>

//       {/* SIDEBAR */}
//       <aside className="w-72 p-8 border-r border-white/5 hidden md:flex flex-col gap-8 bg-black/40 backdrop-blur-xl sticky h-screen top-0">
//         <div className="flex items-center gap-3 group cursor-pointer pt-2">
//           <img src="/ProofPost_Logo.png" alt="Logo" className="w-11 h-11 rounded-[1.1rem] border border-white/10 shadow-lg group-hover:rotate-6 transition-transform" />
//           <h1 className="text-2xl font-black tracking-tighter italic text-white">PROOF<span className="text-emerald-500 underline underline-offset-4 decoration-2">POST</span></h1>
//         </div>

//         <nav className="space-y-1">
//           <button onClick={() => setActiveTab('feed')} className="w-full text-left">
//             <SideItem icon={<Home size={20}/>} label="News Feed" active={activeTab === 'feed'} />
//           </button>
//           <button onClick={() => setActiveTab('leaderboard')} className="w-full text-left">
//             <SideItem icon={<TrendingUp size={20}/>} label="Top Posters" active={activeTab === 'leaderboard'} />
//           </button>
//           <SideItem icon={<ShieldCheck size={20}/>} label="Active Disputes" />
//           <SideItem icon={<User size={20}/>} label="Identity" />
//         </nav>

//         {/* VAULT & OWNER PROFITS */}
//         <div className="mt-auto space-y-4">
//             <div className="bg-zinc-900/60 border border-white/10 p-5 rounded-[2rem] shadow-2xl relative overflow-hidden group">
//                 <div className="relative z-10">
//                     <div className="flex items-center gap-2 mb-3 text-orange-400 font-mono">
//                         <Coins size={14} />
//                         <p className="text-[10px] font-black uppercase tracking-[0.2em]">Vault Pool</p>
//                     </div>
//                     <p className="text-3xl font-mono font-black text-orange-400 tracking-tighter">
//                         {vaultTotal.toLocaleString(undefined, {minimumFractionDigits: 1})}
//                     </p>
//                 </div>
//             </div>
            
//             <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
//               <span className="text-[9px] font-black uppercase text-zinc-600 tracking-widest">Protocol Revenue (2%)</span>
//               <span className="text-xs font-mono font-bold text-zinc-400">{platformOwnerBalance.toFixed(1)}</span>
//             </div>
//         </div>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 max-w-2xl mx-auto px-6 pt-28 pb-12 overflow-y-auto">
        
//         {activeTab === 'feed' ? (
//           <>
//             {/* CREATE POST BOX */}
//             <div className="bg-zinc-900/40 border border-white/10 p-1 rounded-[2.5rem] mb-12 shadow-2xl backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:border-white/20">
//               {isScanning && (
//                 <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 z-50">
//                     <div className="h-full bg-emerald-500 transition-all duration-100 shadow-[0_0_10px_#10b981]" style={{ width: `${scanProgress}%` }} />
//                 </div>
//               )}

//               <div className="p-6 pb-4">
//                 <textarea value={content} onChange={(e) => setContent(e.target.value)}
//                     placeholder="Share a claim and stake tokens to prove it's real..."
//                     className="w-full bg-transparent text-xl font-medium outline-none placeholder:text-zinc-700 mb-4 resize-none h-24"
//                 />
                
//                 {selectedImage && (
//                     <div className="relative w-full h-52 mb-4 rounded-3xl overflow-hidden border border-white/10">
//                         <img src={selectedImage} className="w-full h-full object-cover" alt="Preview" />
//                         <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 p-1.5 bg-black/60 rounded-full hover:bg-red-500 transition-colors">
//                             <Plus size={20} className="rotate-45" />
//                         </button>
//                     </div>
//                 )}

//                 <div className="flex items-center justify-between mb-6">
//                     <div className="flex gap-2">
//                         <button onClick={handleImageClick} className={`p-3 rounded-2xl border border-white/5 transition-all ${selectedImage ? 'bg-emerald-500 text-black shadow-[0_0_15px_#10b981]' : 'bg-white/5 text-zinc-400 hover:text-white'}`}>
//                             <ImageIcon size={22} />
//                         </button>
//                         <button className="p-3 bg-white/5 text-zinc-400 rounded-2xl border border-white/5"><Video size={22} /></button>
//                     </div>
//                     <div className="px-5 py-2.5 bg-black/60 border border-white/5 rounded-2xl flex items-center gap-5">
//                         <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Confidence Stake</span>
//                         <input type="range" min="10" max="1000" step="10" value={stake} onChange={(e) => setStake(Number(e.target.value))} className="w-24 accent-emerald-500" />
//                         <span className="font-mono font-black text-emerald-400 text-lg">{stake}</span>
//                     </div>
//                 </div>

//                 <button onClick={handlePost} disabled={isScanning || !content}
//                     className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-black py-5 rounded-3xl font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/10"
//                 >
//                     {isScanning ? <><Loader2 className="animate-spin" /> RUNNING AI ANALYSIS ({scanProgress}%)...</> : <><Zap size={20} fill="currentColor"/> BROADCAST PROOFPOST</>}
//                 </button>
//               </div>
//             </div>

//             {/* FEED ITEMS */}
//             <div className="space-y-12">
//               {posts.map(post => (
//                 <div key={post.id} className={`group relative rounded-[3rem] border transition-all duration-700 overflow-hidden ${
//                     post.status === 'slashed' ? 'border-red-500/50 bg-red-500/5' : 
//                     post.status === 'challenged' ? 'border-yellow-500/50 bg-yellow-500/5 shadow-[0_0_40px_rgba(234,179,8,0.05)]' : 
//                     post.status === 'trusted' ? 'border-emerald-500/50 bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.05)]' : 'border-white/5 bg-zinc-900/20'
//                   }`}>
                  
//                   {post.media && (
//                       <div className="w-full h-80 relative overflow-hidden bg-zinc-950">
//                           <img src={post.media} className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${post.status === 'slashed' ? 'grayscale opacity-20 blur-sm' : ''}`} alt="Media" />
//                           <div className="absolute top-6 left-6 flex gap-2">
//                             <div className={`px-4 py-2 rounded-2xl backdrop-blur-md border font-black text-[10px] uppercase flex items-center gap-2 shadow-2xl ${
//                                 post.aiScore > 0.5 ? 'bg-red-500 text-white border-red-400' : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-500'
//                             }`}>
//                                 <Brain size={14}/> {post.aiScore > 0.5 ? `AI DETECTED / FRAUD` : 'VERIFIED CONTENT'}
//                             </div>
//                           </div>
//                       </div>
//                   )}

//                   <div className="p-8">
//                     <div className="flex items-center justify-between mb-8">
//                         <div className="flex items-center gap-3 font-mono">
//                             <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-zinc-600 text-[10px]">0x</div>
//                             <div>
//                                 <p className="text-xs text-zinc-400 font-bold">{post.author}</p>
//                                 <div className="flex items-center gap-2 text-[9px] text-zinc-600 uppercase font-black tracking-widest mt-1">
//                                     <Clock size={10} /> {getTimeRemaining(post.createdAt)}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-2xl border border-white/5">
//                             <Scale size={14} className="text-emerald-500" />
//                             <span className="font-mono font-black text-xs text-zinc-200">{Math.round(post.stake)} <span className="opacity-40 text-[9px] font-sans">STAKED</span></span>
//                         </div>
//                     </div>

//                     <p className={`text-xl font-medium leading-relaxed mb-10 ${post.status === 'slashed' ? 'text-zinc-600 line-through italic opacity-50' : 'text-zinc-100'}`}>
//                         {post.content}
//                     </p>

//                     {post.status === 'slashed' ? (
//                         <div className="bg-red-500/10 border border-red-400/30 p-6 rounded-[2rem] flex items-center justify-between animate-in zoom-in-95 duration-500">
//                             <div className="flex items-center gap-3 text-red-500 uppercase font-black text-[11px] tracking-widest">
//                                 <Flame size={20} className="animate-pulse" /> Slashed: Confiscated to Vault
//                             </div>
//                             <span className="font-mono font-black text-red-400 italic">-{Math.round(post.stake)} $PROOF</span>
//                         </div>
//                     ) : post.status === 'challenged' || post.status === 'trusted' ? (
//                         <div className={`p-6 rounded-[2rem] flex items-center justify-between animate-in slide-in-from-top-4 duration-500 ${
//                           post.status === 'challenged' ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-emerald-500/10 border-emerald-500/20'
//                         }`}>
//                             <div className={`flex items-center gap-3 uppercase font-black text-[11px] tracking-widest ${
//                                post.status === 'challenged' ? 'text-yellow-500' : 'text-emerald-500'
//                             }`}>
//                                 <ShieldCheck size={20} className="animate-pulse" /> 
//                                 {post.status === 'challenged' ? 'Dispute' : 'Trusted'}: {Math.round(post.stake)} LOCKED
//                             </div>
//                             <span className="text-xs font-bold opacity-60">Result in 7d</span>
//                         </div>
//                     ) : (
//                         <div className="flex gap-4">
//                             <button onClick={() => openStakingModal(post, 'trust')} className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"><CheckCircle size={16}/> Trust</button>
//                             <button onClick={() => openStakingModal(post, 'challenge')} className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-red-500/10 hover:text-red-400 transition-all font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"><AlertTriangle size={16}/> Challenge</button>
//                         </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <TopPosters />
//         )}
//       </main>
//     </div>
//   );
// }

// function SideItem({ icon, label, active = false }) {
//     return (
//         <div className={`flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${active ? 'bg-emerald-500/10 text-emerald-400 font-bold' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}>
//             <span className={`${active ? 'text-emerald-400' : ''}`}>{icon}</span>
//             <span className="tracking-tight text-[15px]">{label}</span>
//         </div>
//     );
// }

