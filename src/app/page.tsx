"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/data/config";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "products" | "about" | "services" | "gallery" | "contact">("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("Board Products & Stands");
  const [quoteQty, setQuoteQty] = useState("1");
  const [quoteSize, setQuoteSize] = useState("");
  const [quoteName, setQuoteName] = useState("");
  const [quoteCity, setQuoteCity] = useState("");
  const [quoteOrg, setQuoteOrg] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(1);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("navashakti_visits");
      const current = stored ? parseInt(stored, 10) + 1 : 1;
      localStorage.setItem("navashakti_visits", current.toString());
      setVisitCount(current);
    } catch (e) {}
  }, []);

  const openQuote = (prodName?: string) => {
    if (prodName) setQuoteProduct(prodName);
    setIsQuoteModalOpen(true);
  };

  const handleSendWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Navashakti Marketing,\n\nI would like to request an official quotation:\n`;
    text += `• Product: ${quoteProduct}${quoteOrg ? ` (${quoteOrg})` : ""}\n`;
    text += `• Quantity: ${quoteQty} Units\n`;
    text += `• Size/Specs: ${quoteSize || "Standard Dimensions"}\n`;
    if (quoteName) text += `• My Name: ${quoteName}\n`;
    if (quoteCity) text += `• Delivery City: ${quoteCity}\n`;
    text += `\nPlease share official pricing, GST invoice details, and dispatch timeline.`;

    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsQuoteModalOpen(false);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Credentials Bar */}
      <div className="bg-[#10162f] text-white text-xs py-2 px-4 border-b border-[#1d2545]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wide">
              GST REGISTERED
            </span>
            <span className="font-mono text-emerald-300 font-bold tracking-wider">
              GSTIN: {BUSINESS_CONFIG.gstin}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="text-slate-300 hidden md:inline">Belagavi - 590001, Karnataka</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-300 hover:text-emerald-300 transition-colors">
              <i className="fa-solid fa-envelope text-emerald-400 mr-1.5"></i>
              {BUSINESS_CONFIG.email}
            </a>
            <span className="text-slate-600">|</span>
            <a href={`tel:${BUSINESS_CONFIG.phoneDisplay.replace(/\s/g, '')}`} className="text-emerald-300 hover:text-white font-bold transition-colors">
              <i className="fa-solid fa-phone mr-1.5"></i>
              {BUSINESS_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => setActiveTab("home")} className="flex items-center gap-3.5 text-left group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-[#10162f] flex items-center justify-center text-white shadow-md border border-emerald-400/30">
                <svg className="w-7 h-7 text-emerald-200" viewBox="0 0 32 32" fill="none">
                  <path d="M7 6V26M7 6L25 26M25 6V26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="16" r="3" fill="#ffd43b"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                  NAVASHAKTI<span className="text-emerald-600 ml-1">MARKETING</span>
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-800 mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm text-slate-700">
              {(["home", "products", "about", "services", "gallery", "contact"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`px-4 py-2 rounded-xl transition-colors capitalize ${
                    activeTab === tab
                      ? "text-emerald-800 font-bold bg-emerald-50"
                      : "hover:text-emerald-800 hover:bg-slate-100"
                  }`}
                >
                  {tab === "products" ? "Products & Stands" : tab === "contact" ? "Contact & Address" : tab}
                </button>
              ))}
            </nav>

            {/* WhatsApp Quote CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => openQuote()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Get Official Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={() => openQuote()} className="p-2.5 rounded-xl bg-emerald-600 text-white">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2.5 rounded-lg border border-slate-200 text-slate-700">
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {(["home", "products", "about", "services", "gallery", "contact"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`block w-full text-left px-4 py-3 rounded-lg capitalize ${
                  activeTab === tab ? "font-bold text-emerald-900 bg-emerald-50" : "font-semibold text-slate-700"
                }`}
              >
                {tab === "products" ? "Products & Stands" : tab === "contact" ? "Contact & Address" : tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Dynamic Views */}
      <main className="flex-grow">
        {activeTab === "home" && (
          <div>
            {/* Hero */}
            <div className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold">
                      <i className="fa-solid fa-sparkles text-amber-500"></i>
                      <span>Inspire Better Learning</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                      Precision Writing Boards &amp; Display Solutions.<br />
                      <span className="text-emerald-600">Direct from Belagavi</span>.
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      Navashakti Marketing is your trusted GST-registered provider for Green Chalkboards, Magnetic Surfaces, Dry-Erase Whiteboards, Bulletin Notice Boards, Next-Gen 4K Smart Panels, and Heavy-Duty Mobile Board Stands.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <button
                        onClick={() => openQuote()}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg transition-all"
                      >
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        <span>Get Official Quote on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => { setActiveTab("products"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-slate-300 hover:border-slate-800 bg-white text-slate-900 font-bold text-base transition-all"
                      >
                        <span>Browse All 6 Products &amp; Stands</span>
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                      <img src="/images/hero-boardroom.jpg" alt="Navashakti Marketing Visual Installations" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Preview Grid */}
            <div className="py-16 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-emerald-800 font-bold uppercase tracking-wider text-xs">Product Catalog</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Board Products, Smart Displays &amp; Stands</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PRODUCTS.map((prod) => (
                    <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                      <div className="relative aspect-[4/3] bg-slate-100">
                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm">
                          {prod.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{prod.name}</h3>
                          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">{prod.shortDesc}</p>
                        </div>
                        <div className="pt-2 flex items-center gap-2">
                          <button
                            onClick={() => setSelectedProduct(prod)}
                            className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-800 text-xs font-bold transition-colors"
                          >
                            View Specs
                          </button>
                          <button
                            onClick={() => openQuote(prod.name)}
                            className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                          >
                            <i className="fa-brands fa-whatsapp text-sm"></i>
                            <span>Get Quote</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-emerald-800 font-bold uppercase tracking-wider text-xs">Catalog</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Writing Boards, Displays &amp; Mobile Stands</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{prod.name}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2">{prod.shortDesc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <button onClick={() => setSelectedProduct(prod)} className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold">
                        View Specs
                      </button>
                      <button onClick={() => openQuote(prod.name)} className="py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5">
                        <i className="fa-brands fa-whatsapp text-sm"></i>
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">About Navashakti Marketing</h1>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Operating from Belagavi, Karnataka, Navashakti Marketing manufactures and distributes institutional classroom boards, magnetic green boards, dry-erase whiteboards, display notice boards, next-generation 4K smart interactive flat panels, and heavy-duty board stands.
              </p>
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
                <div><strong>GSTIN:</strong> 29BJLPM4916QZA</div>
                <div><strong>Phone / WhatsApp:</strong> +91 93803 70518</div>
                <div><strong>Email:</strong> navshaktimarketing@gmail.com</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Contact &amp; Address</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Registered Office</h2>
                <p className="text-slate-700 leading-relaxed">
                  <strong>NAVASHAKTI MARKETING</strong><br />
                  Plot No. 682, Sy No. 13, Jadhav Nagar,<br />
                  Belagavi - 590001, Karnataka, India
                </p>
                <div className="pt-2 text-sm text-slate-600">
                  <p><strong>WhatsApp / Call:</strong> +91 93803 70518</p>
                  <p><strong>Email:</strong> navshaktimarketing@gmail.com</p>
                  <p><strong>GST Number:</strong> 29BJLPM4916QZA</p>
                </div>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 space-y-4">
                <h2 className="text-xl font-bold text-emerald-950">Immediate Quotation on WhatsApp</h2>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Need custom dimensions, wall-to-wall fittings, or bulk school procurement? Connect directly with our sales desk on WhatsApp.
                </p>
                <button onClick={() => openQuote()} className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  <span>Chat on WhatsApp (+91 93803 70518)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <button onClick={() => setIsQuoteModalOpen(false)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="text-2xl font-extrabold text-slate-900">Get Official Quote</h3>
            <form onSubmit={handleSendWhatsAppQuote} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Select Product</label>
                <select value={quoteProduct} onChange={(e) => setQuoteProduct(e.target.value)} className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300">
                  {PRODUCTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Quantity</label>
                  <input type="number" min="1" value={quoteQty} onChange={(e) => setQuoteQty(e.target.value)} className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Size Needed</label>
                  <input type="text" placeholder="e.g. 4x8 ft" value={quoteSize} onChange={(e) => setQuoteSize(e.target.value)} className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name</label>
                  <input type="text" required placeholder="Name" value={quoteName} onChange={(e) => setQuoteName(e.target.value)} className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Delivery City</label>
                  <input type="text" required placeholder="City" value={quoteCity} onChange={(e) => setQuoteCity(e.target.value)} className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Send Quote Request on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#10162f] text-white py-12 border-t border-[#1d2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">NAVASHAKTI MARKETING</h3>
            <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mt-0.5">{BUSINESS_CONFIG.tagline}</p>
            <p className="text-slate-400 text-xs mt-2">GSTIN: {BUSINESS_CONFIG.gstin} &middot; Belagavi - 590001, Karnataka</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>&copy; 2026 Navashakti Marketing. All rights reserved.</span>
            <button onClick={() => setIsOwnerModalOpen(true)} className="text-[10px] text-slate-600 hover:text-emerald-400 flex items-center gap-1">
              <i className="fa-solid fa-lock text-[8px]"></i>
              <span>Owner Telemetry ({visitCount})</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
