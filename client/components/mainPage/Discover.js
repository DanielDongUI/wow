import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Discover extends React.Component {

    render(){
        
        return(
            <View style={this.props.currentPage==="Discover" ? styles.container : {display:'none'}}>
                <ScrollView vertical={true} contentContainerStyle={{flexGrow: 1}}>
                <View styles={styles.eventWrapper}>
                    {this.props.eventList.map((item,index)=>{
                        let user = this.props.userList.filter(user=>user.userId===item.userId)
                        console.log(user)
                        return (<View key = {index} style={styles.eventContainer}> 
                                    <Text style={styles.title}>{item.eventTitle}</Text>
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
                                        
                                    </View>
                                </View>)
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
        backgroundColor: "#F5F5F5"

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
    title:{
        fontFamily:"Arial",
        fontSize: deviceWitdth*0.05,
        padding:6,
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
        flexWrap : 'wrap',

        width:deviceWitdth*0.9,
        height:deviceHeight*0.05,
        justifyContent: 'center',
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
        fontSize: deviceWitdth*0.04,
    }


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

        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Discover);