import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Education } from '@/components/portfolio/Education';
import { Journey } from '@/components/portfolio/Journey';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Achievements } from '@/components/portfolio/Achievements';
import { AICodeCoach } from '@/components/portfolio/AICodeCoach';
import { Contact } from '@/components/portfolio/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about" className="h-1 shadow-inner bg-background" />
      <Education />
      <Journey />
      <Skills />
      <Projects />
      <Achievements />
      <AICodeCoach />
      <Contact />
      
      <footer className="py-12 border-t bg-background">
        <div className="container px-6 mx-auto text-center">
          <p className="font-headline font-bold text-xl mb-4 tracking-tighter">
            ARVIND<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Thalla Aravind. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://linkedin.com/in/thalla-aravind" className="text-xs text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/aravind-thalla" className="text-xs text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:aravind108028@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
