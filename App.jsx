import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './src/screens/StartGame';
import { useState } from 'react';
import Game from './src/screens/Game';
import Colors from './src/constants/color';

export default function App() {
  const [number, setnumber] = useState(null);

  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.gameContainer}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.gameContainer}
        imageStyle={{opacity: 0.15}}
      >
        <SafeAreaView style={styles.gameContainer}>
          {number ? <Game number={number} /> : <StartGame setnumber={setnumber} />}
        </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  }
});
