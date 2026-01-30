import { ReactNode } from "react";

interface IconButtonProps {
  label: string;
  icon: ReactNode;
  href: string;
  download?: boolean | string;
  target?: "_blank" | "_self";
  className?: string;
  image?: string;
}

export default function IconButton({
  label,
  icon,
  href,
  download,
  target = "_self",
  className = "",
  image,
}: IconButtonProps) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`
        flex flex-row items-center justify-center gap-0 lg:gap-2
        bg-[#86F1FF]/70 text-white px-2 py-2 rounded-lg
        hover:bg-[#86F1FF]/80 transition-colors
        text-sm lg:text-xl
        ${className}
      `}
    >
      {image && (<img src={`/${image}`} alt="icon image" className="w-8 h-8 lg:w-15 lg:h-15" />)}
      <span className="text-black">{label}</span>
      <span aria-hidden="true">{icon}</span>
    </a>
  );
}
