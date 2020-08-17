import React from 'react';
import { View , Text, TextInput,  StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Button} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCreate, closeCreate } from "../../actions/mainPageActions"
import { Formik } from "formik";

class Create extends React.Component {
    closeCreate = ()=> {
        this.props.closeCreate()
    }

    handleSubmit =()=>{
        this.props.closeCreate()
    }

 

    render(){
        return(
            <View style={this.props.createPageStatus === "open" ? styles.container : {display:'none'}}>
               <View style={styles.innerContainer} >
                    <TouchableOpacity onPress={this.closeCreate}>
                        <Image 
                            style={styles.backImg}
                            source = {require('./icon/back.png')}
                        />
                    </TouchableOpacity>
                    <View  style={styles.innerWindows}>
                    <ScrollView vertical={true} contentContainerStyle={{flexGrow: 1}}>
                        <Text style={styles.title}>Create Event</Text>
                        <Formik initialValues={{title: '', detail: '', location: '' }}
                        onSubmit={(value)=>{
                            console.log(value)
                        }}
                        >
                            {(props)=>(
                                <View>
                                    <TextInput 
                                        style = {styles.input}
                                        placeholder = 'Event Title'
                                        onChangeText = {props.handleChange('title')}
                                        value = {props.values.title}
                                    />
                                    <TextInput 
                                        multiline
                                        style = {styles.input}
                                        placeholder = 'Event Detail'
                                        onChangeText = {props.handleChange('detail')}
                                        value = {props.values.detail}
                                    />
                                    <TextInput 
                                        style = {styles.input}
                                        placeholder = 'Event Location'
                                        onChangeText = {props.handleChange('location')}
                                        value = {props.values.location}
                                    />
                                    <Button title = 'submit' color = 'maroon' onPress={this.handleSubmit}/>
                                </View>    
                            )}
                        </Formik>
                    </ScrollView>
                    </View>
                </View>
            </View>
        )
    }

}
const deviceWitdth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container:{
        top: -deviceHeight*0.9,
        width:deviceWitdth,
        height: deviceHeight,
        zIndex:20,
    },
    innerContainer:{
        width:deviceWitdth,
        height: deviceHeight*1.1,
        top: -deviceHeight*0.03,
        backgroundColor: 'rgba(165,165,165,0.8)',
        zIndex:20,
        
    },
    backImg:{
        top: deviceHeight*0.058,
        left:deviceWitdth*0.04,
        width: deviceWitdth*0.08,
        height: deviceWitdth*0.08,
    },
    innerWindows:{
        width:deviceWitdth*0.9,
        height: deviceHeight*0.83,
        top:deviceHeight*0.063,
        backgroundColor: 'rgba(256,256,256,0.8)',
        //alignItems: 'center',
        alignSelf:"center",
        borderRadius:20,
    },
    title:{
        fontFamily:"Helvetica",
        //backgroundColor:"rgba(165,165,165,0.8)",
        fontSize: deviceWitdth*0.07,
        width:deviceWitdth*0.6,
        alignSelf: "center",
        textAlign: "center",
        margin: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop:10,
        fontSize: 18,
        borderRadius: 6,
        alignSelf: "center",
        width: deviceWitdth*0.85,

    }

}
)
const mapStatetoProps = state =>{
    return {
        loginPageStatus : state.statusList.loginPageStatus,
        mainPageStatus : state.statusList.mainPageStatus,
        createPageStatus : state.statusList.createPageStatus
    }
}

const mapDispatchToProps = dispatch =>
        bindActionCreators({
            closeCreate
        },dispatch)
    


export default connect(mapStatetoProps,mapDispatchToProps)(Create);