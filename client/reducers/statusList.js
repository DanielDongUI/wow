const initialState ={
    loginPageStatus: "logedIn", //defualt
    mainPageStatus: "default", //logedOut
    currentPage: "Discover",
    createPageStatus: "close",
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
        case 'OPEN_CREATE' :
            return {
              ...state,
              createPageStatus: "open",
            }
        case 'CLOSE_CREATE' :
            return {
              ...state,
              createPageStatus: "close",

            }
        case 'PRESS_DISCOVER' :
            return {
              ...state,
              currentPage: "Discover"
            }
        case 'PRESS_COLLECTION' :
            return {
              ...state,
              currentPage: "Collection"
            }
        case 'PRESS_SEARCH' :
            return {
              ...state,
              currentPage: "Search"
            }
        case 'PRESS_PROFILE' :
            return {
              ...state,
              currentPage: "Profile"
            }
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