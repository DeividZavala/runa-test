// ACTION TYPES
const FETCH_SUCCESS = 'runa-test/beers/FETCH_SUCCESS';

// INITIAL STATE
const initialState = {
	data: [],
	loading: true
};

// REDUCER
export default function reducer(state = initialState, action) {
	switch (action.type) {

		case FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload
			};

		default:
			return state;
	}
}

// ACTIONS
export function fetchBeersSuccess(beers){
	return {
		type: FETCH_SUCCESS,
		payload: beers
	}
}
