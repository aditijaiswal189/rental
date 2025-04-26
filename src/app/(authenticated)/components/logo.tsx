import { Home } from "lucide-react";

export const Logo: React.FC = () => (
    <div className="flex items-center">
      <Home className="w-6 h-6 text-primary" />
      <span className="ml-2 text-xl font-semibold">PropertyFinder</span>
    </div>
  );