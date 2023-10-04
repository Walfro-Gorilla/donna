import React, { useRef, useState } from "react";
// importamos los componetnes a utilizar
import { View, Text, StyleSheet, Dimensions, ViewBase, TextInput, Image } from "react-native";
// importamos los estilos globales
import { colors, parameters, title } from "../../global/styles";
// importamos los Iconos
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";

// importamos el carousel 'Swiper'
import Swiper from 'react-native-swiper'
import { Button } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";


export default function SigninWelcomeScreen({navigation}) {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }} >Descubre nuevos platillos</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>en tu area...</Text>
            </View>

            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper autoplay>
                    <View style={styles.slide1}>
                        <Image
                            source={{
                                uri: "https://firebasestorage.googleapis.com/v0/b/huitziil-6a3e0.appspot.com/o/310955583_1296905127780034_6317308985429868009_n.jpg?alt=media&token=2a3de462-1129-42ce-b5c6-5971400fd76c"
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{
                                uri: "https://firebasestorage.googleapis.com/v0/b/huitziil-6a3e0.appspot.com/o/285005146_554884486231605_1937881736600289797_n.jpg?alt=media&token=5ad73213-c923-4f3e-a9fa-cf167d378020"
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{
                                uri: "https://firebasestorage.googleapis.com/v0/b/huitziil-6a3e0.appspot.com/o/285312545_556095079443879_8496397092863246819_n.jpg?alt=media&token=7e6b983c-cc15-4f02-9f83-9679d16f28b0"
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{
                                uri: "https://firebasestorage.googleapis.com/v0/b/huitziil-6a3e0.appspot.com/o/285511197_554884546231599_4101781661678420104_n.jpg?alt=media&token=9d47bb95-0f1a-473f-96d1-037c768e9772"
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 30 }} >
                    <Button
                        title="Iniciar Sesion"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}

                        onPress={()=> {
                            navigation.navigate("signInScreen")
                        }}
                    />
                </View>
                <View style={{  marginHorizontal: 20, marginTop:20 }}>
                    <Button
                        title={"Crear cuenta nueva"}
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createButton: {
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        // borderColor: "#E62E72",
        backgroundColor: "transparent",
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.grey1,
        
    },

    createButtonTitle: {
        color: colors.grey3,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})