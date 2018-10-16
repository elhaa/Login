import React, {Component} from 'react';
import {TouchableOpacity,View,Text} from 'react-native';


export default class App extends Component {
    constructor(state){
        super(state);
        this.state={
            angka: [
                {doa:'الَّلهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ',
            latin:'Allahumma baarik llanaa fiima razaqtanaa waqinaa adzaa ban-naar',
        arti:'Yaa Allah, berkatilah rezeki yang engkau berikan kepada kami, dan peliharalah kami dari siksa api neraka'}
            ],
        }
    }
    render(){
        return(
        
            <View>
            <TouchableOpacity>
            <Text>{this.state.angka[0]}</Text>
            </TouchableOpacity>
            </View>

        )
    }
}