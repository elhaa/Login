import React, {Component} from 'react';
import {TouchableOpacity,View,Text,ActivityIndicator} from 'react-native';
import {createStackNavigator} from "react-navigation";

class splash extends React.Component {
    render(){
        return(
            <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
             <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}

export default splash;