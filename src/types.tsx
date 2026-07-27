
//Types attributes need to match json attributes returned from the backend.
export interface ProductDTO{
    id: string;
    category: string;
    image: string;
    price: number;
    title: string;
    description: string; 
}