import styles from './Contact.module.scss'
import Button from '../Button'

const Contact = () => {
  return (
    <div className={styles.wrapper} style={{
      // eslint-disable-next-line no-undef
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL + '/assets/image-6.jpg'})`
    }}>
      <h2>Get in touch</h2>
      <p>47 Chandos Place, London, WC2N 4HS</p>
      <Button variant="secondary">Contact us</Button>
    </div>
  )
}

export default Contact
