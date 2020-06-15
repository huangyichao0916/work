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
        case 'delete_list':
            let newState = [...state];
            newState.splice(action.value,1);
            return newState;
        default:
            return state;
    }
}