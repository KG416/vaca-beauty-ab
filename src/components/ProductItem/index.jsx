import styles from './ProductItem.module.scss'

const ProductItem = ({ img, title, description, price, currency }) => {
  function getCurrencySymbol(currency) {
    if (currency === 'EUR') return '€'
  }

  return (
    <li className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={`../../assets/${img}`} alt="product image" />
      </div>

      <div className={styles.textWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{`${price} ${getCurrencySymbol(currency)}`}</p>
      </div>
    </li>
  )
}

export default ProductItem
