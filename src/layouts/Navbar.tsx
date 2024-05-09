import * as React from "react";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils";

const setup: { title: string; href: string; description: string }[] = [
  {
    title: "Equipamentos",
    href: "/setup/equipments",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Stack",
    href: "/setup/stack",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const about: { title: string; href: string; description: string }[] = [
  {
    title: "Sobre mim",
    href: "/about/me",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Projetos",
    href: "about/projects",
    description:
      "For sighted users to preview content available behind a link.",
  },
];


export function Navbar() {
  return (
    <div className="flex justify-between items-center w-full h-32">
      {/* Brand Section */}
      <div className="flex items-center justify-center space-x-2">
        <img
          src="/public/assets/logo.svg"
          alt="Bruno Scarpari's logo"
          className="h-12 hover:opacity-80 transition-opacity duration-200 ease-in-out hover:trasform hover:scale-105"
        />
      </div>

      <NavigationMenu className="border flex-1 justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Setup</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-1 w-full min-w-[300px]">
                {setup.map((s) => (
                  <ListItem key={s.title} title={s.title} href={s.href}>
                    {s.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-1 w-full min-w-[300px]">
                {about.map((a) => (
                  <ListItem
                    key={a.title}
                    title={a.title}
                    href={a.href}
                  >
                    {a.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="/services">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Serviços
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button as="a" href="/solicitar-proposta" size="lg">
        Solicitar proposta
      </Button>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
