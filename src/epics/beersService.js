import {ajax} from "rxjs/ajax";
import {map} from 'rxjs/operators';
import {fetchBeersSuccess} from '../redux/ducks/beers';
const base_url = "https://api.punkapi.com/v2/";

export function fetchBeers(){
	return ajax.getJSON(`${base_url}/beers`)
		.pipe(
			map(res => fetchBeersSuccess(res))
		)
}
