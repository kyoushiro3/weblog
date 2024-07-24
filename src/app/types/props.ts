export interface weblogData{
    _id?: string;
    title: string;
    description: string;
    category: string[]; 
    user: string;
    email: string;
    img: string;
    date?: string;
    time?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface SearchProps {
    search: string
    setSearch: (search: string) => void
  }
  
  export interface SettingsProps {
    isLoading: boolean
    setIsLoading: (settings: boolean) => void
  }
  