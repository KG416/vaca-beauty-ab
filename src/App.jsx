// components
import Contact from './components/Contact'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Products from './views/Products'

const App = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <Products />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
