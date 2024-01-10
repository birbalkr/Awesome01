import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcards() {
    return (
        <View>
            <Text style={styles.heading}>Elevatedcards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>more...</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: '900'
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        color: '#000'
    },
    cardElevated: {
        backgroundColor: '#cad5e2',
        elevation: 6,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor:'#ef5354'
    },
})