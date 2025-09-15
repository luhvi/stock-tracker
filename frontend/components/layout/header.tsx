"use client";

import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";
import { HeaderBtn } from "../ui/header-btn";
import { ToggleMenuBtn } from "../ui/toggle-menu-btn";

export interface HeaderBtn {
  Icon: IconType;
  href: string;
}
export const Header = () => {
  const headerBtns: HeaderBtn[] = [
    { Icon: IoLogoGithub, href: "https://github.com/luhvi/stock-tracker" },
    { Icon: FaXTwitter, href: "https://x.com/lujavascript" },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 h-12 border-b-1 border-b-[hsl(0_0_16)] bg-[hsl(0_0_8)]">
      <div className="mx-auto flex h-full max-w-250 items-center justify-between px-4">
        <div className="flex items-center justify-center gap-2">
          <ToggleMenuBtn />
          <div className="flex cursor-default items-center justify-center">
            <span className="font-bold text-blue-400">LU</span>
            <span className="font-bold text-[hsl(0_0_95)]">CALC</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          {headerBtns.map((headerBtn, index) => (
            <HeaderBtn
              key={index}
              Icon={headerBtn.Icon}
              href={headerBtn.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
