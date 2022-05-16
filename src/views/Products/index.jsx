import ProductList from '../../components/ProductList'
import Button from '../../components/Button'
import styles from './Products.module.scss'

const Poducts = () => {
  return (
    <div className={styles.wrapper}>
      <h2>View products</h2>

      <div className={styles.buttonWrapper}>
        <Button>Price</Button>
        <Button>New</Button>
      </div>

      <ProductList />
    </div>
  )
}

export default Poducts
