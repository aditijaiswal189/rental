import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const MobileMenuButton: React.FC = () => (
  <Button variant="ghost" size="icon" className="md:hidden">
    <Menu className="w-5 h-5" />
  </Button>
);