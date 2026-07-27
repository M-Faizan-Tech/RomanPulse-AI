import { Link } from "react-router-dom";
import zyvoraLogo from "@/assets/zyvora-logo.png";

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
    <footer
      className="
        border-t
        app-border
        bg-(--surface)
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-16
        "
      >
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Brand */}
          <div>
            <img
              src={zyvoraLogo}
              alt="Zyvora Labs"
              className="
                h-12
                w-auto
                object-contain
              "
            />

            <p className="mt-5 text-sm leading-7 app-muted">
              Zyvora Labs is building intelligent software solutions.
              RomanPulse AI is an AI-powered customer feedback
              intelligence platform for Pakistani social media brands.
            </p>
          </div>


          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-(--foreground)">
              Product
            </h3>

            <div className="space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="
                    block
                    text-sm
                    app-muted
                    transition-colors
                    hover:text-(--foreground)
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-(--foreground)">
              Company
            </h3>

            <div className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="
                    block
                    text-sm
                    app-muted
                    transition-colors
                    hover:text-(--foreground)
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-(--foreground)">
              Resources
            </h3>

            <div className="space-y-3">
              {resourceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="
                    block
                    text-sm
                    app-muted
                    transition-colors
                    hover:text-(--foreground)
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            app-border
            bg-(--background)
            px-6
            py-6
            text-sm
            app-muted
            rounded-xl
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} Zyvora Labs.
            All rights reserved.
          </p>

          <p>
            RomanPulse AI
          </p>

          <p>
            Built by Zyvora Labs • React • FastAPI • Gemini AI
          </p>
        </div>
      </div>
    </footer>
  );
}