import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";
import { useState } from "react";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const Game = ({ number }) => {
    const initialGuess = generateRandomBetween(1, 100, number);
    const [currentGuess, setCureentGuess] = useState(initialGuess)
    return (
        <View style={styles.screens}>
            <Text style={styles.title}>Opponent's Guess</Text>
        </View>
    );
};

export default Game;

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        padding: 24,
        marginTop: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.accent500,
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 10,
        textAlign: 'center'
    }
})