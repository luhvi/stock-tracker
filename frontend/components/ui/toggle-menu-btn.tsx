"use client";

import { useMenuStore } from "@/store/menu-store";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export const ToggleMenuBtn = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);

  return (
    <button
      onClick={toggleMenu}
      className="flex h-8 w-8 cursor-default items-center justify-center rounded-sm text-[hsl(0_0_95)]"
    >
      {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
    </button>
  );
};
