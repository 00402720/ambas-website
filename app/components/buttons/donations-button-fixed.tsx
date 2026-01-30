"use client";

import { useRouter } from "next/navigation";

export default function DonationsButtonFixed() {
  const router = useRouter();

  return (
    <button
    	onClick={() => router.push("/donaciones")}
      className="bg-[#F03C2B] text-white h-20 lg:h-40 w-20 lg:w-12
      lg:px-4 lg:py-2 rounded-[100%] lg:rounded-md bottom-4 lg:top-1/2 left-2 lg:left-0 lg:right-auto fixed align-middle
      flex items-center justify-center items-center cursor-pointer z-40 
      animate-bounce lg:animate-none"
    >
      <p className="lg:rotate-90 lg:whitespace-nowrap text-md lg:text-lg">Dona Ahora</p>
    </button>
  );
}