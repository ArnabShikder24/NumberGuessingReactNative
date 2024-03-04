import { Alert, StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import Colors from "../constants/color";

const StartGame = ({setnumber}) => {
    const [enterNumber, setEnterNumber] = useState('');

    const confirmInputHandler = () => {
        if (enterNumber == '') {
            return;
        }
        const num = parseInt(enterNumber);
        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: () => setEnterNumber('')}]
            )
        }
        setnumber(enterNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={text => setEnterNumber(text)}
                value={enterNumber}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{flex: 1}}>
                    <Button onPressHandle={() => setEnterNumber('')} title="Reset" />
                </View>
                <View style={{flex: 1}}>
                    <Button onPressHandle={confirmInputHandler} title="Confirm" />
                </View>
            </View>
        </View> 
    );
};

export default StartGame;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});