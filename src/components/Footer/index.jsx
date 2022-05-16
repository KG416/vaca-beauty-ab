import styles from './Footer.module.scss'
import Logo from '../Logo'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />

      <ul>
        <li>
          <a href="#">Pricavy Policy</a>
        </li>
        <li>
          <a href="#">Pricavy Policy</a>
        </li>
        <li>
          <a href="#">Pricavy Policy</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
