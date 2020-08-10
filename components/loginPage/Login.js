import React from 'react';
import SignUp from './SignUp'
import { View , Text, StyleSheet, StatusBar, Image, Buttom} from 'react-native'


class Login extends React.Component {

    render(){

        return(
            <View style={styles.container}>
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
                <View title="Log In" style={styles.login} >
                    <Text style={styles.loginText}>LOG IN</Text>
                </View>
                <View title="Sign Up" style={styles.signUp}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white'
    },
    logo:{
        position: 'absolute',
        width: '60px',
        height: '60px',
        left: '10px',
        top: '10px',
        zIndex: '4'
    },
    eventImg:{
        position: 'absolute',
        width: '100%',
        height: '707px',
        left: '0px',
        top:'0px',
        zIndex: '3'
    },
    sampleUser:{
        position: 'absolute',
        width : '139px',
        height:'28px',
        left:'16px',
        top: '659px',
        backgroundColor:'rgba(251,195,145,0.5)',
        borderRadius: '6px',
        zIndex: '4'
    },
    userImg:{
        position: 'absolute',
        right: '79.86%',
        left:'0%',
        top: '0%',
        bottom:'0%',
        zIndex :'5',
        borderRadius: '50%',
    },
    userName:{
        position:'absolute',
        left: '25.9%',
        right: '0%',
        top: '0%',
        bottom: ' 46.43%',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight:'15px',
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        zIndex:'5'
    },
    eventName:{
        position:'absolute',
        left: '25.9%',
        right: '0%',
        top: '53.57%',
        bottom: '0%',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        lineHeight:'13px',
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        zIndex:'5'
    },
    login:{
        position:'absolute',
        width: '167px',
        height: '52px',
        left: '16px',
        top:'727px',
        borderRadius: '6px',
        borderColor: 'black',
        borderWidth: '2px'
    },
    loginText:{
        position:'absolute',
        left: '34.53%',
        right: '29.13%',
        top: '36.54%',
        bottom: '34.62%',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '13px',
        lineHeight:'15px',
        display: 'flex',
        alignItems: 'center',
        textAlign:'center',
        letterSpacing:'0.004em',
        color: '#000',
        zIndex:'5'
    },
    signUp:{
        position:'absolute',
        width: '167px',
        height: '52px',
        left: '192px',
        top:'727px',
        borderRadius: '6px',
        backgroundColor: 'black',
    },
    signupText:{
        position:'absolute',
        left: '34.53%',
        right: '29.13%',
        top: '36.54%',
        bottom: '34.62%',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '13px',
        lineHeight:'15px',
        display: 'flex',
        alignItems: 'center',
        textAlign:'center',
        letterSpacing:'0.004em',
        color: 'white',
        zIndex:'5'
    }


}
)



export default Login; 