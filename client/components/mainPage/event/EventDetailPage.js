import React from 'react';
import { View , Text, StyleSheet, ScrollView, Image, Modal, Dimensions, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEvent } from "../../../actions/eventActions";
import ImageViewer from 'react-native-image-zoom-viewer';
import { unLike, like } from "../../../actions/eventActions"

class EventDetailPage extends React.Component {
    state = {
        imgViewer: false,
        imgSrc: [],
    }
    closeEvent =()=>{
        this.props.closeEvent()
    }
    pressImg =(imgSrc)=>{
        
        this.setState({imgViewer:true, imgSrc})
    }
    closeImg = ()=>{
        this.setState({imgViewer:false, imgSrc:""})
    }
    pressCollection = (user, eventId) => {
        let contain = this.checkContain(user,eventId)
        
        if (contain){

        }

    }
    checkCollection = (user, eventId,current) => {
        let contain = this.checkContain(user,eventId)

        if(contain){
            if(current===false){
                return {display: 'none'}
            }else{
                return styles.collectionContainer
            }
        }else{
            if(current===false){
                return styles.collectionContainer
            }else{
                return  {display: 'none'}
            }
        }
    }
    checkContain = (user, eventId) =>{
        let contain = false;
        user.collection.forEach((item)=>{
            if (item === eventId){
                contain = true;
            }
        })
        return contain
    }

    conditionalRender = ()=>{
        if (this.props.currentEvent !== null){
            let user = this.props.userList.filter(user=>user.userId===this.props.currentEvent.userId)[0]
            //console.log(this.props.currentEvent )
            let item = this.props.currentEvent 
            let hasCollection = false
            let currentUser = this.props.userList.filter(user=>user.userId===this.props.currentUser)[0]


            return (
                <View style={styles.innerContainer} >
                    <TouchableOpacity onPress={this.closeEvent}>
                        <Image 
                            style={styles.backImg}
                            source = {require('../icon/back.png')}
                        />
                    </TouchableOpacity>
                    <View  style={styles.innerWindows}>
                    <ScrollView vertical={true} contentContainerStyle={{flexGrow: 1}}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{item.eventTitle}</Text>
                            <Image
                                    style={styles.starIcon}
                                    source = {require('../icon/star.png')}
                                />
                                <Text style={styles.collectionCount} >{item.collectionCount}</Text>
                            {/* <TouchableOpacity style={()=>this.checkCollection(currentUser,item.eventId,false)} onPress={()=>this.pressCollection(currentUser,item.eventId)}>
                                <Image
                                    style={styles.starIcon}
                                    source = {require('../icon/star.png')}
                                />
                                <Text style={styles.collectionCount} >{item.collectionCount}</Text>
                            </TouchableOpacity>
                             <TouchableOpacity  style={()=>this.checkCollection(currentUser,item.eventId,true)} onPress={()=>this.pressCollection(currentUser,item.eventId)}>
                                <Image
                                    style={styles.starIcon}
                                    source = {require('../icon/starc.png')}
                                />
                                <Text style={styles.collectionCountC} >{item.collectionCount}</Text>
                            </TouchableOpacity>  */}
                        </View>
                            <View style={styles.locationContainer}>
                            <Text style={styles.at}>at</Text>
                            <Text style={styles.location}>{item.location}</Text>
                            </View>
                            <Image 
                                style={styles.line}
                                source={require('../icon/line1.png')}
                            />
                            <Text style={styles.detail}>{item.eventDetail}</Text>
                            <TouchableOpacity style={styles.imgContainer} onPress={()=>this.pressImg(item.eventImgList)}>
                                <Image  
                                    style={item.eventImg=== null ? {display : 'none'} : styles.eventImg }
                                    source = {item.eventImg}
                                />
                            </TouchableOpacity>
                            <View style={styles.info}> 
                                <Image
                                    style={styles.userImg}
                                    source = {user.userImg}
                                />
                            <Text style={styles.userName}>{user.userName}</Text>
                            <Text style={styles.time}>{item.timeFromRelease}</Text>
                        </View>
                    </ScrollView>
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
                <Modal visible={this.state.imgViewer} transparent={this.state.imgViewer} >
                    <ImageViewer imageUrls={this.state.imgSrc}  onSwipeDown={this.closeImg} enableSwipeDown={true} enableImageZoom={true} />
                </Modal>
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
        width:deviceWitdth,
        height: deviceHeight,
        zIndex:10,
    
    },
    innerContainer:{
        width:deviceWitdth,
        height: deviceHeight*1.1,
        top: -deviceHeight*0.03,
        backgroundColor: 'rgba(165,165,165,0.8)',
        
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
        //backgroundColor:"black",
        fontSize: deviceWitdth*0.06,
        width:deviceWitdth*0.7,
        alignSelf: 'flex-end',
    },
    collectionContainer:{
        backgroundColor:"black",
        width: deviceWitdth*0.26,
        height: deviceWitdth*0.06,
        flexDirection: 'row',
        alignItems:'center',
        left: deviceWitdth*0.02,
    },
    starIcon:{
        left: deviceWitdth*0.02,
        width: deviceWitdth*0.06,
        height: deviceWitdth*0.06,
        alignSelf: 'center',

    },
    collectionCount:{
        width: deviceWitdth*0.25,
        height: deviceWitdth*0.06,
        //fontFamily:"Arial",
        fontSize: deviceWitdth*0.04,
        left: deviceWitdth*0.03,
        color: "black",
        alignSelf: 'flex-end'
    },
    collectionCountC:{
        width: deviceWitdth*0.25,
        height: deviceWitdth*0.06,
        //fontFamily:"Arial",
        fontSize: deviceWitdth*0.04,
        left: deviceWitdth*0.03,
        color: "red",
        alignSelf: 'flex-end'
    },
    line:{
        width: deviceWitdth*0.89,
        height: deviceHeight*0.01,
        //backgroundColor:"lightgray",
        alignSelf: 'center'
        
    },
    detail:{
        padding:6,
        fontFamily:"Arial",
        width:deviceWitdth*0.88,
        left:deviceWitdth*0.01,
        //borderTopColor: "lightgray",
        //borderColor: "white",
        //borderWidth: deviceWitdth*0.001,

        
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
    locationContainer:{
        flexDirection: 'row',
        alignItems: "center"
    },
    at:{
        fontFamily:"Arial",
        left: deviceWitdth*0.03,
        fontSize: deviceWitdth*0.04,
        color: "gray"
    },
    location:{
        fontFamily:"Arial",
        fontWeight:"bold",
        fontSize: deviceWitdth*0.04,
        left: deviceWitdth*0.05,
        color:"rgb(255,163,81)",
    }
}
)
const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        mainPageStatus : state.statusList.mainPageStatus,
        currentPage : state.statusList.currentPage,
        currentEvent : state.statusList.currentEvent,
        userList : state.userList.user,
        currentUser: state.statusList.currentUser

    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            closeEvent
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(EventDetailPage);