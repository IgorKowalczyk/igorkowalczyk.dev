"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { useEffect } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
 useEffect(() => {
  const updateDecorations = () => {
   document.documentElement.style.setProperty("--hidden", localStorage.getItem("decorations") === "false" ? "none" : "block");
  };

  updateDecorations();
  window.addEventListener("decorations", updateDecorations);

  return () => {
   window.removeEventListener("decorations", updateDecorations);
  };
 }, []);

 return (
  <>
   <ProgressProvider color="#3b82f6" height="2px" options={{ showSpinner: false }} shallowRouting>
    {children}
   </ProgressProvider>
  </>
 );
};
