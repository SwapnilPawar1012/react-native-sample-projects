import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Linking Libraries</Text>
                </View>
                <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg' }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4} style={styles.bodyText}>Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them.

                        With that in mind we exposed many of these features as independent static libraries.

                        For most of the libs it will be as quick as dragging two files, sometimes a third step will be necessary, but no more than that.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => { openWebsite('https://reactnative.dev/docs/linking-libraries-ios') }}>
                        <Text style={styles.socialText}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { openWebsite('https://github.com/SwapnilPawar1012') }}>
                        <Text style={styles.socialText}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
        marginTop: 15
    },
    card: {
        width: 360,
        height: 360,
        marginTop: 12,
        marginLeft: 16,
        borderRadius: 8,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#888",
        shadowOpacity: 0.50,
        shadowRadius: 8
    },
    headerContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 0.5,
    },
    cardImage: {
        height: 180
    },
    bodyContainer: {
        padding: 10
    },
    bodyText: {
        color: '#fff'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    socialText: {
        backgroundColor: "#fff",
        color: "#000",
        fontSize: 16,
        paddingHorizontal: 30,
        paddingVertical: 5
    }
});

export default ActionCard