import { Text, View } from 'react-native';
import Colors from '../../constants/color';

const LogsItems = ({number, count}) => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: Colors.accent500,
      marginBottom: 10,
      borderRadius: 10
    }}>
      <Text>{count}.</Text>
      <Text>Opponent Guess: {number}</Text>
    </View>
  );
};

export default LogsItems;