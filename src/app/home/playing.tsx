"use client";

import { MovieListResponse } from "@/types/movie";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import "../../../public/styles/playing.scss";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type IPlaying = {
  list: MovieListResponse;
};

useEmblaCarousel.globalOptions = { loop: true };

export default function Playing({ list }: IPlaying) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [current, setCurrent] = useState<{
    poster_path: string;
    title: string;
    vote_average: number;
    genre_names: string[];
  } | null>(null);

  const logEmblaEvent = useCallback(
    (emblaApi: EmblaCarouselType) => {
      const selectedSnap = emblaApi.selectedScrollSnap();

      const movie = list?.results[selectedSnap];

      if (movie) {
        setCurrent({
          poster_path: movie.poster_path,
          title: movie.title ?? movie.original_title,
          vote_average: movie.vote_average,
          genre_names: movie.genre_names,
        });
      }
    },
    [list]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", logEmblaEvent);
      logEmblaEvent(emblaApi); // Initialize with the first movie
    }
  }, [emblaApi, logEmblaEvent]);

  return (
    <div>
      <div className="flex items-baseline justify-between p-4">
        <h1 className="text-[25px] text-mediumBlack font-medium">Playing</h1>
        <button className="text-gray text-[18px] font-light">
          See All {">"}
        </button>
      </div>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {list?.results.map((movie, index) => (
              <div className="embla__slide" key={index}>
                <Image
                  placeholder="empty"
                  src={movie.poster_path}
                  alt={movie.title}
                  className="rounded-lg mx-auto shadow-lg"
                  width={200}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {current && (
        <div className="mt-4 text-center">
          <h1 className="font-semibold text-[20px] text-mediumBlack">
            {current.title}
          </h1>
          <div>⭐ {current.vote_average.toFixed(1)}</div>
          <div>{current.genre_names.join(", ")}</div>
        </div>
      )}
    </div>
  );
}
