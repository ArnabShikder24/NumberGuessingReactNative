import { Text, View } from "react-native";
import Button from "../components/ui/Button";

const GameOver = ({ setGameIsOver, setNumber }) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={{ color: "#fff", fontSize: 24, marginBottom: 12 }}>Game is Over!</Text>
            <Button onPressHandle={() => {
                setNumber(null);
                setGameIsOver(false);
            }} title="play Again"/>
        </View>
    );
};

export default GameOver;