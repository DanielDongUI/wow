import React from 'react';
import SignUp from './SignUp'
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'

class Bottom extends React.Component {

    render(){

        return(
            <View style={styles.container}>

                    <View title="Log In" style={styles.box} >
                        <View style={styles.login}>
                            <Text style={styles.loginText}>LOG IN</Text>
                        </View>
                    </View>
                    <View title="Sign Up" style={styles.box}>
                        <View style={styles.signUp}>
                            <Text style={styles.signupText}>SIGN UP</Text>
                        </View>
                    </View>
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    container:{
        top: deviceHeight * 0.85,
        width: '100%',
        height: deviceHeight * 0.12,
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        
    },
    box:{
        width:'50%',
        height: deviceHeight*0.12,
        padding:15, 
    },
    login:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2
    },
    signUp:{
        flex:1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    loginText:{
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing:0.004,
        color: '#000',
        zIndex: 5,
    },
    signupText:{
        position:'absolute',

        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing:0.004,
        color: 'white',
        zIndex: 5,
    }


}
)



export default Bottom; 