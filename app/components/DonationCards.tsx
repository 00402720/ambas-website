"use client";

interface DonationCardProps {
    title: string;
    value: number;
    imageUrl?: string;
    tag?: string;
}

export default function DonationCard({ title, value, imageUrl, tag }: DonationCardProps) {
  return (
    <div className="bg-[#054851] p-4 rounded-xl shadow-xl w-[256px] h-fit">
        <img src={imageUrl} alt={title} className="lg:max-h-[170px] object-cover mb-4 rounded-md" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white">${value}</p>
    </div>
    );
}