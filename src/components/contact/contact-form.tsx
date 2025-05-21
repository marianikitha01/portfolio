
'use client';

import { useActionState } from 'react'; // useActionState from 'react'
import { useFormStatus } from 'react-dom'; // useFormStatus from 'react-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const initialFormState: ContactFormState = { message: '', type: null };
  const [formState, formAction] = useActionState(submitContactForm, initialFormState);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    if (formState.type === 'success') {
      toast({
        title: 'Message Sent!',
        description: formState.message,
        variant: 'default', // Shadcn uses 'default' for success-like, not 'success'
      });
      form.reset(); // Reset form fields on success
    } else if (formState.type === 'error' && formState.message && !formState.errors) { // General error
       toast({
        title: 'Error',
        description: formState.message,
        variant: 'destructive',
      });
    }
  }, [formState, toast, form]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Have a question, a project idea, or just want to connect? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6" onSubmit={form.handleSubmit(() => formAction(new FormData(form.control._formRef.current)))}>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...form.register('name')} placeholder="John Doe" className="mt-1"/>
            {(formState.errors?.name || form.formState.errors.name) && (
              <p className="text-sm text-destructive mt-1">
                {formState.errors?.name?.[0] || form.formState.errors.name?.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...form.register('email')} placeholder="you@example.com" className="mt-1"/>
             {(formState.errors?.email || form.formState.errors.email) && (
              <p className="text-sm text-destructive mt-1">
                {formState.errors?.email?.[0] || form.formState.errors.email?.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" {...form.register('subject')} placeholder="Project Inquiry" className="mt-1"/>
            {(formState.errors?.subject || form.formState.errors.subject) && (
              <p className="text-sm text-destructive mt-1">
                {formState.errors?.subject?.[0] || form.formState.errors.subject?.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...form.register('message')}
              placeholder="Your detailed message..."
              rows={5}
              className="mt-1"
            />
            {(formState.errors?.message || form.formState.errors.message) && (
              <p className="text-sm text-destructive mt-1">
                {formState.errors?.message?.[0] || form.formState.errors.message?.message}
              </p>
            )}
          </div>
          
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
