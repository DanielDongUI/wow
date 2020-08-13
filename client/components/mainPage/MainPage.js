import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from './TopBar';
import Footer from './Footer';
import Discover from './Discover';
import Collection from './Collection';
import Create from './Create';
import Search from './Search'
import Profile from './Profile';
import EventDetailPage from './event/EventDetailPage'






class MainPage extends React.Component {

    render(){
        return(
            <View style={this.props.loginPageStatus==="logedIn" ? styles.container : {display:'none'}}>
                <TopBar />
                <Discover />
                <Collection />
                <Create />
                <Search />
                <Profile />
                <Footer />
                <EventDetailPage />
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
    


export default connect(mapStatetoProps,mapDispatchToProps)(MainPage);


