"use client";

import { useRouter } from "next/navigation";

export default function DonationsButton() {
  const router = useRouter();

  return (
    <button
      className="bg-[#F03C2B] text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={() => router.push("/donaciones")}
    >
      Dona Ahora
    </button>
  );
}