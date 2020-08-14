const initialState ={
    user:[{
        userName: "dong784500",
        password: "Dzp784500",
        userId: "1",
        email: "dong784500@hotmail.com",
        firstName: "Zhiping",
        lastName: "dong",
        eventId: [1,3],
        userImg: require("../data/userImg/1.jpeg"),
    },{
        userName: "yuanxinyang",
        password: "Dzp784500",
        userId: "2",
        email: "yuanxinyang@hotmail.com",
        firstName: "Xinyang",
        lastName: "Yuan",
        eventId: [2],
        userImg: require("../data/userImg/2.jpg"),
    },
    {
        userName: "半藏森林",
        password: "Dzp784500",
        userId: "3",
        email: "banzangsenlin@hotmail.com",
        firstName: "senlin",
        lastName: "banzang",
        eventId: [4],
        userImg: require("../data/userImg/3.jpg"),
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