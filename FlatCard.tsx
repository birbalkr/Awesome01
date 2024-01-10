import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
    return (
        <View>
            <Text style={styles.heading}>FlatCard</Text>
            <View style={styles.container}>
                <View style={[styles.Crad, styles.Cradone]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.Crad, styles.Cradtwo]}>
                    <Text>green</Text>
                </View>
                <View style={[styles.Crad, styles.Cradthree]}>
                    <Text>blue</Text>
                </View>
                <View style={[styles.Crad, styles.Cradthree]}>
                    <Text>blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:'900'
    },
    container:
    {
        flex:1,
        flexDirection:'row'
    },
    Crad:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:6,
        margin:8
    },
    Cradone:{
        backgroundColor:"#ef5354"
    },
    Cradtwo:{
        backgroundColor:"#50dbb4"
    },
    Cradthree:{
        backgroundColor:"#5da3fa"
    },
})