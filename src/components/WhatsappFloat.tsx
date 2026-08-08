import { RiWhatsappLine } from "@remixicon/react";

export function WhatsappFloat() {
  const whatsappUrl = "https://whatsa.me/5581995014640/?t=Ol%C3%A1,%20Farm%C3%A1cia%20Dois%20Cora%C3%A7%C3%B5es!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg hover:bg-[#20bd5a] hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <RiWhatsappLine className="size-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs group-hover:pr-2">
        Peça pelo WhatsApp
      </span>
    </a>
  );
}