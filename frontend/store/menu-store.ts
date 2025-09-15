import { create } from "zustand";

interface MenuStore {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  toggleMenu: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value: boolean) =>
    set(() => ({
      isMenuOpen: value,
    })),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
