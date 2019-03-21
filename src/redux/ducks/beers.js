// ACTION TYPES
export const SET_STATUS = 'runa-test/beers/SET_STATUS';
export const FETCH_DATA = 'runa-test/beers/FETCH_DATA';
export const FETCH_SUCCESS = 'runa-test/beers/FETCH_SUCCESS';
export const SEARCH = 'runa-test/beers/SEARCH';

// INITIAL STATE
const initialState = {
	data: [],
	status: "" // "" | pending | success | failure
};

// REDUCER
export default function reducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {

		case SET_STATUS:
			return {
				...state,
				status: action.payload
			};

		case FETCH_SUCCESS:
			return {
				...state,
				status: "success",
				data: action.payload
			};

		default:
			return state;
	}
}

// ACTIONS
export function fetchBeers(){
	return {
		type: FETCH_DATA
	}
}

export function setStatus(status){
	return {
		type: SET_STATUS,
		payload: status
	}
}

export function searchBeer(input){
	return {
		type: SEARCH,
		payload: input
	}
}

export function fetchBeersSuccess(beers){
	return {
		type: FETCH_SUCCESS,
		payload: beers
	}
}
