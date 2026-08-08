import {
  RiWhatsappLine,
  RiMapPinLine,
  RiHeartPulseLine,
  RiStarFill,
  RiTruckLine,
  RiUser3Fill,
} from "@remixicon/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const STATS = [
  {
    icon: RiTruckLine,
    value: "Entrega Rápida",
    label: "Em toda Glória do Goitá",
  },
  {
    icon: RiStarFill,
    value: "4.9 / 5.0",
    label: "Atendimento de confiança",
  },
  {
    icon: RiUser3Fill,
    value: "Atendimento",
    label: "Com profissionais qualificados",
  },
]

export default function HeroBlock() {
  const whatsappUrl = "https://whatsa.me/5581995014640/?t=Ol%C3%A1,%20Farm%C3%A1cia%20Dois%20Cora%C3%A7%C3%B5es!%20Gostaria%20de%20fazer%20um%20pedido%20ou%20consultar%20o%20pre%C3%A7o%20de%20alguns%20itens.%20Podem%20me%20ajudar?"

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/80 py-16 md:py-20 px-6">
      
      {/* Luzes de fundo (Glows Suaves em Gradiente) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-[#312783]/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-10 size-[300px] rounded-full bg-[#25D366]/10 blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        
        {/* Badge */}
        <Badge variant="outline" className="gap-1.5 border-[#312783]/20 bg-white/80 backdrop-blur-sm text-[#312783] shadow-sm px-3 py-1">
          <RiHeartPulseLine className="size-3.5 text-[#312783]" />
          Atendimento humanizado para você
        </Badge>

        {/* Título Principal */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 leading-[1.15]">
          Sua saúde e bem-estar <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#312783] via-[#4335b0] to-[#312783] bg-clip-text text-transparent">
            em primeiro lugar.
          </span>
        </h1>

        {/* Parágrafo */}
        <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed">
          Envie sua receita pelo WhatsApp ou peça seus medicamentos e produtos de perfumaria sem sair de casa.
        </p>

        {/* Botões de Ação */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center justify-center w-full sm:w-auto">
          <Button 
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md hover:shadow-lg transition-all h-11 px-6" 
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <RiWhatsappLine className="size-5" />
              Pedir pelo WhatsApp
            </a>
          </Button>

          <Button 
            variant="outline" 
            className="border-slate-300 bg-white/80 hover:bg-white text-slate-700 shadow-sm h-11 px-6"
            
          >
            <a href="#location" className="flex items-center justify-center gap-2">
              <RiMapPinLine className="size-4 text-slate-500" />
              Como Chegar
            </a>
          </Button>
        </div>

        {/* Cards de Estatísticas/Diferenciais */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div 
                key={stat.label} 
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm/60 text-left"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#312783]/10 text-[#312783]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}