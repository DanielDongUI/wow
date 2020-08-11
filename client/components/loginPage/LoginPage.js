import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'

class loginPage extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>login</Text>
            </View>
        )
    }
}

const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
}
)

export default loginPage; 