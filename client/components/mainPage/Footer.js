import React from 'react';
import { View , Text, StyleSheet, StatusBar, Image, Dimensions,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pressDiscover, pressCollection, pressSearch, pressProfile, openCreate } from '../../actions/mainPageActions'

class Footer extends React.Component {
    pressDiscover=()=>{
        this.props.pressDiscover()
    }
    pressCollection=()=>{
        this.props.pressCollection()
    }
    pressCreate=()=>{
        this.props.openCreate()
    } 
    pressSearch=()=>{
        this.props.pressSearch()
    }
    pressProfile=()=>{
        this.props.pressProfile()
    }

    render(){
        return(
            <View style={ styles.container }>
                <View style={styles.box}>
                    <TouchableOpacity 
                    style={ this.props.currentPage ==="Discover" ? {display : 'none'} : styles.icon }
                    onPress={this.pressDiscover}>  
                        <Image
                            style={ styles.logo }
                            source = {require('./icon/home.png')}
                        />
                    </TouchableOpacity> 
                    <Image
                            style={ this.props.currentPage==="Discover" ? styles.logo : {display : 'none'}}
                            source = {require('./icon/homec.png')}
                    />
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={this.props.currentPage ==="Collection" ? {display : 'none'} : styles.icon} onPress={this.pressCollection}>  
                        <Image
                            style={styles.logo}
                            source = {require('./icon/heart.png')}
                        /> 
                    </TouchableOpacity>
                    <Image
                            style={ this.props.currentPage==="Collection" ? styles.logo : {display : 'none'}}
                            source = {require('./icon/heartc.png')}
                    />
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.icon} onPress={this.pressCreate}>  
                        <Image
                            style={styles.plus}
                            source = {require('./icon/plus.png')}
                        /> 
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={this.props.currentPage ==="Search" ? {display : 'none'} : styles.icon} onPress={this.pressSearch}>  
                        <Image
                            style={styles.logo}
                            source = {require('./icon/search.png')}
                        /> 
                    </TouchableOpacity>
                    <Image
                            style={this.props.currentPage==="Search" ? styles.logo : {display : 'none'}}
                            source = {require('./icon/searchc.png')}
                        /> 
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={this.props.currentPage ==="Profile" ? {display : 'none'} : styles.icon} onPress={this.pressProfile}>  
                        <Image
                            style={styles.logo}
                            source = {require('./icon/customer.png')}
                        /> 
                    </TouchableOpacity>
                    <Image
                            style={this.props.currentPage==="Profile" ? styles.logo : {display : 'none'}}
                            source = {require('./icon/customerc.png')}
                        /> 
                </View>
            </View>
        )
    }
}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top:deviceHeight*0.91,
        left:0,
        width:deviceWitdth,
        height: deviceHeight*0.09,
        backgroundColor:'#FAFAFA',
        borderWidth:1,
        borderColor: "#C0C0C0",
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        zIndex:10
    },
    box:{
        width:'20%',
        //padding:5,
        alignItems:"center",
        //justifyContent:'center',
    },
    logo:{
        width: deviceWitdth*0.07,
        height: deviceWitdth*0.07,
        top: deviceHeight*0.01,
    },
    plus:{
        width: deviceWitdth*0.11,
        height: deviceWitdth*0.11,
        top: 0,
        alignSelf: 'flex-start'
        
        //resizeMode: "contain"
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
            pressDiscover,
            pressCollection,
            pressSearch,
            pressProfile,
            openCreate,
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Footer);