import Page from "@/components/layout/Page";
import MovieSection from "@/components/layout/section/MovieSection";
import {
  fetchLatestMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "@/lib/fetcher";

export default function Home() {
  return (
    <Page>
      <MovieSection title="Latest Movies" fetcher={fetchLatestMovies()} short />
      <MovieSection
        title="Trending Movies"
        fetcher={fetchTrendingMovies()}
        short
      />
      <MovieSection
        title="Top Rated Movies"
        fetcher={fetchTopRatedMovies()}
        short
      />
    </Page>
  );
}
