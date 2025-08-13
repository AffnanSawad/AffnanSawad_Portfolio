import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-md font-semibold text-muted-foreground select-none">
        &copy; {new Date().getFullYear()} AffnanSawad.co. All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Back to top"
        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
