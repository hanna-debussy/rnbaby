import {useCallback, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DismissKeyboardView from '../common/DismissKeyboardView';

const Moments = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const getFilled = email && password;

  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('title', '이메일 없다해');
    }

    if (!password || !password.trim()) {
      return Alert.alert('title', '비밀번호 없다해');
    }

    Alert.alert('you made it', '로그인 되었다 해');
  }, [email, password]);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  return (
    // 키보드 올라와있을 때 원래는 키보드 바깥을 터치해도 키보드가 안 내려감
    // 또한 input에 focus 있을 때 input 바깥을 터치해도 키보드가 안 내려감
    // 이를 방지하기 위해 두 개로 감싸주는... 이상한 짓을 하게 되는데 이걸 컴포넌트화 하면 편하다
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    //   <KeyboardAvoidingView behavior="position">
    <DismissKeyboardView>
      <Text>로긘★</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          value={email}
          ref={emailRef}
          placeholder="이메일을 입력하세요"
          onChangeText={onChangeEmail}
          style={styles.textInput}
          importantForAutofill="yes"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          value={password}
          ref={passwordRef}
          placeholder="비밀번호를 입력하세요"
          onChangeText={onChangePassword}
          style={styles.textInput}
          secureTextEntry
          importantForAutofill="yes"
          keyboardType="decimal-pad"
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      </View>
      <View>
        <Pressable
          onPress={onSubmit}
          disabled={!getFilled}
          style={
            !getFilled
              ? styles.loginBtn
              : StyleSheet.compose(styles.loginBtn, styles.loginBtnActive)
          }>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
    //   </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    marginBottom: 30,
    borderBottomWemailth: StyleSheet.hairlineWemailth,
    borderBottomColor: 'red',
  },
  loginBtn: {
    backgroundColor: 'lightgray',
    wemailth: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWemailth: 1,
    borderRadius: 10,
  },
  loginBtnActive: {
    backgroundColor: 'skyblue',
  },
});

export default Moments;
