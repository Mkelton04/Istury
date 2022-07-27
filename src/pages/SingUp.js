import React, {useState, useEffect} from 'react';
import { View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView,
    Animated} from 'react-native';

import styled from 'styled-components/native'

import * as Animatable from 'react-native-animatable'

import { useNavigation, UseNavigation} from '@react-navigation/native'

export function SingUp() {
    const navigation = useNavigation();

    const [logo] = useState(new Animated.ValueXY({x: 242, y: 175}));



    return (

        
        <Background>

        <KeyboardAvoidingView>
            <Seta
                onPress={ () => navigation.navigate('Welcome')}>
                <Image source={require('../assets/seta.png')} />
            </Seta>

            <ContainerLogo>
                <Animated.Image style={{
                    width: logo.x,
                    height: logo.y,
                }}
                source={require('../assets/logoSingUp.png')} />
                </ContainerLogo>


            <Container>

            <Register>Registrar</Register>

                <RegisterInput
                placeholder='Nome'
                autoCorrect={false}
                placeholderTextColor="#CCCCCC"
                />
                <RegisterInput
                placeholder='Email'
                autoCorrect={false}
                placeholderTextColor="#CCCCCC"
                />
                <RegisterInput
                placeholder='Senha'
                autoCorrect={false}
                placeholderTextColor="#CCCCCC"
                />

            <ButtonRegister>

                <Image source={require('../assets/setaDireita.png')} />

            </ButtonRegister> 


            </Container>

          

            </KeyboardAvoidingView>

            </Background>
            

    );
}

const Background = styled.View `
    flex:1;
    align_items: center;
    justify-content: center;
    background-color: #004973;
`
const Container = styled.View `
    flex:2;
    margin-top: 22px;
`
const Register = styled.Text `
    font-size: 30px;
    font-weight: bold;
    color: #FFFF; 
`
const RegisterInput = styled.TextInput `
    margin-top: 20px;
    color: #FFF;
    font-size: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #FFF;
    width: 287px;
    height: 40px;
    marginBottom: 12px;  
`
const Seta = styled.TouchableOpacity `
    margin-top: 20px;
    
`
const ButtonRegister = styled.TouchableOpacity `
    margin-top: 26px;
    align-self: center;
    align-items: center;
    background-color: #007FC7;
    border-radius: 100px;
    padding-vertical: 25px;
    padding-horizontal: 35px;
    width: 30px;
` 
const ContainerLogo = styled.View `
    margin-top: 24px;
    flex:1;
    justify-content: center;
    align-items: center;
`
