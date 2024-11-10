import { Text } from "react-native";

export const ChatScreen = ({navigation, route}: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};