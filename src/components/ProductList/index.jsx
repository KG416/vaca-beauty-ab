// libs
import { useState, useEffect } from 'react'

// components
import styles from './ProductList.module.scss'
import allProducts from '../../data/products.json'
import ProductItem from '../ProductItem'
import Button from '../Button'

const ProductList = () => {
  const [currentProducts, setCurrentProducts] = useState([])
  const INIT_PRODUCTS = 4

  useEffect(() => {
    if (allProducts.length > INIT_PRODUCTS) {
      return setCurrentProducts(allProducts.slice(0, INIT_PRODUCTS))
    }
    setCurrentProducts(allProducts)
  }, [])

  function showProducts() {
    if (currentProducts.length === INIT_PRODUCTS) {
      return setCurrentProducts(allProducts)
    }
    setCurrentProducts(allProducts.slice(0, INIT_PRODUCTS))
  }

  return (
    <>
      <ul className={styles.wrapper}>
        {currentProducts &&
          currentProducts.map((product) => (
            <ProductItem
              key={product.title}
              title={product.title}
              description={product.description}
              price={product.price}
              currency={product.currency}
              img={product.img}
            />
          ))}
      </ul>
      
      <Button variant="secondary" onClick={showProducts}>
        {currentProducts.length === INIT_PRODUCTS ? 'Show more' : 'Show less'}
      </Button>
    </>
  )
}

export default ProductList
