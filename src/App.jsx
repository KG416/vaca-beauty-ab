// components
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Products from './views/Products'

const App = () => {
  return (
    <div>
      <Container>
       <Header />
        <HeroSection />
        <Products />
        <Footer />
      </Container>
    </div>
  )
}

export default App
