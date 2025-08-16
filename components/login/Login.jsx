import * as React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { styles, colors } from "./style/Login.styles";
import SocialButton from "./SocialButton";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      <View style={styles.container}>
        <View style={{ flex: 1 }} />

        <View style={styles.centerBox}>
          <Text style={[styles.tagline, { color: colors.brown }]}>
            가볍게 껴안고, 함께하는 육아
          </Text>
          <Image
            source={require("../../assets/Login/mainlogo.png")}
            style={styles.illo}
          />
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.buttonGroup}>
          <SocialButton
            variant="kakao"
            text="카카오로 시작하기"
            onPress={() => navigation.navigate("ProfileScreen")} //임시로 main페이지로 보냄
          />
          <View style={{ height: 12 }} />
          <SocialButton
            variant="google"
            text="Google로 시작하기"
            onPress={() => navigation.navigate("ProfileScreen")} //임시로 main페이지로 보냄
          />
          <View style={{ height: 130 }} />
          <Text style={styles.help}>로그인에 문제가 있으신가요?</Text>
        </View>

        <View style={{ height: 10 }} />
      </View>
    </SafeAreaView>
  );
}
