import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-dvh">
      <h1 className="text-5xl text-blue-600 text-center font-extrabold">Hello World</h1>
      <Button>Click Me</Button>
    </div>
  )
}

