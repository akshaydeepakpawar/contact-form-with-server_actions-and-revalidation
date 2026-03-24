import Image from "next/image";
import dbConnect from "@/lib/db"

export default async function Home() {
  await dbConnect();
  return (
   <div>
    <h1>hello world</h1>
   </div>
  );
}
