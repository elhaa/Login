import React, {Component} from 'react';
import {TouchableOpacity,View,Text,Image} from 'react-native';

export default class App extends Component {
    constructor(state){
        super(state);
        this.state={
            doa: ['Doa Makan','Doa Minum','Doa Tidur']
    }
}
    render(){
        return(
            <View style={{flex:1,flexDirection:row,alignContent:'center',justifyContent:'center',backgroundColor:'grey'}}>
            <TouchableOpacity onPress={() => {this.state.doa}}>
            <TextInput
                    style={styles.textInput}
                    placeholder="search"
                />

            </TouchableOpacity>
             <TouchableOpacity>
                 <Image source={require('Z:/Lesson/ReactNative/Login/img/hi.jpg')}/>
                 <Text>{this.state.doa}</Text>
            
             </TouchableOpacity>
            </View>
        )
    }
}