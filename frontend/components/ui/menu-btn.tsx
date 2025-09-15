"use client";

import Link from "next/link";
import { MenuBtn as MenuBtnProps } from "../layout/menu";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/store/menu-store";

export const MenuBtn = ({ title, href }: MenuBtnProps) => {
  const pathname = usePathname();
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  return (
    <Link
      onClick={() => setIsMenuOpen(false)}
      href={href}
      className={`text-2xl font-semibold ${pathname === href ? "text-[hsl(0_0_95)]" : "text-[hsl(0_0_75)] transition-colors duration-150 ease-in-out hover:text-[hsl(0_0_85)]"}`}
    >
      {title}
    </Link>
  );
};
