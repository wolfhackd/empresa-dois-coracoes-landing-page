export default function FooterBlock() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-10 px-4 md:px-8 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-bold text-sm text-white">Farmácia Dois Corações</p>
          <p className="mt-1">Cuidando da sua saúde com amor e dedicação em Glória do Goitá - PE.</p>
        </div>

        <div className="flex gap-6 text-slate-300">
          <a href="#location" className="hover:text-white transition-colors">Localização</a>
          <a href="#services" className="hover:text-white transition-colors">Serviços</a>
        </div>

        <div>
          <p>© {new Date().getFullYear()} Farmácia Dois Corações.</p>
          <p className="text-slate-500 mt-0.5">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}