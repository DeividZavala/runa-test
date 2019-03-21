import React from 'react';
import {Switch, Route} from 'react-router-dom';
import BeersContainer from './beers/containers/beers-container';

const Router = () => (
	<Switch>
		<Route exact path="/" component={BeersContainer}/>
	</Switch>
);

export default Router;
