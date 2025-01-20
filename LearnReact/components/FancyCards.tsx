import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCards</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: 'https://i.ibb.co/ByCGj2s/Hawa-mahal.jpg' }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    },
    card: {
        width: 360,
        height: 360,
        marginTop: 12,
        marginLeft: 16,
        borderRadius: 8
    },
    cardElevated: {
        backgroundColor: 'rgb(217, 210, 210)',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 8,
        // shadowColor: "#999"
    },
    cardImage: {
        height: 180,
        marginBottom: 6,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 16
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardLabel: {
        fontSize: 16,
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        marginBottom: 16,
        flexShrink: 1
    },
    cardFooter: {
        fontSize: 14
    }
});

export default FancyCards