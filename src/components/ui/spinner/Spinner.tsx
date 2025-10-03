export default function Spinner({
  size = 8,
  centered = false,
}: {
  size?: number;
  centered?: boolean;
}) {
  return (
    <div
      className={`border-4 border-t-primary border-bg rounded-full animate-spin ${
        centered ? "mx-auto" : ""
      }`}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    />
  );
}
