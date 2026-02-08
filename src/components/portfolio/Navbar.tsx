
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, FileDown } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Web3', href: '#web3' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-lg" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-headline text-2xl font-bold tracking-tighter">
          ARVIND<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l pl-8 ml-4">
            <a
              href="/myresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-500",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-headline font-bold hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/myresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-headline font-bold text-secondary flex items-center gap-3"
        >
          <FileDown className="h-6 w-6" /> Resume
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-xl font-bold mt-4"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
