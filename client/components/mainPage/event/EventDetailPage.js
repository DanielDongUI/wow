import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEvent } from "../../../actions/eventActions"

class EventDetailPage extends React.Component {


    closeEvent =()=>{
        this.props.closeEvent()
    }

    conditionalRender = ()=>{
        if (this.props.currentEvent !== null){
            let user = this.props.userList.filter(user=>user.userId===this.props.currentEvent.userId)[0]
            //console.log(this.props.currentEvent )
            let item = this.props.currentEvent 
            return (
                <View style={styles.innerContainer} >
                    <TouchableOpacity onPress={this.closeEvent}>
                        <Image 
                            style={styles.backImg}
                            source = {require('../icon/back.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.innerWindows}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{item.eventTitle}</Text>
                            <Image
                                style={styles.starIcon}
                                source = {require('../icon/star.png')}
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
                                source = {user.userImg}
                            />
                            <Text style={styles.userName}>{user.userName}</Text>
                            <Text style={styles.time}>{item.timeFromRelease}</Text>
                        </View>
                    </View>
                </View>
            )
        }else {
        return <View></View>
        }
    }


    render(){
      

        return(
            <View style={this.props.currentEvent !== null ? styles.container : {display:'none'}}>
                {this.conditionalRender()}
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        top: -deviceHeight*0.9,
        zIndex:10
    },
    innerContainer:{
        width:deviceWitdth,
        height: deviceHeight*1.3,
        top: -deviceHeight*0.03,
        backgroundColor: 'rgba(165,165,165,0.8)',
        zIndex:11,
    },
    backImg:{
        top: deviceHeight*0.058,
        left:deviceWitdth*0.04,
        width: deviceWitdth*0.08,
        height: deviceWitdth*0.08,
    },
    innerWindows:{
        width:deviceWitdth*0.9,
        height: deviceHeight*0.83,
        top:deviceHeight*0.063,
        backgroundColor: 'rgba(256,256,256,0.8)',
        //alignItems: 'center',
        alignSelf:"center",
        borderRadius:20,
    },
    closeContainer:{
        width: deviceWitdth*0.1,
        height: deviceWitdth*0.1,
        top:deviceHeight*0.072,
        alignSelf:"center",
        backgroundColor: 'rgba(1,256,256,0.8)',
        
    },
    closeIcon:{
        width: deviceWitdth*0.1,
        height: deviceWitdth*0.1,
        //top:deviceHeight*0.072,
        //alignSelf:"center",
    },
    titleContainer:{
        flexDirection: 'row',
        paddingTop: 6
        //alignItems: 'center',
    },
    title:{
        fontFamily:"Arial",
        left:deviceWitdth*0.03,
        fontSize: deviceWitdth*0.05,
        alignSelf: 'flex-end',
    },
    starIcon:{
        left: deviceWitdth*0.52,
        width: deviceWitdth*0.06,
        height: deviceWitdth*0.06,
       // alignSelf: 'flex-end',

    },
    collectionCount:{
        width: deviceWitdth*0.25,
        //fontFamily:"Arial",
        fontSize: deviceWitdth*0.04,
        left: deviceWitdth*0.53,
        color: "red",
        alignSelf: 'center'
    },
    detail:{
        padding:6,
    },
    imgContainer:{
        marginTop:10,
        marginBottom:10,
        width:deviceWitdth*0.9,
        height: deviceHeight*0.5,
        //alignItems:'center',
        //backgroundColor: "black"
    },
    eventImg:{
        alignSelf:"center",
        //alignSelf:"start",
        width:deviceWitdth*0.85,
        height: deviceHeight*0.5,
        resizeMode: 'contain',
        //backgroundColor: 'rgba(1,256,256,0.8)',
  
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
        left: deviceWitdth*0.25,
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
        currentEvent : state.statusList.currentEvent,
        userList : state.userList.user

    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            closeEvent
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(EventDetailPage);