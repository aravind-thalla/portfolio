"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Database, Code2, Globe, Laptop } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML5 & CSS3", level: 85 },
      { name: "React (Basics)", level: 60 },
      { name: "Tailwind CSS", level: 70 }
    ]
  },
  {
    title: "Core CS Concepts",
    icon: Database,
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
      { name: "OOP Principles", level: 90 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Laptop,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Linux Basics", level: 65 }
    ]
  }
];

export function Skills() {
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress: Record<string, number> = {};
      skillCategories.forEach(cat => {
        cat.skills.forEach(skill => {
          newProgress[skill.name] = skill.level;
        });
      });
      setProgress(newProgress);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="glass-morphism border-primary/10 hover:border-primary/50 transition-all group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-headline font-bold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{progress[skill.name] || 0}%</span>
                      </div>
                      <Progress value={progress[skill.name] || 0} className="h-1.5 bg-primary/10" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="font-headline text-2xl font-bold mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Logical Thinking', 'Consistency', 'Self-learning', 'Time Management', 'Ownership Mindset'].map((skill) => (
              <div 
                key={skill}
                className="px-6 py-3 rounded-2xl glass-morphism border-primary/20 text-primary font-medium hover:bg-primary hover:text-white transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
