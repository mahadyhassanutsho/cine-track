import { use } from "react";

export default function List<T>({
  fetcher,
  componentRenderer,
  classList = "",
}: {
  fetcher: Promise<T[]>;
  componentRenderer: (item: T) => React.ReactNode;
  classList?: string;
}) {
  const data = use(fetcher);

  return (
    <ul className={`${classList}`}>
      {data.map((item, i) => (
        <li key={i}>{componentRenderer(item)}</li>
      ))}
    </ul>
  );
}
