import React, { useRef, useState } from "react";
// importamos los componetnes a utilizar
import { View, Text, StyleSheet, Dimensions, ViewBase, TextInput } from "react-native";
// importamos los estilos globales
import { colors, parameters, title } from "../../global/styles";
// importamos los Iconos
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";
// import header
import Header from "../../components/Header";
// importamos Animatable
import * as Animatable from 'react-native-animatable'
import { Button, SocialIcon } from "react-native-elements";




export default function SigninScreen({navigation}) {


    const [textInput2Focussed, setTextInput2Focussed] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style={styles.container}>

            <Header title="Mi cuenta" type={'arrow-left'} navigation={navigation} />

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title} >Iniciar Sesion</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={styles.text1} >Por favor, ingrese su email y contraseña</Text>
                <Text style={styles.text1} >registrados con su cuenta.</Text>
            </View>

            <View style={{ marginTop: 20 }} >
                <View>
                    <TextInput
                        style={styles.textInput1}
                        placeholder="E-mail"
                        ref={textInput1}
                    />
                </View>

                <View style={styles.textInput2}>
                    <Animatable.View
                        animation={textInput2Focussed ? "" : "fadeInLeft"}
                        duration={200}
                    >
                        <Icon
                            name="lock"
                            color={colors.grey3}
                            size={23}
                            style={{ marginTop: "100%" }}

                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: "80%" }}
                        placeholder="Contraseña"
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Focussed(false)
                        }}
                        onBlur={() => {
                            setTextInput2Focussed(true)
                        }}
                    />
                    <Animatable.View
                        animation={textInput2Focussed ? "" : "fadeInLeft"}
                        duration={200}
                    >
                        <Icon
                            name="eye-slash"
                            color={colors.grey3}
                            size={23}
                            style={{ marginRight: 10, marginTop: 10 }}
                        />
                    </Animatable.View>
                </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30 }} >
                <Button
                    title="Iniciar Sesion"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>¿Olvidaste tu contraseña?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 20, marginBottom: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>O bien...</Text>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Inicia Sesion con Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Inicia Sesion con Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginLeft: 20, marginTop: 25 }}>
                <Text style={{ ...styles.text1, }}>¿Nuevo en Doña?</Text>
            </View>

            <View style={{alignItems:"flex-end", marginHorizontal:20}}>
                <Button 
                title={"Crear cuenta nueva"}
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },

    textInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        // allignContent: "center",
        // allignItems: "center",
        paddingLeft: 15

    },

    SocialIcon: {
        borderRadius: 12,
        height: 50
    },

    createButton:{
        alignContent:"center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 2,
        borderColor:"#E62E72",
        backgroundColor:"transparent",
        height: 40,
        paddingHorizontal: 20        
    },

    createButtonTitle: {
        color: "#E62E72",
        fontSize: 16 ,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

})