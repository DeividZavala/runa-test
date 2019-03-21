import {ajax} from "rxjs/ajax";
import {catchError, debounceTime, map, switchMap} from 'rxjs/operators';
import {fetchBeersSuccess, setStatus, FETCH_DATA, SEARCH, fetchBeersFailed, FETCH_BEER} from '../redux/ducks/beers';
import {of, concat} from "rxjs";
import {ofType} from "redux-observable";

const base_url = "https://api.punkapi.com/v2";

export function fetchBeersEpics(action$){
	return action$.pipe(
		ofType(FETCH_DATA),
		switchMap(() => {
			return concat(
				of(setStatus("pending")),
				ajax.getJSON(`${base_url}/beers?per_page=52`)
					.pipe(
						map(res => fetchBeersSuccess(res))
					)
			)
		})
	)
}

export function fetchBeerByIdEpics(action$){
	return action$.pipe(
		ofType(FETCH_BEER),
		switchMap(({payload}) => {
			return concat(
				of(setStatus("pending")),
				ajax.getJSON(`${base_url}/beers/${payload}`)
					.pipe(
						map(res => fetchBeersSuccess(res))
					)
			)
		})
	)
}

export function SearchBeersEpics(action$){
	return action$.pipe(
		ofType(SEARCH),
		debounceTime(500),
		switchMap(({payload}) => {
			return concat(
				of(setStatus("pending")),
				ajax.getJSON(`${base_url}/beers?beer_name=${encodeURIComponent(payload)}`)
					.pipe(
						map(res => fetchBeersSuccess(res)),
						catchError(err => {
							return of(fetchBeersFailed(err.response.message))
						})
					)
			)
		})
	)
}
