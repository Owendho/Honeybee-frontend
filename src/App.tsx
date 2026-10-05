import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import type { ProductDTO } from './types'
import Catalogue from './productCatalogue'

function App() {
  const [count, setCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(1);

  const [product, setProduct] = useState<ProductDTO | null>(null); //what does this line do?

  useEffect(() => {
    fetch('https://localhost:7133/ProductCatalogue/1').then((res) => res.json()).then((data:ProductDTO) => {
      setProduct(data);
    })
  }, [])



  return (
    <>
      <section id="center">

        <div>
          <h1>Product List</h1>
          <Catalogue pageNumber={pageNumber} />
        </div>
        <div className="pagination-buttons">
          <button
            type="button"
            className="left-page"
            onClick={() => setPageNumber((nextPage) => nextPage - 1)}
            disabled={pageNumber <= 1}
          >
            Previous page is {pageNumber - 1}
          </button>
          <button
            type="button"
            className="right-page"
            onClick={() => setPageNumber((nextPage) => nextPage + 1)}
          >
            Next page is {pageNumber+1}
          </button>


        </div>

      </section>
    </>
  )
}

export default App

