"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Coins, ShieldCheck, Zap, Globe, Cpu, Link as LinkIcon } from 'lucide-react';

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
  // Using the provided API reference ID for configuration
  const API_ID = "120515e3-a04d-408b-b373-c0ccaa2d2dfe";

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
            Exploring the future of the decentralized web with a focus on API integrations and smart contract interactions.
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

        <div className="mt-12">
          <Card className="bg-secondary/5 border-secondary/20 border-dashed">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <LinkIcon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Active Web3 API Instance</h4>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
                    ID: {API_ID}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  API Active
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                  Mainnet Connected
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
