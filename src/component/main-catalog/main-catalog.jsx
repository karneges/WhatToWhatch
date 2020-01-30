import React from "react";
import FilterTabs from "../tabs-filter/tabs-filter";
import MovieList from "./../movies-list/movies-list";
import Loading from "../loading/loading";
import { useState } from "react";
const MainCatalog = ({ films, loading }) => {
  const [filter, setFilter] = useState('');
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilterTabs setFilter={setFilter} filter={filter} />
      {loading && <Loading />}
      {!loading && films !== null && (
        <MovieList dataFilms={films} filter={filter} />
      )}

      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
};
export default MainCatalog;
