"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Globe, Zap, Cpu } from 'lucide-react';

const web3Features = [
  {
    icon: ShieldCheck,
    title: "Smart Contracts",
    description: "Developing secure and audited contracts using Solidity for decentralized applications."
  },
  {
    icon: Globe,
    title: "DApp Development",
    description: "Building responsive interfaces that interact seamlessly with the Ethereum blockchain."
  },
  {
    icon: Zap,
    title: "Web3 API Integration",
    description: "Integrating powerful blockchain APIs to fetch real-time on-chain data and transactions."
  }
];

export function Web3Showcase() {
  return (
    <section id="web3" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-4 flex items-center gap-3">
              <Cpu className="text-secondary h-8 w-8" />
              Web3 & Blockchain
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full" />
          </div>
          <p className="max-w-md text-muted-foreground">
            Exploring the future of the decentralized web with a focus on DApp development and smart contract interactions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {web3Features.map((feature, idx) => (
            <Card key={idx} className="glass-morphism border-secondary/10 hover:border-secondary/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
