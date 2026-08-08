import { 
  RiCapsuleLine, 
  RiHeartPulseLine, 
  RiTruckLine, 
  RiFileTextLine, 
  RiSparklingLine, 
  RiShieldCheckLine 
} from "@remixicon/react";

const SERVICES = [
  {
    icon: RiCapsuleLine,
    title: "Medicamentos e Genéricos",
    description: "Linha completa de medicamentos de marca, similares e genéricos com os melhores preços.",
  },
  {
    icon: RiFileTextLine,
    title: "Receita Digital via WhatsApp",
    description: "Envie a foto ou o PDF da sua receita direto pelo WhatsApp e preparamos seu pedido rapidamente.",
  },
  {
    icon: RiTruckLine,
    title: "Tele-entrega Rápida",
    description: "Receba seus medicamentos e produtos de higiene no conforto da sua casa e em Região.",
  },
  {
    icon: RiHeartPulseLine,
    title: "Aferição de Pressão e Glicemia",
    description: "Acompanhamento e cuidados básicos para a sua saúde com profissionais capacitados.",
  },
  {
    icon: RiSparklingLine,
    title: "Perfumaria e Cosméticos",
    description: "Produtos de cuidados pessoais, infantil, dermocosméticos e higiene diária para toda a família.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Atendimento Humanizado",
    description: "Tire suas dúvidas sobre dosagens e horários de medicamentos com quem realmente se importa.",
  },
];

export default function ServicesBlock() {
  return (
    <section id="services" className="relative w-full bg-white py-16 md:py-20 px-4 md:px-8 border-y border-slate-100">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312783]">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Nossos Serviços & Cuidados
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Muito mais que uma farmácia: seu ponto de apoio para saúde, bem-estar e conveniência no dia a dia.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 rounded-2xl bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-[#312783]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="size-12 rounded-xl bg-[#312783]/10 text-[#312783] group-hover:bg-[#312783] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#312783] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}