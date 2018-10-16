import React,{Component} from "react";
import {Text, View, TouchableOpacity,StyleSheet,TextInput,Alert, Image,ImageBackground} from "react-native";
import {createStackNavigator} from "react-navigation";

class first extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    _onPressButton() {
        Alert.alert('Welcome!')
    }

    render() {
        return (
            <ImageBackground source={require('Z:/Lesson/ReactNative/Excercise/img/kl.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>

                <View style={styles.me}>
                    <Image
                        style={styles.image}
                        source={require('Z:/Lesson/ReactNative/Excercise/img/hihi.jpg')}
                    />
                    <Text style={styles.R}>WYP</Text>
                </View>

                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    keyboardType={'email-address'}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={this._onPressButton}
                    style={styles.login}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    me:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    textInput:{
        height: 45,
        width: '80%',
        borderColor: 'pink',
        borderBottomWidth: 2,
        marginTop:10,

    },
    image:{
        height: 80,
        width: 80,
        borderRadius:35,
    },
    login:{
        backgroundColor:'rgb(173, 216, 230)',
        borderWidth: 0,
        borderRadius: 20,
        margin: 10,
        width: 100,
        height: 50,
    },
    text:{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        margin: 10,
        marginRight:10,
        color:"white",

    },
    R:{
        fontSize: 30,
        fontFamily:'Georgia',
        color:'rgb(250, 128, 114)',
    }
});

export default first;