import { create } from "zustand";
import { SearchProps, SettingsProps } from "../types/props";

export const useSearchStore = create<SearchProps>((set) => ({
    search: "",
    setSearch: (search: string) => set({ search }),
  }))

export const useSettings = create<SettingsProps>((set) =>({
    isLoading: false,
    setIsLoading:(isLoading: boolean) => ({isLoading}),
}))