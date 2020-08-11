import React from 'react';
import { View,
    TextInput,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Image, 
    Button,
    TouchableOpacity, 
    Dimensions} from 'react-native'

class SignupPage extends React.Component {

    state={
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.innerContainer} >
                    <View style={styles.innerWindows}>
                        <View style={styles.form}>
                            <Text style={styles.text}>Email</Text>
                            <TextInput 
                            value={this.state.email} 
                            onChangeText={text=>inputEmail(text)}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:9,padding:5 }}/>
                            <Text style={styles.text}>User Name</Text>
                            <TextInput 
                            value={this.state.userName} 
                            onChangeText={text=>inputUserName(text)}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:9,padding:5 }}/>
                            <Text style={styles.text}>Password</Text>
                            <TextInput 
                            value={this.state.password} 
                            onChangeText={text=>inputPW(text)}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:9,padding:5 }}/>
                            <Text style={styles.text}>Confirm Password</Text>
                            <TextInput 
                            value={this.state.password} 
                            onChangeText={text=>inputCPW(text)}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:9,padding:5 }}/>
                            <View style={styles.signupBtn}>
                                <TouchableOpacity style={styles.signUp} onPress={this.pressSignup} >
                                    <Text style={styles.signupText}>SIGN UP</Text>
                                </TouchableOpacity>
                                <Text style={styles.text}>or</Text>
                            </View>
                            <View style={styles.ref}>

                            </View>    
                        </View>    
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
    },
    innerContainer:{
        width:deviceWitdth,
        height: deviceHeight,
        top: -deviceHeight*0.03,
        backgroundColor: 'rgba(251,195,145,0.4)',
        alignItems: 'center',
        zIndex:8,
    },
    innerWindows:{
        width:deviceWitdth*0.8,
        height: deviceHeight*0.9,
        top:deviceHeight*0.05,
        backgroundColor: 'rgba(256,256,256,0.8)',
        alignItems: 'center',
        borderRadius:20,
    },
    form:{
        width:deviceWitdth*0.7,
        height: deviceHeight *0.6,
        top: deviceHeight*0.05,
        backgroundColor: 'rgba(251,195,145,0.4)',
        zIndex:9,
    },
    text:{
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing:0.004,
        padding:10,
        color: 'black',
    },
    signupBtn:{
        //flex:1,
        width:deviceWitdth*0.7,
        height:deviceHeight*0.2,
        top: 0,
        alignItems: 'center',
        justifyContent:'center',
    },
    signUp:{
        backgroundColor: 'black',
        width:deviceWitdth*0.2,
        height: deviceHeight*0.05,
        marginBottom:20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
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
    },
    ref:{
        width:deviceWitdth*0.7,
        height: deviceHeight *0.05,
        backgroundColor: 'rgba(251,195,145,0.4)',
        flexDirection: 'row',
        flexWrap: 'wrap', 
    }
}
)


export default SignupPage; 