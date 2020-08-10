import React from 'react';
import SignUp from './SignUp'
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'
import Header from './Header'
import Bottom from './Bottom'

class Login extends React.Component {

    render(){

        return(
            <View style={styles.container}>
                <Header />
                <Bottom />
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