import { Text, View } from "react-native";

const Button = ({title}) => {
    return (
        <>
            <View>
                <Text>{title}</Text>
            </View>
        </>
    );
};

export default Button;