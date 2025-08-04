// config/nav.ts
export type NavChild = {
    label: string;
    href: string;
    description?: string;
  };
  
  export type NavItem = {
    label: string;
    href?: string;
    children?: NavChild[];
  };
  
  export const NAV_ITEMS: NavItem[] = [
    {
      label: "Features",
      children: [
        { label: "Roadmapping", href: "/features/roadmaps" },
        { label: "Specs", href: "/features/specs" },
        { label: "Backlog", href: "/features/backlog" },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];
  