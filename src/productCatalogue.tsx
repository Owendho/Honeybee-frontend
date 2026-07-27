import { useEffect, useState } from 'react'
//const productCatalogue = 
import type { ProductDTO } from "./types";

//this is the function that will display the paginated product catalogue. 10 items per page. 
//needs to get data from http request to the backend.

function useProductCatalogue(page: number){
    const pageSize = 10;
    const [products, setProducts] = useState<ProductDTO[] | null>(null); 
    const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
        fetch(`https://localhost:7133/ProductCatalogue/${page}/${pageSize}`).then((res) => res.json()).then((data:ProductDTO[]) => {
          setProducts(data);
        })
      }, [page])

      return products;
}

// Define an interface for the component props
interface CatalogueProps{
    pageNumber: number;
}

export default function Catalogue({pageNumber}: CatalogueProps) {
    const products = useProductCatalogue(pageNumber); //gets specified page of products.
    const listItems = products?.map((product) => (<li key={product.id}> {product.title} </li>)) ?? [];
    
    return(
        <ul>{listItems}</ul>
    )
}