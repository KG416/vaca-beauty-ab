import styles from './ProductList.module.scss'
import products from '../../data/products.json'
import ProductItem from '../ProductItem'

const ProductList = () => {
  return (
    <ul className={styles.wrapper}>
      {products.map((product) => (
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
