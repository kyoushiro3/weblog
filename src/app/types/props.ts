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