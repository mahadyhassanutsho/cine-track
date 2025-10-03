import type { Movie } from "@/types/global";

// const API_KEY = import.meta.env.TMDB_API_KEY!;
const API_KEY = "2e3d6e11306c528533e7a26cbedb37fd";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMoviesByQuery(query: string): Promise<[Movie]> {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();
  return data.results;
}

export async function fetchTrendingMovies(): Promise<[Movie]> {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchTopRatedMovies(): Promise<[Movie]> {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export async function fetchLatestMovies(): Promise<[Movie]> {
  const res = await fetch(`${BASE_URL}/movie/latest?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
}
