import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
 const [debouncedValue, setDebouncedValue] = useState(value);

 useEffect(() => {
  const handler = setTimeout(() => {
   setDebouncedValue(value);
  }, delay);

  return () => {
   clearTimeout(handler);
  };
 }, [value, delay]);

 return debouncedValue;
}

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
 const [isMobile, setIsMobile] = useState<boolean>(() => {
  try {
   if (typeof window === "undefined") return false;
   return window.innerWidth < MOBILE_BREAKPOINT;
  } catch {
   return false;
  }
 });

 useEffect(() => {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  const onChange = () => {
   setIsMobile(mql.matches);
  };

  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
 }, []);

 return isMobile;
}
