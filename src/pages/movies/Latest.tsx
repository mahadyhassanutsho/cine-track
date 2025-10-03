import Page from "@/components/layout/Page";
import MovieSection from "@/components/layout/section/MovieSection";
import { fetchLatestMovies } from "@/lib/fetcher";

export default function Latest() {
  return (
    <Page>
      <MovieSection title="Latest Movies" fetcher={fetchLatestMovies()} />
    </Page>
  );
}
