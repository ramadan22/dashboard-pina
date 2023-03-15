import { create } from 'zustand'

export const useOpenBuy = create((set) => ({
  isOpen: false,
  handle: () => set(({ isOpen: true })),
  handleClose: () => set(({ isOpen: false })),
}));