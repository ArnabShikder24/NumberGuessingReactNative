import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './src/screens/StartGame';
import { useState } from 'react';
import Game from './src/screens/Game';
import Colors from './src/constants/color';
import GameOver from './src/screens/GameOver';

export default function App() {
  const [number, setNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [round, setRound] = useState(1);

  const handleGameOver = () => setGameIsOver(true);

  let screen = <StartGame setNumber={setNumber}/>;

  if (number !== null) {
    screen = <Game number={number} handleGameOver={handleGameOver} round={round} setRound={setRound} />;
  }

  if (gameIsOver) {
    screen = <GameOver setGameIsOver={setGameIsOver} round={round} setRound={setRound} userNumber={number} setNumber={setNumber} />;
  }

  return (
    <>
    <StatusBar backgroundColor={Colors.primary800} barStyle="light-content" />
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.gameContainer}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.gameContainer}
        imageStyle={{opacity: 0.15}}
      >
        <SafeAreaView style={styles.gameContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  }
});
