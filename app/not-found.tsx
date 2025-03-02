import { Button } from "@/components/ui/Button";

export default function NotFound() {
 return (
  <div className="mt-20 mb-16">
   <h1 className="text-fill-transparent mx-0 mt-0 bg-linear-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-4xl font-black tracking-[-0.03em]">404 - Page not found</h1>
   <p className="mt-2 mb-4 text-lg text-neutral-700 dark:text-neutral-400">We're sorry — we can't find the page you're looking for.</p>
   <Button variant="secondary" href="/">
    Go home
   </Button>
  </div>
 );
}
