import { RiShieldCheckFill, RiTeamFill } from "@remixicon/react";

export default function AboutBlock() {
  return (
    <section id="about" className="relative w-full bg-slate-50/80 py-16 md:py-20 px-4 md:px-8 overflow-hidden">
      
      {/* Luz de fundo suave */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-[#312783]/5 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Lado Esquerdo: Imagem / Card de Destaque */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square rounded-3xl bg-gradient-to-tr from-[#312783] to-[#4335b0] p-8 text-white shadow-xl flex flex-col justify-between overflow-hidden">
            
            {/* Detalhe estético de fundo */}
            <img src="/ICONE-2-PNG.png" alt="Coração" className="absolute -right-8 -bottom-8 size-64 text-white/10 pointer-events-none opacity-20" />

            <div className="space-y-2 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
                Tradição & Cuidado
              </span>
              <h3 className="text-2xl font-bold leading-tight">
                Mais que uma farmácia, um compromisso com você.
              </h3>
            </div>

            <div className="space-y-4 relative z-10 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <RiShieldCheckFill className="size-5 text-emerald-400" />
                </div>
                <p className="text-sm font-medium">Produtos 100% procedência garantida</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <RiTeamFill className="size-5 text-emerald-400" />
                </div>
                <p className="text-sm font-medium">Atendimento próximo e dedicado</p>
              </div>
            </div>

          </div>
        </div>

        {/* Lado Direito: Texto Institucional */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#312783]">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              A Farmácia Dois Corações
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              Nascemos com o propósito de transformar a experiência de cuidar da saúde em Glória do Goitá. Acreditamos que o atendimento em uma farmácia deve ir além da simples venda de medicamentos — deve ser pautado no <strong>respeito, empatia e orientação correta</strong>.
            </p>
            <p>
              Nossa equipe é preparada para ouvir você, tirar suas dúvidas e garantir que você e sua família recebam sempre o melhor tratamento, seja presencialmente em nossa loja ou na comodidade da sua casa através das nossas entregas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
            <div>
              <p className="text-2xl font-extrabold text-[#312783]">100%</p>
              <p className="text-xs text-slate-500 mt-0.5">Foco no seu bem-estar</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#312783]">Glória do Goitá</p>
              <p className="text-xs text-slate-500 mt-0.5">Orgulho de servir nossa cidade</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}