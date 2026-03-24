"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ContactForm = () => {

    const [isSubmitting,setIsSubmitting]=useState(false);
    const [message,setMessage]=useState("")

    async function onSubmit(formData){

    }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" required disabled={isSubmitting}/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Email</Label>
                    <Input id="email" name="email" type="text" required disabled={isSubmitting}/>
                </div>
            </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Subject</Label>
                    <Input id="subject" name="subject" type="text" required disabled={isSubmitting}/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Message</Label>
                    <Textarea id="message" name="message" required disabled={isSubmitting} className="min-h-30"
                    />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting? "Sending..." : "Send Mesage"}
                </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
