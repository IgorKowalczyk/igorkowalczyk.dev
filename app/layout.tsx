import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { AxiomWebVitals } from "next-axiom";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import { meta } from "@/config/metadata";
import "styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
 metadataBase: new URL(meta.url),
 title: {
  default: meta.title,
  template: `%s | ${meta.title}`,
 },
 alternates: {
  canonical: "./",
 },
 description: meta.description,
 keywords: meta.keywords,
 openGraph: {
  title: meta.title,
  description: meta.description,
  url: meta.url,
  siteName: meta.title,
  locale: "en_US",
  type: "website",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
 twitter: {
  title: meta.title,
  description: meta.description,
  creator: meta.accounts.twitter.username,
  card: "summary_large_image",
 },
 icons: {
  shortcut: "/favicon.ico",
 },
};

export const viewport = {
 themeColor: [
  { media: "(prefers-color-scheme: light)", color: "white" },
  { media: "(prefers-color-scheme: dark)", color: "black" },
 ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <ViewTransitions>
   <html lang="en" suppressHydrationWarning>
    <head>
     {process.env.HOTJAR_ID && (
      <Script strategy="afterInteractive" id="hotjar">
       {`
    (function(h,o,t,j,a,r){
     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
     h._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};
     a=o.getElementsByTagName('head')[0];
     r=o.createElement('script');r.async=1;
     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
     a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
   `}
      </Script>
     )}
    </head>
    <body className={cn("relative scroll-smooth bg-white px-6 font-mono antialiased selection:bg-neutral-800 selection:text-white! dark:bg-[#121212]", GeistMono.variable)}>
     <ThemeProvider attribute="class" disableTransitionOnChange scriptProps={{ "data-cfasync": "false" }}>
      <Providers>
       <Navigation />
       <main className="max-w-body mx-auto min-h-screen w-full" data-vaul-drawer-wrapper="">
        {children}
       </main>
       <div className="color-rays" />
       <Footer />
       <Analytics />
       <AxiomWebVitals />
      </Providers>
     </ThemeProvider>
    </body>
   </html>
  </ViewTransitions>
 );
}
