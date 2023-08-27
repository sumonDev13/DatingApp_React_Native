import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Open App.js to start working </Text>
      <StatusBar style="auto" />
    </View>
  );
}


