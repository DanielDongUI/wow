import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions,TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEvent } from "../../actions/eventActions"

class Discover extends React.Component {

    openEvent=(event)=>{
        //console.log(event)
        this.props.openEvent(event)
    }
    render(){

        return(
            <View style={this.props.currentPage==="Discover" ? styles.container : {display:'none'}}>
                <ScrollView vertical={true} contentContainerStyle={{flexGrow: 1}}>
                <View styles={styles.eventWrapper}>
                    {this.props.eventList.map((item,index)=>{
                        let user = this.props.userList.filter(user=>user.userId===item.userId)
                        //console.log(user)
                        return (<TouchableOpacity key = {index} style={styles.eventContainer} onPress = {()=>this.openEvent(item)}> 
                                    <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{item.eventTitle}</Text>
                                    <Image
                                            style={styles.starIcon}
                                            source = {require('./icon/star.png')}
                                    />
                                    <Text style={styles.collectionCount} >{item.collectionCount}</Text>
                                    </View>
                                    <Text style={styles.detail}>{item.eventDetail}</Text>
                                    <View style={styles.imgContainer}>
                                        <Image  
                                            style={item.eventImg=== null ? {display : 'none'} : styles.eventImg }
                                            source = {item.eventImg}
                                        />
                                    </View>
                                    <View style={styles.info}> 
                                        <Image
                                            style={styles.userImg}
                                            source = {user[0].userImg}
                                        />
                                        <Text style={styles.userName}>{user[0].userName}</Text>
                                        <Text style={styles.time}>{item.timeFromRelease}</Text>
                                    </View>
                                </TouchableOpacity>)
                    })}
                </View>  
                </ScrollView>           
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor: "#F5F5F5",
        height:deviceHeight*0.83,

    },
    eventWrapper: {
        //flexDirection: 'row',
        flexWrap: 'wrap', 
        margin:6,
        alignItems:'center'
    },
    eventContainer:{
        width:deviceWitdth,
        marginTop:6,
        backgroundColor: "white",
 
        paddingLeft:deviceWitdth*0.03,
        paddingRight:deviceWitdth*0.03
    },
    titleContainer:{
        flexDirection: 'row',
        paddingTop: 6
        //alignItems: 'center',
    },
    title:{
        fontFamily:"Arial",
        fontSize: deviceWitdth*0.05,
        width: deviceWitdth*0.8,
        //backgroundColor:"black",
        alignSelf: 'flex-end',
    },
    starIcon:{
        left: 0,
        width: deviceWitdth*0.06,
        height: deviceWitdth*0.06,
       // alignSelf: 'flex-end',

    },
    collectionCount:{
        width: deviceWitdth*0.25,
        //fontFamily:"Arial",
        fontSize: deviceWitdth*0.04,
        left: deviceWitdth*0.01,
        color: "red",
        alignSelf: 'center'
    },
    detail:{
        padding:6,
    },
    imgContainer:{
        width:deviceWitdth*0.94,
        alignItems:'center',
    },
    eventImg:{
        padding:10,
        borderRadius:20,
        width:deviceWitdth*0.92,
        height:deviceHeight*0.3,
        borderWidth:1,
        borderColor: "#C0C0C0",
    },
    info:{
        flexDirection: 'row',
        width:deviceWitdth*0.9,
        height:deviceHeight*0.05,
        alignItems: 'center',
        padding:6
    },
    userImg:{
        width:deviceWitdth*0.08,
        height:deviceWitdth*0.08,
        borderRadius: 17,
        marginRight:10
    },
    userName:{
        width: deviceWitdth*0.3,
        fontFamily:"Arial",
        //alignSelf:'center',
        fontSize: deviceWitdth*0.04,
    },
    time:{
        width: deviceWitdth*0.25,
        fontFamily:"Arial",
        fontSize: deviceWitdth*0.04,
        left: deviceWitdth*0.28,
        //alignSelf: '',
        color: "gray",
    },


}
)
const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        mainPageStatus : state.statusList.mainPageStatus,
        currentPage : state.statusList.currentPage,
        eventList : state.eventList.eventList,
        userList : state.userList.user,
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            openEvent
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Discover);