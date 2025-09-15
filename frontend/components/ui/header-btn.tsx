import Link from "next/link";
import { HeaderBtn as HeaderBtnProps } from "../layout/header";

export const HeaderBtn = ({ Icon, href }: HeaderBtnProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 cursor-default items-center justify-center rounded-sm bg-[hsl(0_0_12)] text-[hsl(0_0_95)] transition-colors duration-150 ease-in-out hover:bg-[hsl(0_0_16)]"
    >
      <Icon />
    </Link>
  );
};
