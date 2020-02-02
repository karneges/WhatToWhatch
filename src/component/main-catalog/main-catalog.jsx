import React from "react";
import FilterTabs from "../tabs-filter/tabs-filter";
import MovieList from "./../movies-list/movies-list";
import Loading from "../loading/loading";
import { useState } from "react";
const MainCatalog = ({ films, loading }) => {
  const [countFilms, setCountFilms] = useState(12);
  const buttons = [
    { "All genres": [""] },
    { Comedies: ["Comedy"] },
    { Crime: ["Crime"] },
    { Dramas: ["Drama"] },
    { Action: ["Action"] },
    { "Kids & Family": ["Fantasy", "Adventure"] },
    { Thrillers: ["Thriller"] }
  ];

  const [filter, setFilter] = useState("");
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilterTabs
        setFilter={setFilter}
        filter={filter}
        buttons={buttons}
        className={"catalog__genres-list"}
      />
      {loading && <Loading />}
      {!loading && films !== null && (
        <MovieList dataFilms={films} filter={filter} countFilms={countFilms} />
      )}

      <div className="catalog__more">
        <button
          onClick={() => setCountFilms(s => s + 10)}
          className="catalog__button"
          type="button"
        >
          Show more
        </button>
      </div>
    </section>
  );
};
export default MainCatalog;
