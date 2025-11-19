import { Menu, Star } from 'lucide-react'
import { useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { LogoIcon } from './Icons'
import { ModeToggle } from './mode-toggle'
import { buttonVariants } from './ui/button'

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: '#integrations',
    label: 'Integrations',
  },
  {
    href: '#workflow',
    label: 'Workflow',
  },
  {
    href: '#signup',
    label: 'Sign Up',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex w-[176px]">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Finito</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </a>
                  ))}
                  {/* TODO: Reinstate when download not gated */}
                  {/* <a
                    rel="noreferrer noopener"
                    href="https://github.com/little-bear-labs/finito-landing.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'default',
                    })}`}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download
                  </a> */}
                  <a
                    rel="noreferrer noopener"
                    href="#signup"
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'default',
                    })}`}
                  >
                    <Star className="mr-2 w-5 h-5 shrink-0" />
                    Start Now
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            {/* TODO: Reinstate when download not gated */}
            {/* <a
                    rel="noreferrer noopener"
                    href="https://github.com/little-bear-labs/finito-landing.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'default',
                    })}`}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download
                  </a> */}
            <a
              rel="noreferrer noopener"
              href="#signup"
              className={`border ${buttonVariants({
                variant: 'default',
              })}`}
            >
              <Star className="mr-2 w-5 h-5 shrink-0" />
              Start Now
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
