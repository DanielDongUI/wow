const initialState ={
    loginPageStatus: "default", //defualt
    mainPageStatus: "logedOut", //logedOut
    currentUser: null, 
}


const statusList = (state = initialState, action) =>{
  console.log("action.payload: "+ action.payload)
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
        case 'LOGED_IN' :
            return {
              ...state,
              loginPageStatus: "logedIn",
              mainPageStatus: "default",
              currentUser: action.payload, 
            }

        //mainPage

        case 'LOGED_OUT' :
            return {
              ...state,
              mainPageStatus: "logedOut",
              loginPageStatus: "default"
            }
        default:
            return state
    }
}

export default statusList;