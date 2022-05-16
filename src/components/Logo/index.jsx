import styles from './Logo.module.scss'

const BankIdLogo = () => {
  // eslint-disable-next-line no-undef
  const logo = require('../../assets/VACA-logo.svg')?.default
  return <img className={styles.logo} src={logo} alt="Company logo" />
}

export default BankIdLogo
