"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/contact";
import { revalidateTag, unstable_cache } from "next/cache";

export async function updateContact(contactId, status) {
  try {
    await dbConnect();
    await Contact.findByIdAndUpdate(contactId, { status });
    revalidateTag("contact-stats");
    return { succes: true };
  } catch (error) {
    console.error("Error updating contact status: ", error);
    return { success: false, error: "Failed to update status" };
  }
}

export async function getContactStats() {
  const getCachedStats = unstable_cache(
    async () => {
      await dbConnect();
      const total = await Contact.countDocuments();
      const newCount = await Contact.countDocuments({ status: "new" });
      const readCount = await Contact.countDocuments({ status: "read" });
      const repliedCount = await Contact.countDocuments({ status: "replied" });
      return { total, newCount, readCount, repliedCount };
    },
    ["contact-stats"],
    { tags: ["contact-stats"], revalidate: 10 },
  );
  return getCachedStats();
}

export async function createContact(formData) {
  try {
    await dbConnect();
    // Extracting fields individually
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    revalidateTag("contact-stats");

    const contact = await Contact.create({ name, email, subject, message });

    return {
      success: true,
      message: "Message sent Successfully",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.error("Error creating contact:", error);
    return {
      success: false,
      error: "Someting went wrong. Please try again.",
    };
  }
}
export async function getContacts() {
  try {
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt,
    }));
  } catch (error) {
    console.error("error fetching contacts", error);
    return [];
  }
}
