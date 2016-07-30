import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
const {width:device_width} = Dimensions.get('window');

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards: [{title: 'jim', content: 'mohmal'}, {title: 'podcast', content: 'gomaneh'}]
        }
    }
    render(){
        return(
            <View>
                <ScrollView>
                    {this.state.cards.map((card, i)=> {
                        return(
                            <View style={styles.card} key={i}>
                                <Text>
                                    {card.title}
                                </Text>
                                <Text>
                                    {card.content}
                                </Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        backgroundColor: '#ffffff',
        height: 100,
        width: device_width - 20,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        elevation: 4
        
    }
});