"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function Education() {
  const [cgpa, setCgpa] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let current = 0;
          const target = 8.53;
          const step = target / 50;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCgpa(target);
              clearInterval(timer);
            } else {
              setCgpa(current);
            }
          }, 30);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="education" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <Card className="glass-morphism border-primary/20 overflow-hidden group hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-headline font-bold mb-2">Bachelor of Technology</h3>
                    <p className="text-primary font-semibold text-lg">Computer Science Engineering</p>
                  </div>
                  <div className="text-left md:text-right mt-4 md:mt-0">
                    <p className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" /> Expected Graduation: May 2027
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" /> Warangal, Telangana, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">SR University</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Building a strong foundation in programming, object-oriented design, and data structures. 
                      Focused on hands-on learning and competitive programming to solve complex computational problems.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {['Java Programming', 'DSA', 'OOP Design', 'Web Fundamentals'].map((skill) => (
                    <div key={skill} className="bg-background/50 py-2 px-4 rounded-full text-center text-sm border border-border/50">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-primary/5 rounded-3xl border border-primary/20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Academic Excellence</p>
            <div className="text-7xl font-headline font-black text-primary mb-2">
              {cgpa.toFixed(2)}
            </div>
            <p className="text-xl font-medium">Current CGPA</p>
            <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-6 overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-1000 ease-out" 
                style={{ width: `${(cgpa/10) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
