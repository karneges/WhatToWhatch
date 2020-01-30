import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";
import SinglePageFilm from "./pages/single-film-page/single-film-page";
import MyList from "./pages/my-list/my-list";
import MainCatalog from "./component/main-catalog/main-catalog";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/film/:id?"   component={SinglePageFilm}/> */}
      <Route path="/mylist" exact  component={MyList}/>

      <Route path="/:id?/:filmId?" >
        <MainPage>
          {({loading,films}) => {
            return (
              <Switch>

                <Route path="/film/:filmId" exact>
                <SinglePageFilm loading={loading} films={films} />
                </Route>
                <Route path="/:id?" exact>
                <MainCatalog loading={loading} films={films} />
                </Route>
              </Switch>
            );
          }}
        </MainPage>
      </Route>
    </Switch>
  );
};

export default Routes;
