import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#'

    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color)
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={[styles.actionBtnText, { backgroundColor: randomBackground === '#000000' ? '#ffffff' : '#000000', color: randomBackground }]}>
              Press me
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {

  },
  actionBtnText: {
    backgroundColor: '#000000',
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 24,
    borderRadius: 8
  }
})

export default App