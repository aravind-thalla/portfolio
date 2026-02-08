"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: "Library Management System",
    description: "A Java-based system designed using object-oriented principles to manage books, users, and transactions efficiently with a modular architecture.",
    tech: ["Java", "OOP", "CLI"],
    github: "https://github.com/aravind-thalla/library-management-java.git",
    type: "Featured"
  },
  {
    title: "Student Result Management",
    description: "Robust academic record system for handling student performance data and result generation with structured SQL database integration.",
    tech: ["Java", "SQL", "Swing"],
    github: "https://github.com/aravind-thalla",
    type: "Backend Focus"
  },
  {
    title: "Portfolio Website",
    description: "Personal responsive portfolio showcasing development journey, projects, and skills with focus on high-performance animations and premium UI.",
    tech: ["Next.js", "Tailwind", "GenAI"],
    github: "https://github.com/aravind-thalla",
    type: "Frontend"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-4">Featured Work</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="max-w-md text-muted-foreground">
            A selection of projects that demonstrate my technical capability and passion for solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="glass-morphism border-primary/10 hover:border-primary/50 group overflow-hidden flex flex-col h-full">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm z-10">
                   <div className="flex gap-4">
                      <Button size="sm" variant="default" className="rounded-full" asChild>
                        <a href={project.github} target="_blank"><Github className="h-4 w-4 mr-2" /> Code</a>
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        Details <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                   </div>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-primary/10 group-hover:text-primary/30 transition-colors" />
                </div>
              </div>

              <CardContent className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-muted rounded-md text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
