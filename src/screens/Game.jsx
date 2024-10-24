import { Alert, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const Game = ({ number }) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, number);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    

    const nextGuessHandler = (direction) => {

        if ((direction === "lower" && currentGuess < number) 
            || (direction === "greater" && currentGuess > number)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: 'cancel' }
            ]);
            return;
        }
        
        if (direction === "lower") {
            maxBoundary = currentGuess;
        }else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screens}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={{marginBottom: 5}}>Higher or Lower?</Text>
                <View>
                    <Button onPressHandle={() => nextGuessHandler("greater")} title="Greater" />
                    <Button onPressHandle={() => nextGuessHandler("lower")} title="Lower" />
                </View>
            </View>
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