import React from "react";

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import SigninWelcomeScreen from "../screens/authScreens/SigninWelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";

const Stack = createNativeStackNavigator();


export default function AuthStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="signInWelcomeScreen"
                component={SigninWelcomeScreen}
                options = {{
                    headerShown: false,
                  
                }}
            />

            <Stack.Screen
                name="signInScreen"
                component={SigninScreen}
                options = {{
                    headerShown: false,
                    // ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Stack.Navigator>
    );
}