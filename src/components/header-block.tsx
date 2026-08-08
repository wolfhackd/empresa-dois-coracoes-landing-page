"use client"

import { RiArrowRightLine, RiMenuLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// const navLinks = ["Início", "Categorias", "Sobre", "Endereço", "Contato"]
const navLinks = [{
  name: "Início",
  href: "#inicio"
}, {
  name: "Categorias",
  href: "#services"
}, {
  name: "Sobre",
  href: "#about"
}, {
  name: "Endereço",
  href: "#location"
}]

export default function HeaderBlock() {
  return (
    <header className="flex h-16 w-full items-center gap-6 border-border px-4 text-foreground sm:px-6">
      <a href="#" className="flex items-center gap-2">
        <img src="/LOGO-2-PNG.png" className="h-8" alt="Logo da Farmácia" />
      </a>
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Button
          render={<a href="#" />}
          nativeButton={false}
          className="hidden md:inline-flex bg-[#312783]"
        >
          Fale Conosco
          <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
        </Button>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" />
            }
            aria-label="Open menu"
          >
            <RiMenuLine aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <img src="/LOGO-2-PNG.png" className="h-12" alt="Logo da Farmácia" />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-2">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.name}
                  render={<a href={link.href} />}
                  nativeButton={false}
                  className="px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                render={<a href="#" />}
                nativeButton={false}
                className="w-full bg-[#312783]"
              >
                Fale Conosco
                <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
