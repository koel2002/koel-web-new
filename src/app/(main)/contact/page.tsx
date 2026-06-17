
'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { submitContactForm } from '@/app/contact-action';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  captcha: z.string().refine(val => !isNaN(parseInt(val, 10)), { message: "Please enter a number." }),
  num1: z.string(),
  num2: z.string(),
}).refine(data => parseInt(data.captcha, 10) === (parseInt(data.num1, 10) + parseInt(data.num2, 10)), {
  message: "Incorrect captcha answer.",
  path: ["captcha"],
});

export default function ContactPage() {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.corporateAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const { toast } = useToast();
  const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      captcha: "",
      num1: '0',
      num2: '0',
    },
  });

  const resetFormAndCaptcha = () => {
    form.reset();
    const n1 = Math.floor(Math.random() * 10);
    const n2 = Math.floor(Math.random() * 10);
    setNum1(n1);
    setNum2(n2);
    form.setValue('num1', String(n1));
    form.setValue('num2', String(n2));
  };
  
  useEffect(() => {
    resetFormAndCaptcha();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await submitContactForm(formData);

    if (result.success) {
      setSuccessDialogOpen(true);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.message || "Failed to send message. Please try again.",
      });
    }
  }


  return (
    <div>
      <section className="w-full h-[40vh] md:h-[50vh]">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={mapUrl}
          title="Koel Group Location on Google Maps"
          aria-label="Koel Group Location"
        ></iframe>
      </section>

      <section className="bg-secondary">
        <div className="container max-w-[1200px] mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to answer your questions about partnerships, investments, or our services. Let's build a sustainable future together.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-background p-8 rounded-lg border">
            <h2 className="text-2xl font-bold font-headline mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                 <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                 <FormField
                    control={form.control}
                    name="captcha"
                    render={({ field }) => (
                      <FormItem className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                        <FormLabel>{`What is ${num1} + ${num2}?`}</FormLabel>
                        <FormControl>
                           <Input type="number" placeholder="Your answer" className="sm:w-32" {...field} />
                        </FormControl>
                         <FormMessage />
                      </FormItem>
                    )}
                  />
                  <input type="hidden" {...form.register('num1')} />
                  <input type="hidden" {...form.register('num2')} />

                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                   {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-headline mb-4">How to Reach Us</h2>
              <p className="text-muted-foreground mb-8">
                  Koel Group is a pioneer in delivering excellence across textiles, agriculture, and healthcare. We're always eager to connect with potential partners, investors, and clients. For any inquiries, please fill out the form, give us a call, or use the chat button on the bottom right for a quick response.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold font-headline mb-4">Direct Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Corporate Address</h3>
                    <p>{CONTACT_INFO.corporateAddress}</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                   <div>
                    <h3 className="font-semibold text-foreground">Factory Address</h3>
                    <p>{CONTACT_INFO.factoryAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">{CONTACT_INFO.email}</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary">{CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold font-headline mb-4">Follow Us</h2>
              <div className="flex items-center gap-4">
                {Object.entries(SOCIAL_LINKS).map(([name, href]) => {
                  const Icon = socialIcons[name as keyof typeof socialIcons];
                  return (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Icon className="h-6 w-6" />
                      <span className="sr-only">{name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <AlertDialog open={isSuccessDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Sent Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for contacting us. We have received your message and will get back to you shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
              setSuccessDialogOpen(false);
              resetFormAndCaptcha();
            }}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
