const defaultState = ['hyc'];

export default function(state = defaultState,action){
    switch(action.type){
        case 'add_list':
            if (action.value !== '') {
                let newState = [...state];
                newState.push(action.value);
                return newState; 
            }else{
                return state;
            }
        default:
            return state;
    }
}