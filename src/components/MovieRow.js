import React, { useState } from "react";
import "../components/MovieRow.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
const IMG_PATH = "https://image.tmdb.org/t/p/w300";

export default ({ data }) => {
  const [scroll, setscroll] = useState(-400);
  const [width, setwidth] = useState(0);

  const moveListToLeft = () => {
    let x = scroll + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }
    setscroll(x);
  };

  const moveListToRight = () => {
    let x = scroll - Math.round(window.innerWidth / 2);
    let listW = data.items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setscroll(x);
  };

  //console.log(data);

  return (
    <div className="movieRow">
      <h2>{data.title}</h2>
      <div className="movieRow--left" onClick={moveListToLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={moveListToRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-listarea">
        <div
          className="movieRow-list"
          style={{ marginLeft: scroll, width: data.items.results.length * 150 }}
        >
          {data.items.results.length > 0 &&
            data.items.results.map((item, key) => {
              return (
                <div key={key} className="movieRow-item">
                  <img src={`${IMG_PATH}${item.poster_path}`} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
