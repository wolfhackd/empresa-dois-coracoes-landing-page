import './index.css'
import HeaderBlock from './components/header-block'
import HeroBlock from './components/hero-block'
import ContactBlock from './components/contact-block'
import ServicesBlock from './components/services-block'
import FooterBlock from './components/FooterBlock'
import { WhatsappFloat } from './components/WhatsappFloat'
import AboutBlock from './components/AboutBlock'
import TestimonialsBlock from './components/TestimonialsBlock'

function App() {
  return (
    <>
    
      <WhatsappFloat />

      <HeaderBlock />
      <HeroBlock />
      <ServicesBlock />
      <AboutBlock />
      <TestimonialsBlock />
      <ContactBlock />
      <FooterBlock />
   
    </>
  )
}

export default App