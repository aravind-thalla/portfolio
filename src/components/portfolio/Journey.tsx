"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Code2, Braces, Terminal, GitBranch, Layout, GraduationCap } from 'lucide-react';

const events = [
  {
    icon: Code2,
    title: "The Beginning",
    description: "Developed an early interest in programming and problem solving during early college years.",
    date: "2023"
  },
  {
    icon: Terminal,
    title: "Mastering Java",
    description: "Deep-dived into Java programming, mastering core OOP principles and robust software design.",
    date: "2023 - 2024"
  },
  {
    icon: Braces,
    title: "DSA Consistent Practice",
    description: "Consistent problem solving on LeetCode, strengthening algorithmic thinking and data structure application.",
    date: "Ongoing"
  },
  {
    icon: Layout,
    title: "Web Technologies",
    description: "Expanded horizons by learning HTML, CSS, JavaScript, and modern web fundamentals.",
    date: "2024"
  },
  {
    icon: GitBranch,
    title: "Collaboration & Version Control",
    description: "Adopted Git & GitHub for professional project management and collaborative development.",
    date: "2024"
  },
  {
    icon: GraduationCap,
    title: "Preparing for Future",
    description: "Preparing for professional software engineering roles with real-world projects and advanced problem solving.",
    date: "Present"
  }
];

export function Journey() {
  return (
    <section id="journey" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My evolution from a curious student to a focused developer, marked by consistent learning and practical building.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/20 rounded-full" />

          <div className="space-y-24">
            {events.map((event, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center justify-between group",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className={cn(
                  "w-full md:w-[45%] p-8 rounded-2xl glass-morphism border-primary/10 transition-all group-hover:border-primary/40 group-hover:scale-[1.02]",
                  index % 2 === 0 ? "text-right" : "text-left"
                )}>
                  <span className="text-primary font-headline font-bold mb-2 block">{event.date}</span>
                  <h3 className="text-2xl font-headline font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="p-4 bg-background border-4 border-primary rounded-full shadow-[0_0_20px_rgba(103,58,183,0.3)] transition-all group-hover:scale-110">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
