import { create } from 'zustand'

export const useConfirmation = create((set) => ({
  isOpen: false,
  handle: () => set(({ isOpen: true })),
  handleClose: () => set(({ isOpen: false })),
}));