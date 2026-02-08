"use client";

import React, { useState } from 'react';
import { suggestCodeImprovements } from '@/ai/flows/suggest-code-improvements';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Loader2, Code2, AlertCircle } from 'lucide-react';

export function AICodeCoach() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleReview = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const { improvements } = await suggestCodeImprovements({
        code,
        description: "Individual project code snippet for review.",
      });
      setResult(improvements);
    } catch (error) {
      console.error(error);
      setResult("Error analyzing code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="text-primary h-8 w-8" />
              AI Code Reviewer
            </h2>
            <p className="text-muted-foreground">
              Paste a snippet of your Java or Web code below, and my built-in AI assistant will suggest professional improvements.
            </p>
          </div>

          <Card className="glass-morphism border-primary/20 overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Source Code Review
              </CardTitle>
              <CardDescription>
                Powered by Google Gemini to help you build cleaner software.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Textarea 
                placeholder="public class Example { ... }"
                className="font-mono min-h-[200px] mb-6 bg-background/50 border-white/10"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button 
                onClick={handleReview} 
                disabled={loading || !code}
                className="w-full bg-primary hover:bg-primary/90 h-12"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Patterns...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Review My Code
                  </>
                )}
              </Button>

              {result && (
                <div className="mt-8 p-6 bg-background/50 rounded-xl border border-primary/20 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h4 className="font-bold flex items-center gap-2 mb-4">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    Suggested Improvements
                  </h4>
                  <div className="prose prose-invert max-w-none text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {result}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
