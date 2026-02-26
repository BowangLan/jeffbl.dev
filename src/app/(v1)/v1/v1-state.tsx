import { create } from "zustand";

interface V1State {
  initStep: number;
  setInitStep: (step: number) => void;
}

export const useV1Store = create<V1State>((set) => ({
  initStep: 1,
  setInitStep: (step) => set({ initStep: step }),
}));
