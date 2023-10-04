import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";


export default function App() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.Statusbar}
                />

                <RootNavigator />

                        

            </View>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 }
})