"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
            <p className="text-xl text-muted-foreground mb-12 max-w-lg">
              Open to Software Engineering Opportunities. I'm currently looking for internships or junior developer roles.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email me at</p>
                  <p className="font-headline font-bold text-lg">aravind108028@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Phone className="h-6 w-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call me</p>
                  <p className="font-headline font-bold text-lg">+91 8688815998</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-headline font-bold text-lg">Warangal, Telangana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-8 rounded-3xl border-primary/20 relative">
            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-3xl z-10 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="h-20 w-20 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold font-headline mb-2">Message Received!</h3>
                <p className="text-muted-foreground text-center px-8">
                  Your message has been successfully delivered. I will respond to you shortly.
                </p>
                <Button variant="link" onClick={() => setIsSuccess(false)} className="mt-6">Send another message</Button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="bg-background/50 border-white/10 h-12 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50 border-white/10 h-12 focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Opportunity" required className="bg-background/50 border-white/10 h-12 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Hi Arvind, I'd like to talk about..." required className="bg-background/50 border-white/10 min-h-[150px] focus:ring-primary" />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
