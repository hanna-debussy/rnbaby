import { Text, View, Pressable } from 'react-native';
import { useCallback } from 'react';

const SchedulesHome = ({navigation }) => {
  const linkTo = useCallback((nextPage) => {
    navigation.push(nextPage);
  });

  return (
    <View>
      <Text>
        Schedules home
      </Text>
      <Pressable onPress={() => linkTo("SchedulesCreate")}>
        <Text>생성</Text>
      </Pressable>
    </View>
  )
}

export default SchedulesHome
