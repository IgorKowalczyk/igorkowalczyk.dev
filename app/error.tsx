"use client";

export default function Error({ error }: { error: Error & { digest?: string } }) {
 return (
  <section className="mt-6 mb-16 md:mt-12 lg:mt-20">
   <h1 className="text-fill-transparent mx-0 mt-0 bg-linear-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-4xl font-black tracking-[-0.03em]">Ughh, an unexpected error!</h1>
   <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-400">{error.message.toString() || "Oh no, something went wrong... maybe you should refresh the page? If that doesn't work, please reach out to me."}</p>
  </section>
 );
}
