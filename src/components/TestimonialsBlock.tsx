import { RiStarFill, RiDoubleQuotesL } from "@remixicon/react";

const REVIEWS = [
  {
    name: "Simone Nascimento",
    comment: "Sou suspeita a falar dessa farmácia, desde que abriu que sou cliente, atendimento bom, lili a dona da Farmácia um amor, preços ótimos, parabéns a equipe.",
    rating: 5,
  },
  {
    name: "Anne Magaris",
    comment: "A farmácia mais completa da cidade,tem de tudo e se não tiver eles trazem!",
    rating: 5,
  },
  {
    name: "Miriam",
    comment: "A melhor de Glória Do Goitá A azulzinha que faz toda a diferença 💙❤️ Essa recomendo com toda certeza 🥰 ...",
    rating: 5,
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#312783]">
            Opinião dos clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            O que dizem sobre nós
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <RiDoubleQuotesL className="size-8 text-[#312783]/20" />
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">{review.name}</span>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(review.rating)].map((_, idx) => (
                    <RiStarFill key={idx} className="size-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}