import {fromJS} from 'immutable'

const defaultState = fromJS(['hyc']);

export default function(state = defaultState,action){
    switch(action.type){
        case 'add_list':
            if (action.value !== '') {
                return state.push(action.value);
            }else{
                return state;
            }
        case 'delete_list':
            return state.delete(action.value);
        case 'test':
            let newState = state.push(1);
            return newState.pop();
        default:
            return state;
    }
}