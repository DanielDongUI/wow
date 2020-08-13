const initialState ={
  eventList: [
    {
      eventId :1,
      eventTitle: "一起看电影" ,
      eventDetail: "最近新上映了一个电影叫 xxx， 没人陪我去看，想找个人一起看",
      location: "none", // none
      time: "none", //none
      collectionCount:10,
      userId:"1",
      eventImg: require("../data/eventImg/1.jpg"),
      releaseDate: "2020/08/12/16:56",
      timeFromRelease: "3 mins ago",
    },
    {
      eventId :2,
      eventTitle: "一起吃夜宵" ,
      eventDetail: "有木有人一起吃个夜宵，一起长胖一起快乐",
      location: "none", // none
      time: "none", //none
      collectionCount:16,
      userId:"2",
      eventImg: require("../data/eventImg/2.jpg"),
      releaseDate: "2020/08/11/1:24",
      timeFromRelease: "4 hours ago",
    },
    {
      eventId :3,
      eventTitle: "一起来植树" ,
      eventDetail: "多一点绿色，来一起植树",
      location: "none", // none
      time: "none", //none
      collectionCount:100,
      userId:"1",
      eventImg: require("../data/eventImg/3.jpeg"),
      releaseDate: "2020/08/12/10:04",
      timeFromRelease: "2 days ago",

    }
  ]
}


const eventList = (state = initialState, action) =>{
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

export default eventList;