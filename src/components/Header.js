import React from "react";
// importamos los componetnes a utilizar
import { View, Text, StyleSheet, Dimensions, ViewBase } from "react-native";
// importamos los estilos globales
import { colors, parameters } from "../global/styles";
// importamos los Iconos
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";




export default function Header({ title, type, navigation }) {
    return (
        <View style={styles.header}>
            <View>
                <SafeAreaView
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}>

                    <View style={{ flexDirection: 'row', marginLeft:20 }}>
                        <Icon
                            name={type}
                            color={colors.headerText}
                            size={28}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        />
                        <View>
                            <Text style={styles.headerText} > {title} </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    headerText:{
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30
    }
})