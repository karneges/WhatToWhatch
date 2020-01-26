import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import SinglePageFilm from './pages/single-film-page/single-film-page';
import MyList from './pages/my-list/my-list';

 
const Routes = () => {
  return (
    <Switch>
      <Route path="/:id?" exact component={MainPage}/>
      <Route path="/film/:id" component={SinglePageFilm}/>
      <Route path="/user" component={MyList}/>
    </Switch>
  )
}

export default Routes;