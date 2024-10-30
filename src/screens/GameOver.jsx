import { Image, Text, View } from "react-native";
import Button from "../components/ui/Button";
import success from "../../assets/images/success.png";
import Colors from "../constants/color";

const GameOver = ({ setGameIsOver, setNumber }) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={{ color: "#fff", fontSize: 24, marginBottom: 12 }}>Game is Over!</Text>
            <Image source={success} style={{width: 300, height: 300, borderWidth: 1, borderColor: "#000", borderRadius: 1000, marginBottom: 10}} />
            <Button onPressHandle={() => {
                setNumber(null);
                setGameIsOver(false);
            }} title="play Again" />
            <Text style={{marginTop: 10, fontSize: 24, paddingHorizontal: 20, textAlign: "center"}}>Your phone need <Text style={{color: Colors.primary600}}>X</Text> Round to guess <Text style={{color: Colors.primary600}}>Y</Text> Number</Text>
        </View>
    );
};

export default GameOver;