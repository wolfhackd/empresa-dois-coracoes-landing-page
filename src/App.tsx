import { useState } from 'react'
import './App.css'
import { Button } from '@base-ui/react'
import HeaderBlock from './components/header-block'
import HeroBlock from './components/hero-block'
import { CustomMap } from './components/custom-map'
import { Map, MapControls } from './components/ui/map'
import { Card } from './components/ui/card'

function App() {

  return (
    <>
    <HeaderBlock />
    <HeroBlock />
      {/* <section id="hero">
        <h1>
          Farmácia Dois Corações
        </h1>
        <p>
          Cuidando da sua saúde com dedicação e confiança. Atendimento personalizado e qualidade que você merece.
        </p>
      </section> */}
      <section id="location" className="bg-[#EDEDED]">
        <h2>Localização</h2>
        {/* <Button>
          Unidade 1
        </Button> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.3171980382164!2d-35.29278561327602!3d-8.000647057902519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba9c6f648f363%3A0x2de841c451766d3e!2zRmFybcOhY2lhIERvaXMgQ29yYcOnw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1786070613954!5m2!1spt-BR!2sbr" loading="lazy" className='min-w-64 min-h-80'></iframe> */}
        <CustomMap />
        
        </section>
    </>
  )
}

export default App
