const defaultState = ['hyc']

export default function(state = defaultState,action){
    switch(action.type){
        case 'add_list':
            let newState = [...state];
            newState.push(action.value);
            return newState;
        // case 'add_list':
        //     state.push(action.value);
        //     return state;
        default:
            return state;
    }
}