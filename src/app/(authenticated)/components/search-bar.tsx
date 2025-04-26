import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar: React.FC = () => (
    <div className="relative hidden md:block w-[300px]">
      <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search properties..."
        className="pl-10"
      />
    </div>
  );