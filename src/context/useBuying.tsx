import { create } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const useOpenBuy = create((set) => ({
  isOpen: false,
  handle: () => set(({ isOpen: true })),
  handleClose: () => set(({ isOpen: false })),
}));
