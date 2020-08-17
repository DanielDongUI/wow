const initialState ={
  eventList: [
    {
      eventId :"1",
      eventTitle: "一起看电影" ,
      eventDetail: "最近新上映了一个电影叫流浪地球， 没人陪我去看，想找个人一起看",
      //location: "none", // none
      time: "none", //none
      collectionCount:10,
      userId:"1",
      eventImg: require("../data/eventImg/1.jpg"),
      eventImgSrc: "../data/eventImg/1.jpg",
      eventImgList: [{
        url: '',
        props: {
            source: require("../data/eventImg/1.jpg")
        }},
        {
          url: '',
          props: {
              source: require("../data/eventImg/1-2.jpeg")
          }},
          {
            url: '',
            props: {
                source: require("../data/eventImg/1-3.jpeg")
            }},
            {
              url: '',
              props: {
                  source: require("../data/eventImg/1-4.jpeg")
              }},
              {
                url: '',
                props: {
                    source: require("../data/eventImg/1-5.jpeg")
                }}
        ],
      releaseDate: "2020/08/12/16:56",
      timeFromRelease: "3 mins ago",
      location: "中关村万达国际影院",
    },
    {
      eventId :"2",
      eventTitle: "一起吃夜宵" ,
      eventDetail: "有木有人一起吃个夜宵，一起长胖一起快乐",
      //location: "none", // none
      time: "none", //none
      collectionCount:16,
      userId:"2",
      eventImg: require("../data/eventImg/2.jpg"),
      eventImgSrc: "../data/eventImg/2.jpg",
      eventImgList: [{
        url: '',
        props: {
            source: require("../data/eventImg/2.jpg")
        }},
        {
          url: '',
          props: {
              source: require("../data/eventImg/2-2.jpg")
          }},
          {
            url: '',
            props: {
                source: require("../data/eventImg/2-3.jpg")
            }},
        ],
      releaseDate: "2020/08/11/1:24",
      timeFromRelease: "4 hours ago",
      location: "羊大爷铜锅涮肉 清华店"
    },
    {
      eventId :"3",
      eventTitle: "一起来植树" ,
      eventDetail: "多一点绿色，来一起植树",
      //location: "none", // none
      time: "none", //none
      collectionCount:100,
      userId:"1",
      eventImg: require("../data/eventImg/3.jpeg"),
      eventImgSrc: "../data/eventImg/3.jpeg",
      eventImgList: [{
        url: '',
        props: {
            source: require("../data/eventImg/3.jpeg")
        }},
        {
          url: '',
          props: {
              source: require("../data/eventImg/3-2.jpg")
          }},
        ],
      releaseDate: "2020/08/12/10:04",
      timeFromRelease: "2 days ago",
      location: "北京动物园",
    },
    {
      eventId :"4",
      eventTitle: "哥哥要不要看茶艺" ,
      eventDetail: "吃点奶油，喝点绿茶",
      time: "none", //none
      collectionCount:25,
      userId:"3",
      eventImg: require("../data/eventImg/4.jpg"),
      eventImgSrc: "../data/eventImg/4.jpg",
      eventImgList: [{
        url: '',
        props: {
            source: require("../data/eventImg/4.jpg")
        }},
        {
          url: '',
          props: {
              source: require("../data/eventImg/4-2.jpeg")
          }},
          {
            url: '',
            props: {
                source: require("../data/eventImg/4-3.jpg")
            }}
        ],
      releaseDate: "2020/08/11/20:30",
      timeFromRelease: "3 days ago",
      location: "我家",
    }
  ]
}


const eventList = (state = initialState, action) =>{
  //console.log("action.id: "+ action.id)
  //console.log("action.type: "+ action.type)
    switch (action.type) {
        
        case 'ADD_COLLECTION_COUNT':
            return {
              ...state,
              // eventList: [...state.eventList.map(item => {
              //   if(item.eventId===action.payload[0]){
              //     let array = item.
              //   }
              //   return item
              // })]
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