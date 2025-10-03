import { Suspense } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import type { Movie } from "@/types/global";
import Section from "@/components/layout/section/Section";
import MovieCard from "@/components/movie/MovieCard";
import List from "@/components/ui/list/List";
import Spinner from "@/components/ui/spinner/Spinner";
import Button from "@/components/ui/button/Button";

export default function MovieSection({
  title,
  fetcher,
  short = false,
}: {
  title: string;
  fetcher: Promise<Movie[]>;
  short?: boolean;
}) {
  return (
    <Section title={title}>
      <Suspense fallback={<Spinner size={4} centered />}>
        <div className="flex flex-col gap-4">
          <List
            fetcher={fetcher.then((data) => (short ? data!.slice(0, 6) : data))}
            componentRenderer={(movie) => <MovieCard movie={movie} />}
            classList="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4"
          />

          {short && (
            <Button variant="link" className="w-fit ml-auto">
              <Link to="">See More</Link>
              <ArrowRight />
            </Button>
          )}
        </div>
      </Suspense>
    </Section>
  );
}
