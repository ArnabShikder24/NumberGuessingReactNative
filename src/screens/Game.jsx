import { Alert, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import NumberContainer from "../components/game/NumberContainer";
import AntDesign from '@expo/vector-icons/AntDesign';

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

const Game = ({ number, handleGameOver }) => {
    const userNumber = parseInt(number);
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            handleGameOver();
        }
    }, [currentGuess, userNumber])

    const nextGuessHandler = (direction) => {

        if ((direction === "lower" && currentGuess < userNumber) 
            || (direction === "higher" && currentGuess > userNumber)) {
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
                    <Button onPressHandle={() => nextGuessHandler("higher")} iconComponent={<AntDesign name="plus" size={22} color="white" />} />
                    <Button onPressHandle={() => nextGuessHandler("lower")} iconComponent={<AntDesign name="minus" size={22} color="white" />} />
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