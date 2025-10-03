export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-foreground mb-6">{title}</h2>

      <>{children}</>
    </section>
  );
}
