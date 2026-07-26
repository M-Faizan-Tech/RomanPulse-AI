import PageContainer from "@/components/layout/PageContainer";

export default function DashboardPreview() {
  return (
    <section className="py-28">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Dashboard
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            See Your Business at a Glance
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Track customer sentiment, complaints, and AI insights from one
            beautiful dashboard.
          </p>
        </div>

        <div className="glass glow mt-16 rounded-3xl border border-white/10 p-8">
          <div className="grid gap-6 md:grid-cols-4">
            <MetricCard title="Comments" value="2,486" />
            <MetricCard title="Positive" value="81%" />
            <MetricCard title="Negative" value="12%" />
            <MetricCard title="Health Score" value="92/100" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Sentiment Distribution
              </h3>

              <div className="h-64 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-zinc-500">
                Chart coming soon
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Top Complaint Categories
              </h3>

              <div className="space-y-3">
                <ComplaintRow title="Slow Service" value="42%" />
                <ComplaintRow title="Late Delivery" value="28%" />
                <ComplaintRow title="Product Quality" value="17%" />
                <ComplaintRow title="Other" value="13%" />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-5">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function ComplaintRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
      <span>{title}</span>
      <span className="font-semibold text-violet-400">{value}</span>
    </div>
  );
}