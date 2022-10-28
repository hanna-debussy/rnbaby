import { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Pressable, Text, TouchableHighlight, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen({navigation}) {
  const linkToDetail = useCallback(() => {
    // 이동은 navigation.navigate, 쌓기는 navigation.push
    navigation.push('Details');
  });

  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: 'tomato',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable onPress={linkToDetail}>
          <Text style={{color: 'white', fontWeight: '700'}}>
            color는 text에 직접 주기
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'gold',
          justifyContent: 'flex-start',
        }}>
        <TouchableHighlight
          style={{paddingHorizontal: 20, paddingVertical: 40}}>
          <Text>
            flex는 비율이다... (내 플렉스)/(전체 플렉스) 만큼 내가 차지하는 거다
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

function DetailScreen({navigation, route}) {
  const linkToHome = useCallback(() => {
    navigation.push('Home');
  });

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 3,
          backgroundColor: 'gold',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Pressable onPress={linkToHome}>
          <Text>컴백홈</Text>
        </Pressable>
      </View>
      <Text style={{flex: 2, backgroundColor: 'green'}}>hey</Text>
    </View>
  );
}

// Stack이라고 보통 칭한다 이건 걍 외워둘 것
const Stack = createNativeStackNavigator();
// 하단 탭 생성
const Tab = createBottomTabNavigator();

function App() {
  const [modal, setModal] = useState(true);
  
  const closeModal = useCallback(() => {
    setModal(!modal)
  });

  return (
    // react navigation 쓸 때에는 최상단에 NavigationContainer로 묶어준다 약간 routerView 느낌이구나
    // React Navigation은 자동적으로 safeAreaView가 적용되어있다
    <NavigationContainer>
      {/* Stack.Navigator가 Stack.Screen들을 그룹으로 묶어서 navigation 기능을 이용하게 한다 */}
      {/* initialRouteName: 얘를 기본 화면으로 설정하겠다는 말 */}
      <Stack.Navigator initialRouteName="Home">
        {/* 그리고 미리 화면들을 배치해놔야 하는구나 */}
        {/* 아 스크린 구성 표현에는 두 가지 방법이 있으나 첫 번째 스크린을 주로 사용한다*/}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '헉스 헤더를 자동으로', headerShown: true}}
          modal={modal}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>

      {/* 모달을 만들려면 가장 아래에 */}
      {/* 하지만 다른 서드파티가 많다는 사실 */}
      { modal && (
        <View
          style={styles.modal}>
          <View
            style={styles.modalInner}>
            <Text>Hello I'm Modal</Text>
            <Pressable
              onPress={closeModal}
              style={styles.btn}>
              <Text>close</Text>
            </Pressable>
          </View>
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalInner: {
    position: 'absolute',
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white"
  }
})

// export default App;
