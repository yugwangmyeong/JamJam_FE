import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import ProfileScreen from "./components/login/ProfileScreen";
import MyPage from "./components/main/mypage/MyPage";
import ProfileEditScreen from "./components/main/mypage/ProfileEditScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
