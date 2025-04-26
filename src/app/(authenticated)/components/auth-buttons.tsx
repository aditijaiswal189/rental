import { Button } from "@/components/ui/button";

export const AuthButtons: React.FC = () => (
    <>
      <Button variant="ghost" className="hidden md:inline-flex">
        Sign In
      </Button>
      <Button className="hidden md:inline-flex">
        List Property
      </Button>
    </>
  );