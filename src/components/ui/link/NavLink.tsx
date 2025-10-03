import { NavLink as Link } from "react-router";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      to={href}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive
            ? "border border-primary"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )
      }
    >
      {children}
    </Link>
  );
}
