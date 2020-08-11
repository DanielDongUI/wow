const initialState ={

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