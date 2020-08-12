import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Create extends React.Component {

    render(){
        return(
            <View style={this.props.loginPageStatus==="logedIn" ? styles.container : {display:'none'}}>
 
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
    


export default connect(mapStatetoProps,mapDispatchToProps)(Create);