"use client";

import { trpc } from "@/trpc/react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const invoke = trpc.invoke.useMutation();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button onClick={() => invoke.mutate({ text: "John" })}>
        Invoke Background Job
      </Button>
    </div>
  );
};

export default Page;