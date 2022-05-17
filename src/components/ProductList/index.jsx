// style
import styles from './ProductList.module.scss'

// libs
import { useState, useEffect } from 'react'

// components
import allProducts from '../../data/products.json'
import ProductItem from '../ProductItem'
import Button from '../Button'

const ProductList = () => {
  const [currentProducts, setCurrentProducts] = useState([])
  const [showAllProducts, setShowAllProducts] = useState(false)
  const MIN_NO_OF_PRODUCTS = 4

  useEffect(() => {
    if (showAllProducts) return setCurrentProducts(allProducts)
    setCurrentProducts(allProducts.slice(0, MIN_NO_OF_PRODUCTS))
  }, [showAllProducts])

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

        <Button variant="secondary" onClick={() => setShowAllProducts((prevState) => !prevState)}>
          {currentProducts.length === MIN_NO_OF_PRODUCTS ? 'Show more' : 'Show less'}
        </Button>
    </>
  )
}

export default ProductList
