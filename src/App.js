import React, { useState, useEffect } from "react";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";
import "./App.css";
import Api from "./Api";

export default () => {
  const [items, setitems] = useState([]);
  const [featureMovie, setfeatureMovie] = useState(null);
  const [black, setblack] = useState(false);

  useEffect(() => {
    const getMovieList = async () => {
      let movieList = await Api.getHomeList();

      //setitems(movieList);

      let originals = movieList.filter((i) => i.slug === "originals");
      let randomMovie = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let movie = await Api.getMovieInfo(
        originals[0].items.results[randomMovie].id,
        "tv"
      );
      console.log(movie.info);
      //setfeatureMovie(movie.info);
    };
    getMovieList();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblack(true);
      } else {
        setblack(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={black} />
      {featureMovie && <FeatureMovie movie={featureMovie} />}

      <section className="lists">
        {items.map((item, key) => {
          return <MovieRow key={key} data={item} />;
        })}
      </section>
      <footer>
        Feito com
        <span role="img" aria-label="coracao">
          💖
        </span>
        por Marcelo T.
        <br />
        Copyright © 2020 Netflix. All Rights Reserved.
        <br />
      </footer>
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" />
      </div>
    </div>
  );
};
