const initialState ={
    loginPageStatus: "logedIn", //defualt
    mainPageStatus: "default", //logedOut
    currentPage: "Discover", //Discover
    createPageStatus: "close", //close
    filterStatus: "close", //close
    settingStatus:"close", //close
    currentUser: "1", //null
    currentEvent: null,
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
        case 'PRESS_MESSAGE' :
            return {
              ...state,
              currentPage: "Message"
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
        case 'OPEN_FILTER' :
            return {
                ...state,
                filterStatus : "open"
            } 
        case 'CLOSE_FILTER' :
            return {
                ...state,
                filterStatus : "close"
            }
        case 'OPEN_SETTING' :
            return {
                ...state,
                settingStatus : "open"
            }
        case 'CLOSE_SETTING' :
            return {
                ...state,
                settingStatus : 'close'
            }   
        //Discover
        case 'OPEN_EVENT' :
            return {
                ...state,
                currentEvent: action.payload
            }
        case 'CLOSE_EVENT' :
            return {
                ...state,
                currentEvent : null
            }      
        default:
            return state
    }
}

export default statusList;