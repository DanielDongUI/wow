const initialState ={
    loginPageStatus: "default"
}


const statusList = (state = initialState, action) =>{
  console.log("action.id: "+ action.id)
  console.log("action.type: "+ action.type)
    switch (action.type) {
        
        case 'IN_SIGN_UP':
            return {
                ...state,
                loginPageStatus: "signup"
            }
        case 'IN_LOG_IN':
            return {
                ...state,
                loginPageStatus: "login"
            }
        case 'CLOSE_LOG_IN' :
            return {
              ...state,
              loginPageStatus: "default"
            }
        default:
            return state
    }
}

export default statusList;