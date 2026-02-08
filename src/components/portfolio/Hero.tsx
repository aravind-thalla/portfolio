
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, FileDown, Code2 } from 'lucide-react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div 
        ref={containerRef}
        className="container relative z-10 px-6 mx-auto text-center transition-transform duration-75 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <div className="inline-block mb-4 overflow-hidden">
          <p className="font-headline text-sm uppercase tracking-[0.3em] text-primary animate-reveal">
            Hello, I'm
          </p>
        </div>
        
        <h1 className="font-headline text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="inline-block animate-reveal [animation-delay:200ms]">Thalla</span>{' '}
          <span className="text-gradient inline-block animate-reveal [animation-delay:400ms]">Aravind</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-reveal [animation-delay:600ms]">
          B.Tech Computer Science Engineering Student | Java Developer | DSA Enthusiast. 
          I build efficient, scalable software solutions with strong foundations in computer science and real-world development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-reveal [animation-delay:800ms]">
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 group" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full px-8 group" asChild>
            <a href="https://drive.google.com/file/d/15OXeXZOSV-xcot0XkZeINiPAczaDsrgq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download CV <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/50 hover:bg-primary/5" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center animate-reveal [animation-delay:1000ms]">
          <a href="https://github.com/aravind-thalla" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 group">
            <Github className="h-6 w-6" />
            <span className="text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/thalla-aravind-467b912a4" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 group">
            <Linkedin className="h-6 w-6" />
            <span className="text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>
          <a href="https://leetcode.com/u/aravind1080/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 group">
            <Code2 className="h-6 w-6" />
            <span className="text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">LeetCode</span>
          </a>
          <a href="https://www.geeksforgeeks.org/profile/aravind1080" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 group">
             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.116 2.181a12.116 12.116 0 0 0-12.116 12.116 12.116 12.116 0 0 0 12.116 12.116c2.724 0 5.242-.89 7.272-2.394l-2.015-2.015a9.3 9.3 0 0 1-5.257 1.621 9.3 9.3 0 1 1 0-18.6 9.3 9.3 0 0 1 5.257 1.621l2.015-2.015a12.116 12.116 0 0 0-7.272-2.394zM16.48 8.01l-1.4 1.4 2.59 2.59-2.59 2.59 1.4 1.4 3.99-3.99-3.99-3.99z"/>
             </svg>
            <span className="text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">GFG</span>
          </a>
          <a href="mailto:aravind108028@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 group">
            <Mail className="h-6 w-6" />
            <span className="text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center p-2">
          <div className="w-1 h-2 bg-muted rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
