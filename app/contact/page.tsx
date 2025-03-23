import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Description, Header2 } from "@/components/ui/Headers";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { contact } from "@/config/contact";

export const metadata = {
 title: "Contact",
 description: "If you have a project in mind, or just want to say hi, feel free to send me a message.",
};

export default function Page() {
 return (
  <section className="mt-6 mb-16 md:mt-12 lg:mt-20">
   <Header2 id="contact">Contact me</Header2>
   <Description>I’m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</Description>

   <div className="my-6 flex w-full rounded-md border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
    <ContactForm />
   </div>
   <Description>Or contact me with...</Description>
   <div className="mt-4 flex flex-wrap gap-4">
    {contact.links.map((element) => {
     const Icon = Icons[element.icon];

     return (
      <Button variant="tertiary" key={`contact-link-${element.href}`} className="gap-2" asChild>
       <Link href={element.href} target="_blank" rel="noopener noreferrer">
        <Icon className="size-5 shrink-0" />
        {element.title}
       </Link>
      </Button>
     );
    })}
   </div>
  </section>
 );
}
