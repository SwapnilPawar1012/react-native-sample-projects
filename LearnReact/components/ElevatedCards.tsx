import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
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
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>hi</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    },
    container: {
        margin: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        backgroundColor: '#CAD5E3',
        // elevation: 4
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: "#333",
        shadowOpacity: 0.5,
        shadowRadius: 2
    }
});

export default ElevatedCards;