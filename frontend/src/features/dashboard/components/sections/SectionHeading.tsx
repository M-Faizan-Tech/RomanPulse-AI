interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-1 text-sm text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}