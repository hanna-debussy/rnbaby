import { useCallback, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const SignIn = () => {

  const onSubmit = useCallback(() => {
    console.log("hey")
  },[])

  return (
    <View>
      <Text>로긘★</Text>
      <View>
        <Text>ID</Text>
        <TextInput placeholder="아이디를 입력하세요" />
      </View>
      <View>
        <Text>ID</Text>
        <TextInput placeholder="아이디를 입력하세요" />
      </View>
      <View>
        <Pressable onPress={onSubmit}>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignIn