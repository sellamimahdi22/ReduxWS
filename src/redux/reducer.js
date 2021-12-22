import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./Typeaction"

const init = {
    tasks:
        [
            { id: Math.random(), Action: "work redux", isDone: false },
            { id: Math.random(), Action: "work react", isDone: true },
        ], 
        filter:false,
};
const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD:
            return {...state,tasks:[...state.tasks, payload]}
        case DELETE:
            return {...state,tasks:state.tasks.filter((el) => el.id !== payload)};

        case COMPLETE:
            return {...state,tasks:state.tasks.map((el) => el.id === payload ? { ...el, isDone: !el.isDone } : el)}

        case EDIT:
            return {...state,tasks:state.tasks.map((el) => (el.id === payload.id ? payload : el))}
            case FILTER : 
            return{ ...state,filter:!state.filter}
        default:
            return state;

    }
};

export default reducer;