import { Text, View, Pressable, StyleSheet } from "react-native";

const Button = ({title, onPressHandle}) => {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, { opacity: 0.55 }] : styles.buttonInnerContainer}
                android_ripple={{ color: '#90364c' }}
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
        backgroundColor: '#90364c',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})