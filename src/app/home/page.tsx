"use client";

import { useEffect, useState } from "react";
import Playing from "./playing";
import { getData } from "@/lib/http";
import { BASE_API_URL } from "@/models/api";
import { MovieListResponse } from "@/types/movie";

export default function Home() {
  const [movies, setMovies] = useState<MovieListResponse>();

  useEffect(() => {
    const get = async () => {
      const result = await getData(BASE_API_URL + "movies");

      if (result) {
        setMovies(result);
      }
    };

    get();
  }, []);

  return (
    <main className="bg-white">
      <Playing list={movies!} />
    </main>
  );
}
