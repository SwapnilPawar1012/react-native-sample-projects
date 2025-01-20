import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import contacts from '../database/contacts'

function ContactList() {
    const [limit, setLimit] = useState(4);

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {
                    contacts.slice(0, limit).map(({ uid, name, status, imageUrl }) => {
                        return (
                            <View key={uid} style={styles.userCard}>
                                <Image source={{ uri: imageUrl }} style={styles.userImage} />
                                <View>
                                    <Text style={styles.userName}>{name}</Text>
                                    <Text style={styles.userStatus}>{status}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        paddingLeft: 8,
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(186, 202, 255)',
        marginBottom: 3,
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 1,
        borderColor: '#999',
        marginRight: 10
    },
    userName: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2
    },
    userStatus: {
        fontSize: 12
    }
})

export default ContactList