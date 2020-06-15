const defaultState = ['hyc']

export default function(state = defaultState,action){
    switch(action.type){
        case 'add_list':
            let newState = [...state];
            newState.push(action.value);
            return newState;
        default:
            return state;
    }
}