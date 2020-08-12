import React from 'react';
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'
import Header from './Header'
import Bottom from './Bottom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
//style={this.props.loginPageStatus === "logedIn" ? {display: "none"} : styles.container 
    render(){
        return(
            <View style = {this.props.loginPageStatus === "logedIn"? {display:'none'} :  styles.container }>
                <Header />
                <Bottom />
                <SignupPage />
                <LoginPage />
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        
    }
}
)

const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        mainPageStatus : state.statusList.mainPageStatus,
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({

        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Login);