import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import NumberContainer from "../components/game/NumberContainer";
import AntDesign from '@expo/vector-icons/AntDesign';
import LogsItems from "../components/game/LogsItems";

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
    const [logs, setLogs] = useState([{
        id: 1,
        guess: initialGuess
    }]);
    const [round, setRound] = useState(1);

    useEffect(() => {
        if (currentGuess === userNumber) {
            handleGameOver();
        }
    }, [currentGuess, userNumber, handleGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

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
        setLogs((prev) => [...prev, {
            id: round + 1,
            guess: newRndNumber
        }]);
        setRound(prev => prev + 1);
    }

    return (
        <View style={styles.screens}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={{marginBottom: 5}}>Higher or Lower?</Text>
                <View style={{
                    backgroundColor: "#272727",
                    padding: 20,
                    borderRadius: 20,
                }}>
                    <Button onPressHandle={() => nextGuessHandler("higher")} iconComponent={<AntDesign name="plus" size={22} color="white" />} />
                    <Button onPressHandle={() => nextGuessHandler("lower")} iconComponent={<AntDesign name="minus" size={22} color="white" />} />
                </View>
            </View>
            <FlatList
                style={{marginVertical: 15}}
                    data={logs}
                    renderItem={({item}) => (
                        <LogsItems count={item.id} number={item.guess} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            {/* <View style={{marginTop: 20, paddingBottom: 20}}>
                
            </View> */}
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