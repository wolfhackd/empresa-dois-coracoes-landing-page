import { RiMapPin2Line, RiTimeLine, RiPhoneLine } from "@remixicon/react";
import { CustomMap } from "./custom-map";

export default function ContactBlock() {
  return (
    <section id="location" className="relative w-full overflow-hidden bg-slate-50/80 py-16 md:py-20 px-4 md:px-8">
      
      {/* Luzes de fundo para harmonia com o Hero */}
      <div className="pointer-events-none absolute top-1/2 left-[-100px] size-[400px] rounded-full bg-[#312783]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] size-[350px] rounded-full bg-[#25D366]/5 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto w-full space-y-10">
  
        {/* Cabeçalho do Bloco */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312783]">
            Venha nos visitar
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Nossa Localização
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Estamos localizados no coração de Glória do Goitá para te atender com agilidade e carinho.
          </p>
        </div>

        {/* Grid de Informações e Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card de Informações */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#312783]">
                  Farmácia Dois Corações
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Atendimento humanizado e variedade em medicamentos.
                </p>
              </div>

              <div className="space-y-5 text-sm text-slate-700">
                {/* Endereço */}
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-2.5 bg-[#312783]/10 text-[#312783] rounded-xl shrink-0 mt-0.5">
                    <RiMapPin2Line className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Endereço</p>
                    <p className="text-slate-600 mt-0.5">R. Cel. José Antônio de Albuquerque, Centro</p>
                    <p className="text-slate-500 text-xs mt-0.5">Glória do Goitá - PE, 55620-000</p>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-2.5 bg-[#312783]/10 text-[#312783] rounded-xl shrink-0 mt-0.5">
                    <RiTimeLine className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Horário de Funcionamento</p>
                    <p className="text-slate-600 mt-0.5">Segunda a Sábado: 07:00 às 19:00</p>
                    <p className="text-slate-500 text-xs mt-0.5">Domingos: 07:00 às 14:00</p>
                  </div>
                </div>

                {/* Contato */}
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-2.5 bg-[#312783]/10 text-[#312783] rounded-xl shrink-0 mt-0.5">
                    <RiPhoneLine className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Contato & Telentregas</p>
                    <p className="text-slate-600 mt-0.5">(81) 99653-5242</p>
                    <p className="text-slate-600">(81) 99501-4640</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Container do Mapa */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm min-h-[420px] h-full bg-white">
            <CustomMap />
          </div>

        </div>
      </div>
    </section>
  );
}