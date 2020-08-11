const initialState ={
    user:[{
        userName: "dong784500",
        password: "dzp784500",
        userId: "000001",
        email: "dong784500@hotmail.com",
        firstName: "Zhiping",
        lastName: "dong",
        eventId: 1,
    },{
        userName: "yuanxinyang",
        password: "dzp784500",
        userId: "000002",
        email: "yuanxinyang@hotmail.com",
        firstName: "Xinyang",
        lastName: "Yuan",
        eventId: 2,
    }
],
}


const userList = (state = initialState, action) =>{
  //console.log("action.id: "+ action.id)
  //console.log("action.type: "+ action.type)
    switch (action.type) {
        
        case 'REMOVE_FROM_MYLIST':
            return {
              mylist: [...state.mylist.filter(item => item !== action.payload)],
              recommendations: [...state.recommendations, action.payload]
            }
        case 'ADD_TO_MYLIST' :
            return {
              recommendations: [...state.recommendations.filter(item => item !== action.payload)],
              mylist: [...state.mylist, action.payload]
            }
        default:
            return state
    }
}

export default userList;