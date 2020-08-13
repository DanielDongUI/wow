import React from 'react';
import Login from './loginPage/Login'
import MainPage from './mainPage/MainPage'
import { View, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Scene, Actions } from 'react-native-router-flux'

//rgb 255 163 81
class Main extends React.Component {

    render(){
        return(
            <View>
                <Login />
                <MainPage />
            </View>
                // <Router>
                //     <Scene key = "root">
                //         <Scene key = "Login" component = {Login} title = "Login" hideNavBar={true} initial />
                //         <Scene key = "MainPage" component = {MainPage} hideNavBar={true} title = "MainPage" />
                //     </Scene>
                // </Router>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    }
})
const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        mainPageStatus : state.statusList.mainPageStatus,
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({

        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Main);