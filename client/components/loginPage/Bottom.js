import React from 'react';
import SignupPage from './SignupPage'
import { View , Text, StyleSheet, StatusBar, Image, Button, Dimensions,TouchableOpacity} from 'react-native'

class Bottom extends React.Component {

    pressLogin () {
        alert('login')
    }
    pressSignup () {
        alert('signup')
    }
    render(){
        return(
            <View style={styles.container}>
                <View title="Log In" style={styles.box}>
                    <TouchableOpacity style={styles.login} onPress={this.pressLogin}>  
                    <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity> 
                </View> 
                <View title="Sign Up" style={styles.box}  >
                    <TouchableOpacity style={styles.signUp} onPress={this.pressSignup} >
                        <Text style={styles.signupText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    container:{
        flex:1,
        top: deviceHeight * 0.85,
        width: '100%',
        height: deviceHeight * 0.12,
        padding: 12,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        
    },
    box:{
        width:'50%',
        height: deviceHeight*0.12,
        padding:12, 
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
        
        position:'absolute',

        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing:0.004,
        color: 'black',
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