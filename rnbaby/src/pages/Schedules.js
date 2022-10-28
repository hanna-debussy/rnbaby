import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SchedulesHome from '../components/schedules/SchedulesHome';
import SchedulesCreate from '../components/schedules/SchedulesCreate';

const Stack = createNativeStackNavigator();

const Schedules = () => {
  return (
    <Stack.Navigator initialRouteName="SchedulesHome">
      <Stack.Screen
        name="SchedulesHome"
        component={SchedulesHome}
        options={{title: '약속 홈이다 이말이야'}}
      />
      <Stack.Screen
        name="SchedulesCreate"
        component={SchedulesCreate}
        options={{title: '약속 만들라 이말이야'}}
      />
    </Stack.Navigator>
  )
}

export default Schedules