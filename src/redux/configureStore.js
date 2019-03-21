import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {fetchBeersEpics, SearchBeersEpics, fetchBeerByIdEpics} from '../epics/beersEpics';
import posts from './ducks/posts';
import beers from './ducks/beers';


export default function configureStore(){

    const rootEpic = combineEpics(fetchBeersEpics, SearchBeersEpics, fetchBeerByIdEpics);

    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
			posts,
			beers
    });

		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
				composeEnhancers(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);

    return store;
}
