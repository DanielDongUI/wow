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
    Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inLogIn, inSignUp, closeLogIn,logedIn } from '../../actions/loginPageActions';
import { Actions } from 'react-native-router-flux';

class LoginPage extends React.Component {

    state={
        userName:"",
        password:"",
        message: "",
    }

    pressRef = () => {
        alert("link with third party account")
    }

    pressClose =()=> {
        this.props.closeLogIn()
    }

    inputUserName=(text)=>{
        
        this.setState({userName:text})
    }
    inputPW=(text)=>{
        this.setState({password:text})
    }

    pressLogin=()=>{
        let success = false
        this.props.userList.forEach((item)=>{
            if (item.userName ===this.state.userName.toLowerCase()){
                //console.log("found username")
                if(item.password === this.state.password){
                    success=true;
                    this.props.logedIn(item.userId);
                    //console.log(Actions)
                    Actions.MainPage()

                }
            }
        })
        if(success===false){
            let tempState={
                userName:"",
                password:"",
                message: "User name or password incorrect!",
            }
            this.setState(tempState)
        }
    }


    render(){
        console.log("Actions  :"+Actions.MainPage)
        return(    
            <View style={this.props.loginPageStatus === "login" ? styles.container : {display: "none"}}>
                <View style={styles.innerContainer} >
                    <View style={styles.innerWindows}>
                        <View style={styles.form}>
                            <Text style={styles.text}>User Name</Text>
                            <TextInput 
                            value={this.state.userName} 
                            
                            onChangeText={text=>this.inputUserName(text)}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:9,padding:5, width:deviceWitdth*0.7 }}/>
                            <Text style={styles.text}>Password</Text>
                            <TextInput 
                            value={this.state.password} 
                            
                            secureTextEntry={true}
                            onChangeText={text=>this.inputPW(text)}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:9,padding:5, width:deviceWitdth*0.7 }}/>
                            <Text style={styles.message}>{this.state.message}</Text>
                            <View style={styles.signupBtn}>
                                <TouchableOpacity style={styles.signUp} onPress={this.pressLogin} >
                                    <Text style={styles.signupText}>LOG IN</Text>
                                </TouchableOpacity>
                                <Text style={styles.text}>or</Text>
                            </View>
                            <View style={styles.ref}>
                             <TouchableOpacity style={styles.icon} onPress={this.pressRef}>   
                                <Image
                                    style={styles.logo}
                                    source = {require('./google.png')}
                                /> 
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.icon} onPress={this.pressRef}>  
                                <Image
                                    style={styles.logo}
                                    source = {require('./facebook.png')}
                                /> 
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.icon} onPress={this.pressRef}>  
                                <Image
                                    style={styles.logo}
                                    source = {require('./twitter.png')}
                                /> 
                            </TouchableOpacity>  
                            </View>  
                            <View style={styles.close}>
                                <TouchableOpacity onPress={this.pressClose}>  
                                    <Image
                                        style={styles.closeIcon}
                                        source = {require('./close.png')}
                                    /> 
                                </TouchableOpacity> 
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
        height: deviceHeight *0.3,
        top: deviceHeight*0.2,
        alignItems: 'center',
        //backgroundColor: 'rgba(251,195,145,0.4)',
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
    message:{
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 13,
        lineHeight: 15,
        letterSpacing:0.004,
        padding:10,
        color: 'red',
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
        flex:1,
        width: '100%',
        height: deviceHeight *0.05,
        //backgroundColor: 'rgba(251,195,145,0.4)',
        flexDirection: 'row',
        flexWrap: 'wrap', 
    },
    logo:{
        width: 40,
        height: 40,
    },
    icon:{
        width:'33.33%',
        //height: deviceHeight*0.12,
        alignItems: 'center',
    },
    close:{
        width:deviceWitdth*0.7,
        height: deviceHeight *0.6,
        top: deviceHeight *0.1,
        alignItems: 'center',
    },
    closeIcon:{
        width: 40,
        height: 30,
    }
}
)

const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        userList: state.userList.user,
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            logedIn,
            inLogIn, 
            inSignUp, 
            closeLogIn, 
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(LoginPage);


