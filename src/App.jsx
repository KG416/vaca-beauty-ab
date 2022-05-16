// components
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div>
      <Container>
       <Header />
        <HeroSection />
        <Footer />
      </Container>
    </div>
  )
}

export default App
