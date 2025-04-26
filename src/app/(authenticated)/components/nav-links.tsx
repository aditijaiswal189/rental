import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
    { label: 'Buy', href: '/buy' },
    { label: 'Rent', href: '/rent' },
    { label: 'Sell', href: '/sell' },
    { label: 'Agents', href: '/agents' },
  ];

  export const NavLinks: React.FC = () => (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map(({ label, href }) => (
        <Button
          key={label}
          asChild
          variant="ghost"
          className="font-medium"
        >
          <a href={href}>{label}</a>
        </Button>
      ))}
    </nav>
  );
  