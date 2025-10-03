import { BookmarkPlus, Star } from "lucide-react";
import Button from "@/components/ui/button/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/Card";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip/Tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/Dialog";

import type { Movie } from "@/types/global";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card className="w-80 py-0 bg-background/80 backdrop-blur-md overflow-hidden hover:scale-[1.02] transition">
      <div className="relative h-60 w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="object-cover w-full h-full"
        />

        <div className="absolute top-2 right-2 bg-background/90 rounded-lg px-2 py-1 flex items-center gap-1 text-sm font-medium shadow">
          <Star
            className={`h-4 w-4 ${
              movie.vote_average > 0
                ? "text-yellow-400 fill-yellow-400"
                : "text-muted-foreground"
            }`}
          />
          {movie.vote_average > 0 ? movie.vote_average.toFixed(1) : "N/A"}
        </div>
      </div>

      <CardHeader className="p-4">
        <CardTitle className="text-lg line-clamp-1">{movie.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : "Unknown"}
        </p>
      </CardHeader>

      <CardContent className="px-4 pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {movie.overview}
        </p>
      </CardContent>

      <CardFooter className="px-4 pb-4 flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{movie.title}</DialogTitle>
              <DialogDescription>
                Released:{" "}
                {movie.release_date
                  ? new Date(movie.release_date).toDateString()
                  : "Unknown"}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full md:w-1/3 rounded-lg shadow"
              />

              <div className="flex-1 space-y-2">
                <p className="text-sm text-muted-foreground">
                  {movie.overview}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Language:</span>{" "}
                  {movie.original_language?.toUpperCase()}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Rating:</span>{" "}
                  {movie.vote_average > 0
                    ? `${movie.vote_average.toFixed(1)} / 5`
                    : "Not Rated"}{" "}
                  ({movie.vote_count})
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Original Title:</span>{" "}
                  {movie.original_title}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Tooltip for Add to Watchlist */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full">
                <BookmarkPlus className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add to Watchlist</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
