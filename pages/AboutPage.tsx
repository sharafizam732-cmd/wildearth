import React from 'react';
import { Compass, ShieldCheck, Heart, Award, Users, Trees, Film, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import forestNatureImage from '../assets/images/nature_category_forest_1790306772375.jpg';
import aiTechImage from '../assets/images/ai_wildlife_technology_1790306783625.jpg';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-screen py-12 bg-[#070d0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-['Montserrat'] leading-tight">
            Documenting Earth. Empowering Protectors.
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            Wildlife Conservation Channel bridges groundbreaking natural history cinematography, bio-acoustic artificial intelligence, and direct conservation funding.
          </p>
        </div>

        {/* Visual Story Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
            <img
              src={forestNatureImage}
              alt="Primeval Forest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d0a] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-neutral-300">
              <span className="font-bold text-white block mb-0.5 font-['Montserrat']">Zero-Interference Filming Ethics</span>
              All footage captured with long-range telephoto arrays, quiet bio-drones, and remote camera sensors without disturbing nesting territories.
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat']">
                A Streaming Platform Built for the Planet
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Conventional nature programming often sensationalizes drama while ignoring the frontline rangers risking their lives to protect dwindling habitats.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                At Wildlife Conservation Channel, we produce independent 4K documentaries where 100% of individual film purchase royalties go straight toward purchasing anti-poaching gear, solar bio-acoustic sensors, and indigenous community land trusts.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0b1510] border border-[#2d5a47]/50">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Direct Impact</h4>
                <p className="text-xs text-neutral-400 mt-1">Over $42,000 distributed to ranger units in 2026.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0b1510] border border-[#2d5a47]/50">
                <Globe className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Global Reach</h4>
                <p className="text-xs text-neutral-400 mt-1">Expeditions active across 14 countries on 4 continents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="py-12 border-t border-b border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat']">
              Our Core Principles
            </h2>
            <p className="text-xs text-neutral-400 mt-2">
              How we balance high-end visual art with uncompromising biological accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#0b1510] border border-[#2d5a47]/50 space-y-3">
              <Film className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white font-['Montserrat']">1. True Cinematography</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Shot exclusively in native 4K UHD with high dynamic range, natural ambiences, and unscripted wildlife encounters.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0b1510] border border-[#2d5a47]/50 space-y-3">
              <Award className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white font-['Montserrat']">2. Peer-Reviewed Science</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every documentary is co-produced with wildlife biologists and field taxonomists to guarantee scientific veracity.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0b1510] border border-[#2d5a47]/50 space-y-3">
              <Heart className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white font-['Montserrat']">3. Paywall Transparency</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                When you buy an individual documentary on WooCommerce, a real-time ledger records your direct contribution to frontline gear.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white font-['Montserrat']">
            Ready to explore our stories?
          </h3>
          <p className="text-xs text-neutral-400">
            Start streaming our free wildlife library or unlock our featured 4K masterclasses today.
          </p>
          <button
            onClick={() => navigateTo('videos')}
            className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#070d0a] font-bold text-xs uppercase tracking-wider shadow-lg"
          >
            Explore Video Archive
          </button>
        </div>
      </div>
    </div>
  );
};
