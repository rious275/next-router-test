import { create } from "zustand";

type TestType = {
  bears: number;
  increase: () => void;
};

export const useStore = create<TestType>(set => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 })),
}));
