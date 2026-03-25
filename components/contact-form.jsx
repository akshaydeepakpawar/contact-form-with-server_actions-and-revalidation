"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { createContact } from "@/actions";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  async function onSubmit(formData) {
    const result = await createContact(formData);

    if (result.success) {
      toast.success("Message sent successfully!");
      const form = document.getElementById("contact-form");
      form.reset();
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="contact-form" action={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Email</Label>
                <Input id="email" name="email" type="text" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Subject</Label>
              <Input id="subject" name="subject" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                className="min-h-30"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      <div className="mt-16 flex justify-center">
        <Link href="/contact">
          <Button variant="outline" className="px-6 py-2 cursor-pointer">
            View Messages →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
