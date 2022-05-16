import styles from './Header.module.scss'
import Logo from '../Logo'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
    </div>
  )
}

export default Header