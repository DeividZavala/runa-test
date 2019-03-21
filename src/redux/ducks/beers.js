// ACTION TYPES
export const SET_STATUS = 'runa-test/beers/FETCH_SUCCESS';
export const FETCH_DATA = 'runa-test/beers/FETCH_SUCCESS';
export const FETCH_SUCCESS = 'runa-test/beers/FETCH_SUCCESS';

// INITIAL STATE
const initialState = {
	data: [],
	status: "" // "" | pending | success | failure
};

// REDUCER
export default function reducer(state = initialState, action) {
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
		type: FETCH_SUCCESS,
		payload: status
	}
}

export function fetchBeersSuccess(beers){
	return {
		type: FETCH_SUCCESS,
		payload: beers
	}
}
