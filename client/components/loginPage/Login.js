import React from 'react';
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'
import Header from './Header'
import Bottom from './Bottom'

class Login extends React.Component {

    render(){

        return(
            <View style={styles.container}>
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
        flex:1,
        backgroundColor : 'white'
    }
}
)



export default Login; 