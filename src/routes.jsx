import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";
import SinglePageFilm from "./pages/single-film-page/single-film-page";
import MyList from "./pages/my-list/my-list";
import MainCatalog from "./component/main-catalog/main-catalog";
import Authorization from "./pages/sign-in/authorization";
import { signIn, signUp, myFilmListPage, mainPage,moreInfoPage } from "./constance/rote-constance";

const Routes = () => {
  return (
    <Switch>
      <Route path={signIn} component={Authorization} />
      <Route path={signUp} component={Authorization} />
      <Route path={myFilmListPage} exact component={MyList} />

      <Route path={`${mainPage}:id?/:filmId?`}>
        <MainPage>
          {({ loading, films }) => {
            return (
              <Switch>
                <Route path={`${moreInfoPage}/:filmId`} exact>
                  <SinglePageFilm loading={loading} films={films} />
                </Route>
                <Route path={`${mainPage}:id?`} exact>
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
