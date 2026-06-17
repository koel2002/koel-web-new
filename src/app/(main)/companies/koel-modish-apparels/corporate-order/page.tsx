
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Info, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { submitCorporateOrderForm } from './action';


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  whatsappNo: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  requiredQuantity: z.string().min(1, { message: "Please enter the required quantity." }),
  orderQueryDetails: z.string().min(10, { message: "Details must be at least 10 characters." }),
  captcha: z.string().refine(val => !isNaN(parseInt(val, 10)), { message: "Please enter a number." }),
  num1: z.string(),
  num2: z.string(),
}).refine(data => parseInt(data.captcha, 10) === (parseInt(data.num1, 10) + parseInt(data.num2, 10)), {
  message: "Incorrect captcha answer.",
  path: ["captcha"],
});


export default function CorporateOrderPage() {
    const { toast } = useToast();
    const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            whatsappNo: "",
            requiredQuantity: "",
            orderQueryDetails: "",
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

        const result = await submitCorporateOrderForm(formData);

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
      <section className="relative h-[40vh] w-full bg-secondary">
        <Image
          src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg"
          alt="Corporate Order"
          fill
          className="object-cover"
          data-ai-hint="corporate order business"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">
            Corporate & Bulk Orders
          </h1>
          <p className="mt-2 text-lg max-w-3xl">Your trusted partner for large-scale apparel manufacturing.</p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto grid lg:grid-cols-4 gap-12 px-4">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">Submit Your Order Query</CardTitle>
                    <CardDescription>Fill out the form below and our team will get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                        <Input placeholder="e.g., Anisul Islam" {...field} />
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
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                        <Input placeholder="e.g., email@example.com.bd" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="whatsappNo"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>WhatsApp No.</FormLabel>
                                        <FormControl>
                                        <Input placeholder="e.g., +8801712345678" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="requiredQuantity"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Required Quantity</FormLabel>
                                        <FormControl>
                                        <Input type="number" placeholder="e.g., 1000" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="orderQueryDetails"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Order Query Details</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe what type of garment you need with type like t-shit, polo shirt, jacket, blazer, shirt, pant, trouser, jersey with their preferred color and design that you want along with other details ..." rows={6} {...field} />
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

                            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={form.formState.isSubmitting}>
                                <Send className="mr-2 h-4 w-4" />
                                {form.formState.isSubmitting ? 'Submitting...' : 'Submit Order Query'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> How to Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong>1. Fill the Form:</strong> Provide as much detail as possible for a faster, more accurate quote.
                </p>
                <p>
                  <strong>2. Confirmation:</strong> Our team will review your query and contact you within 24-48 hours.
                </p>
                <p>
                  <strong>3. Finalize:</strong> We'll work with you to finalize the order details, pricing, and timeline.
                </p>
                <p>
                  <strong>4. Production:</strong> Once confirmed, your order will go into our production schedule.
                </p>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle>Other Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/contact">General Contact</Link>
                </Button>
                 <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/investment-pitch">Investment & Partnership</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <AlertDialog open={isSuccessDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Query Submitted Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for your inquiry. We have received your message and our corporate sales team will get back to you shortly.
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
