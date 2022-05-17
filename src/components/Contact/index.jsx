import styles from './Contact.module.scss'
import Button from '../Button'

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Get in touch</h2>
      <p>47 Chandos Place, London, WC2N 4HS</p>
      <Button variant="secondary">Contact us</Button>
    </div>
  )
}

export default Contact
