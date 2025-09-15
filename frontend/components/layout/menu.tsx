"use client";

import { useMenuStore } from "@/store/menu-store";
import { tickers } from "@/ticker-data";
import { MenuBtn } from "../ui/menu-btn";

export interface MenuBtn {
  title: string;
  href: string;
}

export const Menu = () => {
  const MenuBtns: MenuBtn[] = [];

  for (const ticker in tickers) {
    MenuBtns.push({
      title: tickers[ticker],
      href: `/ticker/${tickers[ticker]}`,
    });
  }

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col px-4 py-16 backdrop-blur-lg">
      {MenuBtns.map((menuBtn, index) => (
        <MenuBtn key={index} title={menuBtn.title} href={menuBtn.href} />
      ))}
    </div>
  );
};
