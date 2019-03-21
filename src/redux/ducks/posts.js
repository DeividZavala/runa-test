export default function reducer(state = ["david"], action = {}) {
    switch (action.type) {

        case "ADD_NAME":
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
}
