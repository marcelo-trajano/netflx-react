import React, { useState, useEffect } from "react";
import "./FeatureMovie.css";

export default ({ movie }) => {
  let airDate = new Date(movie.first_air_date);

  let generos = [];

  for (let i in movie.genres) {
    generos.push(movie.genres[i].name);
  }

  return (
    <section
      className="featureMovie"
      style={{
        backgroudSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="featureMovie--vertical">
        <div className="featureMovie--horizontal">
          <div className="featureMovie--title">{movie.original_name}</div>
          <div className="featureMovie--info">
            <div className="featureMovie--points">
              {movie.vote_average} pontos
            </div>
            <div className="featureMovie--year">{airDate.getFullYear()}</div>
            <div className="featureMovie--seasons">
              {movie.number_of_seasons} temporada
              {movie.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featureMovie--descrition">{movie.overview}</div>
          <div className="featureMovie--bottons">
            <a
              className="featureMovie--bottons--watch"
              href={`/watch/${movie.id}`}
            >
              ► Assistir
            </a>
            <a
              className="featureMovie--bottons--add"
              href={`/list/add/${movie.id}`}
            >
              + Minha Lista
            </a>
          </div>
          <div className="featureMovie--geners">
            Gêneros: {generos.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
