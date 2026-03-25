"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`w-full cursor-pointer ${pending ? "opacity-70" : ""}`}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}