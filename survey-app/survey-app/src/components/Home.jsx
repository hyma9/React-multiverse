// import { useNavigate } from 'react-router-dom';
// import { Button } from './ui/button';
// import { Card } from './ui/card';
// import { Sparkles, Heart, Zap, Brain } from 'lucide-react';
// import './Home.css'

// const Home = () => {
//   const navigate = useNavigate();

//   const features = [
//     {
//       id: 'intelligent',
//       icon: <Brain className="w-8 h-8 text-[#8B5CF6]" />,
//       title: "Emotionally Intelligent",
//       description: "Questions that adapt to your inner world"
//     },
//     {
//       id: 'stunning',
//       icon: <Sparkles className="w-8 h-8 text-[#F7C948]" />,
//       title: "Visually Stunning",
//       description: "Every interaction is a work of kinetic art"
//     },
//     {
//       id: 'personal',
//       icon: <Heart className="w-8 h-8 text-[#FF5757]" />,
//       title: "Deeply Personal",
//       description: "Discover your unique emotional signature"
//     }
//   ];

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
//       <div 
//         className="absolute inset-0 bg-gradient-to-br from-[#FF5757]/20 via-[#8B5CF6]/20 to-[#0D7377]/20 opacity-60"
//         style={{
//           backgroundSize: '200% 200%',
//           animation: 'gradient 10s ease infinite'
//         }}
//       />
      
//       <div className="absolute inset-0 backdrop-blur-3xl" />

//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
//         <div className="max-w-5xl w-full space-y-12">
//           <div className="text-center space-y-6 animate-fadeIn">
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <Sparkles className="w-12 h-12 text-[#F7C948] animate-pulse" />
//               <h1 
//                 className="text-7xl font-bold text-white tracking-tight"
//                 style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//               >
//                 Emotion in Motion
//               </h1>
//               <Heart className="w-12 h-12 text-[#FF5757] animate-pulse" />
//             </div>
            
//             <p className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//               Experience personality assessment as an immersive journey through your emotional landscape
//             </p>

//             <Button
//               onClick={() => navigate('/survey')}
//               className="mt-8 px-12 py-8 text-xl font-bold rounded-3xl bg-gradient-to-r from-[#FF5757] via-[#8B5CF6] to-[#0D7377] hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white"
//               style={{
//                 fontFamily: "'Space Grotesk', sans-serif",
//                 boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)'
//               }}
//             >
//               <Zap className="w-6 h-6 mr-3" />
//               Begin Your Journey
//             </Button>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 mt-16">
//             {features.map((feature, index) => (
//               <Card
//                 key={feature.id}
//                 className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
//                 style={{
//                   animation: `slideUp 0.6s ease ${index * 0.2}s both`,
//                   boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.1)'
//                 }}
//               >
//                 <div className="flex flex-col items-center text-center space-y-4">
//                   <div className="p-4 rounded-2xl bg-white/5">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-400">
//                     {feature.description}
//                   </p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, Heart, Zap, Brain } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 'intelligent',
      icon: <Brain className="home-feature-icon brain" />,
      title: "Emotionally Intelligent",
      description: "Questions that adapt to your inner world"
    },
    {
      id: 'stunning',
      icon: <Sparkles className="home-feature-icon sparkles" />,
      title: "Visually Stunning",
      description: "Every interaction is a work of kinetic art"
    },
    {
      id: 'personal',
      icon: <Heart className="home-feature-icon heart" />,
      title: "Deeply Personal",
      description: "Discover your unique emotional signature"
    }
  ];

  return (
    <div className="home-container">
      <div className="home-background-gradient" />
      <div className="home-backdrop" />

      <div className="home-content">
        <div className="home-main">
          <div className="home-hero">
            <div className="home-title-container">
              <Sparkles className="home-icon sparkles" />
              <h1 className="home-title">
                Emotion in Motion
              </h1>
              <Heart className="home-icon heart" />
            </div>
            
            <p className="home-subtitle">
              Experience personality assessment as an immersive journey through your emotional landscape
            </p>

            <Button
              onClick={() => navigate('/survey')}
              className="home-cta-button"
            >
              <Zap className="w-6 h-6" />
              Begin Your Journey
            </Button>
          </div>

          <div className="home-features">
            {features.map((feature) => (
              <Card key={feature.id} className="home-feature-card">
                <div className="home-feature-content">
                  <div className="home-feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3 className="home-feature-title">
                    {feature.title}
                  </h3>
                  <p className="home-feature-description">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;