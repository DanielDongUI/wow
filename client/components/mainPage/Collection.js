import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Collection extends React.Component {

    render(){
        return(
            <View style={this.props.currentPage==="Collection" ? styles.container : {display:'none'}}>
                <Text>Collection</Text>
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
        currentPage : state.statusList.currentPage,
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({

        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Collection);