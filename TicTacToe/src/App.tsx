import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty'));

  const ReloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty'));
  };

  const CheckWinner = () => {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        gameState[i] !== 'empty' &&
        gameState[i] === gameState[i + 1] &&
        gameState[i] === gameState[i + 2]
      ) {
        setGameWinner(`${gameState[i]} won the game!`);
        return;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        gameState[i] !== 'empty' &&
        gameState[i] === gameState[i + 3] &&
        gameState[i] === gameState[i + 6]
      ) {
        setGameWinner(`${gameState[i]} won the game!`);
        return;
      }
    }

    // Check diagonals
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game!`);
      return;
    }
    if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game!`);
      return;
    }

    // Check for a draw
    if (!gameState.includes('empty')) {
      setGameWinner('Draw game...');
    }
  };

  const OnChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
    }

    if (gameState[itemNumber] === 'empty') {
      const newGameState = [...gameState];
      newGameState[itemNumber] = isCross ? 'cross' : 'circle';
      setGameState(newGameState);
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: '#FFF',
      });
    }
  };

  useEffect(() => {
    CheckWinner();
  }, [OnChangeItem]);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <View>
          {gameWinner ? (
            <View style={[styles.playerInfo, styles.winnerInfo]}>
              <Text style={styles.winnerText}>{gameWinner}</Text>
            </View>
          ) : (
            <View
              style={[
                styles.playerInfo,
                isCross ? styles.playerX : styles.playerO,
              ]}>
              <Text style={styles.gameTurnText}>
                Player {isCross ? 'X' : 'O'}'s Turn
              </Text>
            </View>
          )}
        </View>
        {/* Game Grid */}
        <>
          <FlatList
            numColumns={3}
            data={gameState}
            style={styles.grid}
            keyExtractor={index => index.toString()}
            renderItem={({item, index}) => (
              <View key={index}>
                <Pressable
                  style={styles.card}
                  onPress={() => OnChangeItem(index)}>
                  {/* <Icons name={item} /> */}
                  {item === 'empty' ? (
                    <Icon name="pencil" size={38} />
                  ) : item === 'circle' ? (
                    <Icon name="circle-thin" size={38} />
                  ) : (
                    <Icon name="times" size={38} />
                  )}
                </Pressable>
              </View>
            )}
          />
        </>
        {/* Game Action */}
        <View>
          <Pressable style={styles.button} onPress={ReloadGame}>
            {gameWinner ? (
              <Text style={styles.gameBtnText}>Start new game</Text>
            ) : (
              <Text style={styles.gameBtnText}>Reload the game</Text>
            )}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  playerInfo: {
    marginVertical: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  winnerInfo: {
    backgroundColor: 'rgb(168, 255, 174)',
    padding: 10,
    margin: 10,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: '500',
  },
  playerX: {
    backgroundColor: 'rgb(255, 168, 168)',
  },
  playerO: {
    backgroundColor: 'rgb(168, 204, 255)',
  },
  gameTurnText: {
    fontSize: 24,
    fontWeight: '500',
  },
  grid: {
    marginVertical: 50,
    marginHorizontal: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 30,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(59, 59, 59, 0.79)',
  },
  gameBtnText: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default App;
