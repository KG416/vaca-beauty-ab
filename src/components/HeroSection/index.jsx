import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.wrapper} style={{
      // eslint-disable-next-line no-undef
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL + '/assets/image-2.jpg'})`
    }}>
      <div className={styles.textWrapper}>
        <h1>Reinventing the world of beauty</h1>
        <h2>
          We believe that through creativity, we are able to develop timeless products, both
          meaningsful and inspirational, to people and their lives.
        </h2>
      </div>
    </div>
  )
}

export default HeroSection
