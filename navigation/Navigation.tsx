import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import First from "../screen/First";
import Second from "../screen/Secon";  
import Login from "../screen/Login";

// Define type for navigation stack
export type RootStackParamList = {
  First: undefined;
  Second: undefined;
  Login: undefined;
};

// Create a stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        {/* First screen */}
        <Stack.Screen 
          name="First" 
          component={First} 
          options={{ headerShown: false }} 
        />
        
        {/* Second screen */}
        <Stack.Screen 
          name="Second" 
          component={Second} 
          options={{ headerShown: false }} 
        />
        
        {/* Login screen */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
