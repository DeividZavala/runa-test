import {ajax} from "rxjs/ajax";
import {map, switchMap} from 'rxjs/operators';
import {fetchBeersSuccess, setStatus, FETCH_DATA} from '../redux/ducks/beers';
import {concat, of} from 'rxjs'
import {ofType} from "redux-observable";

const base_url = "https://api.punkapi.com/v2/";

export function fetchBeersEpics(action$){
	return action$
		.pipe(
			ofType(FETCH_DATA),
			switchMap(() => {
				return concat(
					of(setStatus("pending")),
					ajax.getJSON(`${base_url}/beers`)
						.pipe(
							map(res => fetchBeersSuccess(res))
						)
				)
			})
		)
}
