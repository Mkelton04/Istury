import React, {useState, useEffect} from 'react';
import { View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView,
    Animated} from 'react-native';

import * as Animatable from 'react-native-animatable'

import styled from 'styled-components/native'

import { useNavigation, UseNavigation} from '@react-navigation/native'

export function SingIn() {
    const navigation = useNavigation();

    const [logo] = useState(new Animated.ValueXY({x: 242, y: 175}));



    return (
        <Background>

            <TouchableOpacity 
                style={styles.seta}
                onPress={ () => navigation.navigate('Welcome')}>
                <Image source={require('../assets/seta.png')} />
            </TouchableOpacity>

            <ContainerLogo>
                <Image
                source={require('../assets/image1.png')} />
            </ContainerLogo>

            <View style={styles.container}>


            <Text style={styles.register}>Login</Text>

            <KeyboardAvoidingView>

                <TextInput
                style={styles.input}
                placeholder='Email'
                autoCorrect={false}
                placeholderTextColor="#CCCCCC"
                />
                <TextInput
                style={styles.input}
                placeholder='Senha'
                autoCorrect={false}
                placeholderTextColor="#CCCCCC"
                />
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.buttonEsqueciSenha}>

                    <Text style={styles.textButton}>Esqueci minha senha</Text>

                </TouchableOpacity>



            <TouchableOpacity style={styles.buttonRegister}>

                <Image source={require('../assets/setaDireita.png')} />

            </TouchableOpacity>


            <TouchableOpacity       
                 style={styles.buttonLogar}
                 onPress={ () => navigation.navigate('SingIn')}
                 >
                    <Image tyle={styles.buttonGooglet} source={require('..//assets/logoGoogle.png')} />
                    <Text style={styles.buttonText}>Entrar com o Google</Text>
                </TouchableOpacity>

                </View>



        </Background>
    );
}

const Background = styled.View `
    flex:1;
    background-color: #004973;
`
const ContainerLogo = styled.View `
    flex:1;
    margin-top: 24px;
    justify-content: center;
    align-items: center;
`




const styles = StyleSheet.create({
 
    register:{
        fontSize: 30,
        fontWeight:'bold',
        color: '#FFFF', 
        marginTop: 10,
        marginLeft: 40,
    },
    input: {
        alignSelf: 'center',
        marginTop: 32,
        color: '#FFF',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
        width: '90%',
        marginBottom: 12,  

    },
    seta:{
        marginTop: 37,
        marginLeft: '10%',
        marginRight: 322,

    },
    buttonEsqueciSenha:{
        marginTop:10,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    textButton:{
        color: '#91BDD8',
        fontSize: 14,
        //textAlign: 'center',
    },
    buttonRegister:{
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: "#007FC7",
        borderRadius: 100,
        paddingVertical: 25,
        paddingHorizontal: 35,
        width: 30
    },
    buttonLogar: {
        marginTop: 20,
        marginLeft:10,
        alignSelf: 'center',
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: 262,
        height: 54,
        flexDirection: 'row',
    },    
    buttonText:{
        fontSize: 16,
        color: '#004973',
        fontWeight:'normal',
        alignSelf: 'center',
    },
    buttonGooglet:{
        alignSelf: 'center',

    },
    container:{
        flex:2,
        marginTop: 22,
    }
})