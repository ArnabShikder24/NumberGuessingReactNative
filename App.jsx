import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './src/screens/StartGame';

export default function App() {
  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.gameContainer}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.gameContainer}
        imageStyle={{opacity: 0.15}}
      >
        <StartGame />
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  }
});
