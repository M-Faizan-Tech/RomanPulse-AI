import { Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <PageContainer>
        <div
          className="
            glass
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            px-8
            py-16
            text-center
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-primary/30
            md:px-16
            md:py-20
          "
        >
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          </div>

          {/* Heading */}
          <h2 className="gradient-text text-4xl font-bold tracking-tight md:text-5xl">
            Start Understanding Your Customers Today
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Analyze Roman Urdu customer feedback with AI-powered insights,
            discover trends, and respond faster with actionable
            recommendations.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/login">
              <Button
                size="lg"
                className="min-w-[180px] cursor-pointer"
              >
                Start Free
              </Button>
            </Link>

            <Link to="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[180px] cursor-pointer"
              >
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}