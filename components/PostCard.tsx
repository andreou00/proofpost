// export const PostCard = ({ post, onChallenge }) => {
//   const timeRemaining = getTimeRemaining(post.createdAt);

//   return (
//     <div className={`rounded-[3rem] border p-8 ${post.status === 'slashed' ? 'border-red-500/50' : 'border-white/5'}`}>
//       {/* Media & Content logic here */}
//       <div className="flex gap-4">
//         <button onClick={() => onChallenge(post.id, post.stake)}>Challenge</button>
//       </div>
//     </div>
//   );
// };