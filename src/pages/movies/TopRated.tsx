import Page from "@/components/layout/Page";
import MovieSection from "@/components/layout/section/MovieSection";
import { fetchTopRatedMovies } from "@/lib/fetcher";

export default function TopRated() {
  return (
    <Page>
      <MovieSection title="Top Rated Movies" fetcher={fetchTopRatedMovies()} />
    </Page>
  );
}
