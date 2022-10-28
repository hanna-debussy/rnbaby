import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Group = () => {
  return (
    <View>
      <Text>
        group
      </Text>
    </View>
  )
}

export default Group