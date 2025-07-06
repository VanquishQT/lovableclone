"use client"; 

import { useTRPC } from "@/trpc/client";
import { tr } from "date-fns/locale";

const Page = () => {
  const trpc = useTRPC();
  trpc.createAI.queryOptions({ text: "Hello!" });

  // localhost:3000/api/trpc/createAI?input={"text":"Hello!"}
  return (
    <div>
      Hello World
    </div>
  );
}

export default Page;
