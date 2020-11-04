const initialState={
    login: false
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case('LOGOUT'):
        return {
            login: false
        }
        case('LOGIN_SUCCESS'):
        return{
            login: true
        }
        default:
            return state;
    }
}

export default reducer;