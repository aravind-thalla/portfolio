"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Code2, TrendingUp, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: "200+",
    label: "LeetCode Problems",
    description: "Consistent problem solving discipline on LeetCode platform.",
    link: "https://leetcode.com/u/aravind1080/"
  },
  {
    icon: BookOpen,
    value: "Active",
    label: "GeeksforGeeks",
    description: "In-depth learning and solving complex DSA challenges on GFG.",
    link: "https://www.geeksforgeeks.org/profile/aravind1080"
  },
  {
    icon: TrendingUp,
    value: "8.07",
    label: "CGPA Score",
    description: "Maintaining academic excellence across CS fundamentals.",
    link: "#"
  }
];

export function Achievements() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Milestones & Recognition</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="glass-morphism border-primary/10 group hover:border-primary/50 transition-all text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-5xl font-headline font-black mb-2">{stat.value}</h3>
                <p className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">{stat.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {stat.description}
                </p>
                <a 
                  href={stat.link} 
                  target={stat.link !== "#" ? "_blank" : "_self"}
                  rel={stat.link !== "#" ? "noopener noreferrer" : ""}
                  className="inline-flex items-center text-primary text-sm font-bold hover:gap-2 transition-all"
                >
                  View Profile <TrendingUp className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
