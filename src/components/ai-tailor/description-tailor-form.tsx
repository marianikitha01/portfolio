'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { generateTailoredDescriptionAction, type AiTailorFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AiTailorFormSchema = z.object({
  projectDescription: z.string().min(20, { message: 'Project description must be at least 20 characters.' }).max(2000, { message: 'Project description must be at most 2000 characters.' }),
  targetAudience: z.string().min(3, { message: 'Target audience must be at least 3 characters.' }).max(100, { message: 'Target audience must be at most 100 characters.' }),
});

type AiTailorFormData = z.infer<typeof AiTailorFormSchema>;

export function DescriptionTailorForm() {
  const [formState, setFormState] = useState<AiTailorFormState>({ message: '', type: null });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AiTailorFormData>({
    resolver: zodResolver(AiTailorFormSchema),
    defaultValues: {
      projectDescription: '',
      targetAudience: '',
    },
  });

  const onSubmit = async (data: AiTailorFormData) => {
    setIsLoading(true);
    setFormState({ message: 'Tailoring description...', type: 'loading' });

    const result = await generateTailoredDescriptionAction({
      projectDescription: data.projectDescription,
      targetAudience: data.targetAudience,
    });
    
    setFormState(result);
    setIsLoading(false);

    if (result.type === 'success') {
      toast({
        title: 'Success!',
        description: result.message,
      });
    } else if (result.type === 'error') {
      toast({
        title: 'Error',
        description: result.message || 'Failed to tailor description.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-3xl mx-auto shadow-xl border">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Wand2 className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">AI Project Description Tailor</CardTitle>
          </div>
          <CardDescription>
            Refine your project descriptions to perfectly match any audience. Enter your original description and specify the target audience, then let AI craft a compelling narrative.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="projectDescription">Original Project Description</Label>
              <Textarea
                id="projectDescription"
                {...form.register('projectDescription')}
                placeholder="Paste your detailed project description here..."
                rows={8}
                className="mt-1"
                disabled={isLoading}
              />
              {form.formState.errors.projectDescription && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.projectDescription.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Input
                id="targetAudience"
                {...form.register('targetAudience')}
                placeholder="e.g., Technical Recruiters, Potential Investors, Non-technical clients"
                className="mt-1"
                disabled={isLoading}
              />
              {form.formState.errors.targetAudience && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.targetAudience.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Tailor Description
            </Button>
          </form>
        </CardContent>
      </Card>

      {formState.type && formState.type !== 'loading' && formState.tailoredDescription && (
        <Card className="w-full max-w-3xl mx-auto shadow-xl border bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Tailored Description</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-background rounded-md border whitespace-pre-wrap text-sm leading-relaxed">
              {formState.tailoredDescription}
            </div>
          </CardContent>
        </Card>
      )}
      
      {formState.type === 'error' && formState.errors?.flowError && (
         <Alert variant="destructive" className="w-full max-w-3xl mx-auto">
            <AlertTitle>AI Error</AlertTitle>
            <AlertDescription>{formState.errors.flowError.join(', ')}</AlertDescription>
          </Alert>
      )}
    </div>
  );
}
