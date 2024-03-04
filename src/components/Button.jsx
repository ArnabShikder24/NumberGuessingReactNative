import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/color";

const Button = ({title, onPressHandle}) => {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, { opacity: 0.55 }] : styles.buttonInnerContainer}
                android_ripple={{ color: Colors.primary600 }}
                onPress={onPressHandle}>
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        elevation: 2,
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})