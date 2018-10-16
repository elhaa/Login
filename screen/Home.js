import React,{Component} from "react";
import {Text, View ,TouchableOpacity,ImageBackground,StyleSheet} from "react-native";
import {createStackNavigator} from "react-navigation";



class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome!',
    };
    render() {
        return (
            <ImageBackground source={require('Z:/Lesson/ReactNative/Excercise/img/ha.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{color: "pink",marginBottom: 5,fontSize: 35}}>TASK</Text>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('FirstScreen')} style={styles.button}>
                        <Text style={styles.text}>FIRST</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('SecondScreen')} style={styles.button}>
                        <Text style={styles.text}>SECOND</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ThirdScreen')} style={styles.button}>
                        <Text style={styles.text}>THIRD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('FourthScreen')} style={styles.button}>
                        <Text style={styles.text}>Video</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        margin: 10,
        marginRight: 10,
        color: "blue",
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: "pink",
        margin: 10,
        width: '40%',
        height: 50,
    },
})

export default Home;