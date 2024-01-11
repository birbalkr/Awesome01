import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contact = [
        {
            uid: 1,
            name: 'Aditya',
            status: 'Digital Bank',
            imageUrl: 'https://thumbs.dreamstime.com/z/avatar-man-brown-hair-avatar-face-single-icon-cartoon-style-vector-symbol-stock-illustration-web-90352602.jpg'
        },
        {
            uid: 2,
            name: 'Rahul',
            status: 'Digital Bank',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMjsgPIlk0I0axDc029n4usd0WO4W6gbC6a8557cYgiYgI-_x3CC0zIxH_l0KAIrypRM&usqp=CAU'
        },
        {
            uid: 3,
            name: 'Sumit',
            status: 'Digital Bank',
            imageUrl: 'data:image/jpeg;base64,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'
        },
        {
            uid: 4,
            name: 'Birbal',
            status: 'Digital Bank',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfMrto13x18m1DLT1ciw4a8gxcTgYGcbGs9RBhx_4uQFMJR9lW9ArVR8k2lPXNMeXBB0&usqp=CAU'
        },
    ];
    return (
        <View>
            <Text style={styles.Headingtext}>ContactList</Text>
            <ScrollView style={styles.container}
                scrollEnabled={false}>
                {contact.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.usercard}>
                        <Image source={{ uri: imageUrl }} style={styles.userImg} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.Userstatu}>{status}</Text>
                        </View>
                    </View>

                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Headingtext: {
        fontSize: 24,
        fontWeight: '900',
        marginLeft: 12
    },
    container: {
        backgroundColor: 'orange',
    },
    usercard: {
        flex: 1,
        marginLeft: 16,
        flexDirection: 'row',
    },
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderColor: "green",
        borderWidth: 1,
        marginTop:12
    },
    userName: {
        fontSize: 20,
        marginLeft:10,
        color:'blue'
    },
    Userstatu: {
        fontSize: 15,
        marginLeft:10,
        color:'blue'
    }
})