import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Buttom, Dimensions,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openFilter,closeFilter,openSetting,closeSetting } from '../../actions/mainPageActions'

class TopBar extends React.Component {
    openFilter = () => {
        this.props.openFilter()
    }
    closeFilter = () => {
        this.props.closeFilter()
    }
    openSetting = () => {
        this.props.openSetting()
    }
    closeSetting = () => {
        this.props.closeSetting()
    }
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.logoContainer }>
                    <TouchableOpacity>
                        <Image
                            style={ styles.logo }
                            source = {require('./icon/wow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                style={this.props.currentPage === "Discover" && this.props.filterStatus === "close" ? styles.icon : {display : 'none'}} 
                onPress={this.openFilter}>
                    <Image
                        style={ styles.topRightBtn }
                        source = {require('./icon/filter.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                style={this.props.currentPage === "Discover" && this.props.filterStatus === "open" ? styles.icon : {display : 'none'}} 
                onPress={this.closeFilter}>
                    <Image
                        style={ styles.topRightBtn }
                        source = {require('./icon/filterc.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                style={this.props.currentPage !== "Discover" && this.props.settingStatus === "close" ? styles.icon : {display : 'none'}} 
                onPress={this.openSetting}>
                    <Image
                        style={ styles.topRightBtn }
                        source = {require('./icon/setting.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                style={this.props.currentPage !== "Discover" && this.props.settingStatus === "open" ? styles.icon : {display : 'none'}} 
                onPress={this.closeSetting}>
                    <Image
                        style={  styles.topRightBtn }
                        source = {require('./icon/settingc.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        left:0,
        width:deviceWitdth,
        height: deviceHeight*0.08,
        backgroundColor:'rgba(251,195,145,0.3)',
        padding: 5,
        zIndex:9
    },
    logoContainer:{
        position: 'absolute',
        alignItems: 'center',
        width:deviceWitdth,
        height: deviceHeight*0.08,
    },
    logo:{
        width: deviceWitdth*0.15,
        height: deviceWitdth*0.15,
        top: deviceHeight*0.024,
    },
    topRightBtn:{
        position: 'absolute',
        width: deviceWitdth*0.05,
        height: deviceWitdth*0.05,
        right: deviceWitdth*0.025,
        top: deviceHeight*0.044,
    }
}
)
const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        mainPageStatus : state.statusList.mainPageStatus,
        currentPage : state.statusList.currentPage,
        filterStatus : state.statusList.filterStatus,
        settingStatus : state.statusList.settingStatus,
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            openFilter,
            closeFilter,
            openSetting,
            closeSetting
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(TopBar);