import React from 'react';
import SignUp from './SignUp'
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'

class Header extends React.Component {

    render(){

        return(
            <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source = {require('./wow-logo.png')}
                    /> 
                    <Image 
                        style={styles.eventImg}
                        source = {require('../../data/eventImg/party1.jpeg')}
                        />
                    <View style={styles.sampleUser}> 
                        <Image
                            style={styles.userImg}
                            source = {require('../../data/userImg/user1.jpeg')}
                        />
                        <Text style={styles.userName}>Donglin Guo</Text>
                        <Text style={styles.eventName}>Party</Text>
                    </View>
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '85%',

    },
    eventImgContainer:{
        width: deviceWitdth,
        height:'85%',
    },
    logo:{
        position: 'absolute',
        width: 60,
        height: 60,
        left: deviceWitdth*0.05,
        top: deviceHeight*0.05,
        zIndex: 4
    },
    eventImg:{
        // resizeMode: 'cover',
        // ...StyleSheet.absoluteFillObject,
        position:'absolute',
        width: deviceWitdth,
        height:deviceHeight*0.85,
        zIndex: 3,
    },
    sampleUser:{
        position: 'absolute',
        width : 139,
        height:28,
        left:deviceWitdth*0.05,
        top: deviceHeight*0.78,
        backgroundColor:'rgba(251,195,145,0.5)',
        borderRadius: 6,
        zIndex: 4,
    },
    userImg:{
        position: 'absolute',
        width:28,
        height:28,
        right: '79.86%',
        left:'0%',
        top: '0%',
        bottom:'0%',
        zIndex : 5,
        borderRadius: 6,
    },
    userName:{
        position:'absolute',
        left: '25.9%',
        right: '0%',
        top: '0%',
        bottom: ' 46.43%',

        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight:15,
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        zIndex: 5,
    },
    eventName:{
        position:'absolute',
        left: '25.9%',
        right: '0%',
        top: '53.57%',
        bottom: '0%',

        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        lineHeight: 13,
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        zIndex: 5,
    }
}
)



export default Header; 