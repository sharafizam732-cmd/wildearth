import React, { useState } from 'react';
import {
  ShieldAlert,
  TreePine,
  Film,
  Heart,
  Send,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  Radio,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GetInvolvedPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [pledgeType, setPledgeType] = useState('ranger');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-12 bg-[#070d0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Conservation In Action</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-['Montserrat'] leading-tight">
            Stand With Us. Protect What Remains.
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            Every documentary we produce feeds directly into on-the-ground ecological interventions. Discover how you can sponsor frontline rangers, deploy bio-acoustic listening posts, or submit independent wildlife footage.
          </p>
        </div>

        {/* 4 Pillars of Involvement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0b1510] border border-[#2d5a47]/50 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Montserrat']">
                Ranger Sponsorship
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Equip anti-poaching patrols across the Mara and Congo Basin with night-vision optics, medical kits, and secure GPS field units.
              </p>
            </div>
            <button
              onClick={() => {
                setPledgeType('ranger');
                document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Sponsor a Patrol Unit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#0b1510] border border-[#2d5a47]/50 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Montserrat']">
                AI Acoustic Nodes
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Fund solar-powered canopy listening arrays that detect illegal chainsaws and gunshots in real-time, instantly notifying park rangers.
              </p>
            </div>
            <button
              onClick={() => {
                setPledgeType('acoustic');
                document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Deploy a Canopy Node</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#0b1510] border border-[#2d5a47]/50 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Montserrat']">
                Filmmaker Grants
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Submit raw wildlife cinematography or pitch documentary projects. We co-produce, distribute, and fund local indigenous documentarians.
              </p>
            </div>
            <button
              onClick={() => {
                setPledgeType('filmmaker');
                document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Submit Film Pitch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#0b1510] border border-[#2d5a47]/50 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xl group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Montserrat']">
                Habitat Corridors
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Join our land rewilding initiative purchasing biodiversity easements between fragmented national parks to restore elephant migrations.
              </p>
            </div>
            <button
              onClick={() => {
                setPledgeType('habitat');
                document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Rewilding Action</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Action / Contact Form */}
        <div id="action-form" className="bg-[#0b1510] border border-[#2d5a47]/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>Join The Coalition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Montserrat'] leading-tight">
                Direct Conservation Dispatch
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Whether you represent an institutional conservation foundation, an independent wildlife filmmaker, or an individual viewer wanting to fund wildlife operations, let us know how you would like to participate.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>100% of individual donations go directly to vetted field units</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Audited quarterly conservation impact reports provided to supporters</span>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Montserrat']">
                    Thank You for Stepping Forward!
                  </h3>
                  <p className="text-sm text-neutral-300">
                    Your dispatch has been received by our field partnership team. We will contact you within 24 business hours with detailed project briefings.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2 rounded-xl bg-emerald-500 text-neutral-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Select Initiative
                    </label>
                    <select
                      value={pledgeType}
                      onChange={(e) => setPledgeType(e.target.value)}
                      className="w-full bg-[#070d0a] border border-[#2d5a47] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="ranger">Sponsor Frontline Anti-Poaching Patrols</option>
                      <option value="acoustic">Deploy Solar Canopy Bio-Acoustic Node</option>
                      <option value="filmmaker">Submit Wildlife Footage or Co-Production Pitch</option>
                      <option value="habitat">Support Elephant Migration Corridor Rewilding</option>
                      <option value="general">Institutional Partnership & General Inquiries</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. Maya Harrison"
                        className="w-full bg-[#070d0a] border border-[#2d5a47] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maya@wildlife-trust.org"
                        className="w-full bg-[#070d0a] border border-[#2d5a47] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message / Proposal Details
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your background, proposed region, or how you would like to collaborate..."
                      className="w-full bg-[#070d0a] border border-[#2d5a47] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-neutral-950 font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Conservation Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
