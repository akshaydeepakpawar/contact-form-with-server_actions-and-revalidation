import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactList from "@/components/ContactList"

const Contacts = () => {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"mb-4 bg-transparent"}
            >
              back to Form
            </Button>
          </Link>
        </div>
        <ContactList/>
      </div>
    </main>
  );
};

export default Contacts;
