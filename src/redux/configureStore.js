import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {of} from 'rxjs';
import posts from './ducks/posts';

const epic1 = () => of({type: "ADD_NAME", payload: "Oswaldo"});

export default function configureStore(){

    const rootEpic = combineEpics(epic1);
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        posts
    });

    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
