import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {fetchBeers} from '../epics/beersService';
import posts from './ducks/posts';
import beers from './ducks/beers';


export default function configureStore(){

    const rootEpic = combineEpics(fetchBeers);

    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
			posts,
			beers
    });

    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
