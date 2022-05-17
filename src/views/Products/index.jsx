// components
import ProductList from '../../components/ProductList'
import Button from '../../components/Button'

// libs, style & data
import { useState, useEffect } from 'react'
import styles from './Products.module.scss'
import allProducts from '../../data/products.json'

const Poducts = () => {
  const [currentProducts, setCurrentProducts] = useState([])
  const [showAllProducts, setShowAllProducts] = useState(false)
  const MIN_NO_OF_PRODUCTS = 4

  useEffect(() => {
    if (showAllProducts) return setCurrentProducts(allProducts)
    setCurrentProducts(allProducts.slice(0, MIN_NO_OF_PRODUCTS))
  }, [showAllProducts])

  return (
    <div className={styles.wrapper}>
      <h2>View products</h2>

      <div className={styles.btnWrapperTop}>
        <Button>Price</Button>
        <Button>New</Button>
      </div>

      <ProductList currentProducts={currentProducts} />

      <div className={styles.btnWrapperBottom}>
        <Button variant="secondary" onClick={() => setShowAllProducts((prevState) => !prevState)}>
          {currentProducts.length === MIN_NO_OF_PRODUCTS ? 'Show more' : 'Show less'}
        </Button>
      </div>
    </div>
  )
}

export default Poducts
