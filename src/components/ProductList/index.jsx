// style
import styles from './ProductList.module.scss'

// components
import ProductItem from '../ProductItem'

const ProductList = ({ currentProducts = [] }) => {
  return (
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
  )
}

export default ProductList
