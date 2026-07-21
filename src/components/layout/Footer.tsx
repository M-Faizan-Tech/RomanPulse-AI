import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";

const productLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analysis", href: "#" },
  { label: "Reports", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              AI Customer Feedback Intelligence Platform built for Pakistani
              social media brands. Understand your customers with AI-powered
              sentiment analysis and actionable insights.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>

            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>

            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} RomanPulse AI. All rights reserved.</p>

          <p>Built with React • FastAPI • Gemini AI</p>
        </div>
      </div>
    </footer>
  );
}