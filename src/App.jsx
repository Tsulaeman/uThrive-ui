import { useEffect, useState } from 'react'
import { getProducts } from './services/productsService'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const items = await getProducts()
        setProducts(items)
      } catch {
        setError('Unable to load products.')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <main className="app">
      <h1>Product List</h1>
      <p>Build your features on top of this starter list.</p>

      {isLoading ? <p>Loading products...</p> : null}
      {error ? <p role="alert">{error}</p> : null}

      {!isLoading && !error ? (
        <ul aria-label="Products" className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <span>{product.name}</span>
              <strong>${product.price.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  )
}

export default App
