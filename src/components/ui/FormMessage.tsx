interface FormMessageProps {
  message?: string;
}

export default function FormMessage({
  message,
}: FormMessageProps) {
  if (!message) return null;

  return (
    <p className="mt-2 text-sm text-red-400">
      {message}
    </p>
  );
}