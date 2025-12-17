import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/consultation", label: "Consult Online" },
    { href: "/appointments", label: "Appointments" },
    { href: "/messages", label: "Messages" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-serif text-foreground tracking-tight">CareConnect-TeleHealth</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/consultation" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
