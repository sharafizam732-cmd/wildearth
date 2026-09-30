import React, { useState, useEffect } from 'react';
import {
  Search,
  User as UserIcon,
  Menu,
  X,
  Compass,
  Film,
  LogIn,
  LogOut,
  Sliders,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VideoCategory } from '../types';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const {
    currentRoute,
    currentCategory,
    currentFilter,
    navigateTo,
    openSearch,
    openAuth,
    currentUser,
    logout,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: {
    label: string;
    route: string;
    category?: VideoCategory;
    filter?: string;
  }[] = [
    { label: 'Who We Are', route: 'about' },
    { label: 'Short Films', route: 'videos', filter: 'short-films' },
    { label: 'Feature Films', route: 'videos', filter: 'feature-films' },
    { label: 'Documentaries', route: 'videos', filter: 'documentaries' },
    { label: 'Trailers', route: 'videos', filter: 'trailers' },
    { label: 'Ai', route: 'category', category: 'ai-wildlife' },
    { label: 'Get Involved', route: 'get-involved' },
  ];

  const isLinkActive = (item: (typeof navLinks)[0]) => {
    if (item.label === 'Who We Are') {
      return currentRoute === 'about';
    }
    if (item.label === 'Short Films') {
      return currentRoute === 'videos' && currentFilter === 'short-films';
    }
    if (item.label === 'Feature Films') {
      return currentRoute === 'videos' && currentFilter === 'feature-films';
    }
    if (item.label === 'Documentaries') {
      return (
        currentRoute === 'videos' &&
        (currentFilter === 'documentaries' || currentFilter === 'all' || !currentFilter)
      );
    }
    if (item.label === 'Trailers') {
      return currentRoute === 'videos' && currentFilter === 'trailers';
    }
    if (item.label === 'Ai') {
      return (
        (currentRoute === 'category' && currentCategory === 'ai-wildlife') ||
        (currentRoute === 'videos' && currentFilter === 'ai-wildlife')
      );
    }
    if (item.label === 'Get Involved') {
      return currentRoute === 'get-involved' || currentRoute === 'contact';
    }
    return false;
  };

  const handleNavClick = (item: (typeof navLinks)[0]) => {
    if (item.category) {
      navigateTo('category', { category: item.category });
    } else if (item.filter) {
      navigateTo('videos', { filter: item.filter });
    } else {
      navigateTo(item.route);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070d0a]/95 backdrop-blur-md shadow-2xl border-b border-[#1f3b2c]/60'
          : 'bg-gradient-to-b from-[#070d0a]/90 via-[#070d0a]/60 to-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center text-left group transition-transform focus:outline-none"
              aria-label="Wildlife Conservation Channel Home"
            >
              <BrandLogo size="md" variant="light" />
            </button>
          </div>

          {/* Desktop Navigation (Left-to-Right: Who We Are, Short Films, Feature Films, Documentaries, Trailers, Ai, Get Involved) */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-[#10b981] relative py-1 whitespace-nowrap ${
                    isActive ? 'text-[#10b981]' : 'text-neutral-300'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10b981] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              aria-label="Search documentaries"
              className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Account / Auth */}
            {currentUser ? (
              <div className="flex items-center gap-2">
                {currentUser.role === 'admin' && (
                  <button
                    onClick={() => navigateTo('admin')}
                    className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 hover:bg-amber-500/25 text-xs font-semibold transition-all shadow-sm"
                    title="Open Administrator Video CPT Manager"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Admin Panel</span>
                  </button>
                )}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-neutral-200 transition-colors"
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      currentUser.role === 'admin' ? 'bg-amber-600 text-black' : 'bg-emerald-800 text-emerald-200'
                    }`}>
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden md:inline font-medium text-xs max-w-[100px] truncate">
                      {currentUser.name}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#0f1c16] border border-[#2d5a47] shadow-2xl py-2 z-50">
                      <div className="px-4 py-2 border-b border-white/10">
                        <p className="text-xs text-neutral-400">Signed in as</p>
                        <p className="text-sm font-semibold text-white truncate">{currentUser.email}</p>
                        {currentUser.role === 'admin' && (
                          <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase font-mono">
                            Administrator
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          navigateTo('account');
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 hover:text-emerald-300 flex items-center gap-2"
                      >
                        <Film className="w-4 h-4 text-emerald-400" />
                        My Streaming Library
                      </button>
                      {currentUser.role === 'admin' && (
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            navigateTo('admin');
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-amber-300 hover:bg-white/10 flex items-center gap-2 font-semibold"
                        >
                          <ShieldCheck className="w-4 h-4 text-amber-400" />
                          Admin Video CPT Manager
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logout();
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-300 hover:bg-red-500/10 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4 text-red-400" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={() => openAuth('login')}
                className="px-4 py-2 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-white text-xs font-semibold transition-all shadow-sm flex items-center gap-1.5"
                title="Administrator Portal Login"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Admin Portal</span>
              </button>
            )}

            {/* Prominent CTA */}
            <button
              onClick={() => navigateTo('videos')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#34d399] hover:to-[#10b981] text-[#070d0a] font-bold text-xs tracking-wider uppercase shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all transform active:scale-95 whitespace-nowrap"
            >
              Explore Videos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openSearch}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d0a] border-b border-[#2d5a47] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item);
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    handleNavClick(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#10b981] bg-emerald-950/40 font-semibold'
                      : 'text-neutral-200 hover:text-emerald-400 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            {currentUser ? (
              <>
                {currentUser.role === 'admin' && (
                  <button
                    onClick={() => {
                      navigateTo('admin');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-sm text-amber-300 bg-amber-950/40 border border-amber-600/40 rounded-xl flex items-center justify-between"
                  >
                    <span className="font-semibold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      Admin Video CPT Manager
                    </span>
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-400 text-black">
                      Admin
                    </span>
                  </button>
                )}
                <button
                  onClick={() => {
                    navigateTo('account');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-neutral-200 bg-white/5 rounded-lg flex items-center justify-between"
                >
                  <span>My Library ({currentUser.name})</span>
                  <Film className="w-4 h-4 text-emerald-400" />
                </button>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-950/30 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  openAuth('login');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-xs font-semibold text-center flex items-center justify-center gap-2 border border-amber-500/30 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Admin Portal Login</span>
              </button>
            )}
            <button
              onClick={() => {
                navigateTo('videos');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] text-[#070d0a] font-bold text-sm uppercase tracking-wider text-center shadow-lg"
            >
              Explore Videos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
