export default (state = {bodyType: null}, action) =>{
    switch(action.type){
        case 'BODY_PAGE':
                return action.payload
        default:
            return state;
        
    }
}