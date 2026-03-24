import Image from "next/image";
import dbConnect from "@/lib/db";
import ContactForm from "@/components/contact-form"

export default async function Home() {
  await dbConnect();
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Server actions Demo</h1>
          <p className="text-xl text-gray-600 max-2xl mx-auto">Contact form with MongoDB and revalidation</p>
        </div>
        <ContactForm/>
      </div>
    </main>
  );
}
