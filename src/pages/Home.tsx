import Page from "@/components/layout/Page";
import Movie from "@/components/movie/Movie";
import { fetchLatestMovies } from "@/lib/fetcher";

export default function Home() {
  fetchLatestMovies().then((movies) => console.log(movies));

  return (
    <Page>
      <Movie
        movie={{
          adult: false,
          backdrop_path: "/1UlvMerlRfdj0UJwtIytLlAPGsJ.jpg",
          genre_ids: [35],
          id: 277351,
          original_language: "fr",
          original_title: "Incompatibles",
          overview:
            "Matthew has everything a young man could want: a large apartment in Monaco, which he shares with his best friend Sebastian, affluence and all the women he wants end up in his bed. When Emma young seasonal worker with a strong character, has no other choice but to live with him, disputes are in the air and their incompatibility is undoubtedly. Between battle of the sexes and life lessons, Emma and Matthew will share their conceptions of desire and the male / female relationship ... and gradually, disagreements will take less and less importance ...",
          popularity: 0.3463,
          poster_path: "/1UlvMerlRfdj0UJwtIytLlAPGsJ.jpg",
          release_date: "2013-12-14",
          title: "Incompatibles",
          video: false,
          vote_average: 4.5,
          vote_count: 6,
        }}
      />
    </Page>
  );
}
