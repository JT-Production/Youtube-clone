
import { create } from 'zustand'

interface GlobalState {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
}
const useStore = create<GlobalState>((set) => ({
    searchQuery: '',
    setSearchQuery: (val) => set({ searchQuery: val }),
  }));

export default useStore