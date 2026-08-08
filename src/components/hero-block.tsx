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
import { Separator } from "@/components/ui/separator"

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
    <section className="flex w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <div className="mx-auto w-full max-w-3xl">
        <Badge variant="outline" className="gap-1.5 border-primary/20 bg-primary/5 text-primary">
          <RiHeartPulseLine className="size-3.5" />
          Atendimento humanizado para você
        </Badge>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Sua saúde e bem-estar <br className="hidden sm:block" />
          <span className="text-[#312783]">em primeiro lugar.</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Envie sua receita pelo WhatsApp ou peça seus medicamentos e produtos de perfumaria sem sair de casa.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button 
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium" 
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <RiWhatsappLine className="mr-1 size-5" />
              Pedir pelo WhatsApp
            </a>
          </Button>

          <Button variant="outline" >
            <a href="#localizacao" className="flex items-center">
              <RiMapPinLine className="mr-1 size-4" />
              Como Chegar
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-0">
          {STATS.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center gap-0">
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="mx-6 hidden h-10 sm:block"
                  />
                )}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                    <Icon
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xl leading-none font-bold tabular-nums">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}