import Page from "@/components/layout/Page";
import MovieSection from "@/components/layout/section/MovieSection";
import { fetchTrendingMovies } from "@/lib/fetcher";

export default function Trending() {
  return (
    <Page>
      <MovieSection title="Top Rated Movies" fetcher={fetchTrendingMovies()} />
    </Page>
  );
}
