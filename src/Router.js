import React from 'react';
import {Switch, Route} from 'react-router-dom';
import BeersContainer from './beers/containers/beers-container';
import BeerDetailContainer from "./beers/containers/beer-detail-container";

const Router = () => (
	<Switch>
		<Route exact path="/" component={BeersContainer}/>
		<Route exact path="/:id" component={BeerDetailContainer}/>
	</Switch>
);

export default Router;
