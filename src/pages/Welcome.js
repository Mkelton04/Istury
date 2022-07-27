import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

import * as Animatable from 'react-native-animatable'

import { useNavigation, UseNavigation} from '@react-navigation/native'

export function Welcome() {
    const navigation = useNavigation();
    return (
        <Container>
           
            <ContainerLogo>
                <Animatable.Image delay={100}
                    animation="flipInY"
                    source={require('../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </ContainerLogo>

            <ContainerForm>
                <Title>
                Seja bem-vindo ao Istudy
                seu aplicativo de estudo com
                flashcards!
                </Title>

                <ContainerButton> 

                <ButtonSingUp
                     onPress={ () => navigation.navigate('SingUp')}>
                    <ButtonText>Cadastrar</ButtonText>
                </ButtonSingUp>

                <ButtonSingIn
                    onPress={ () => navigation.navigate('SingIn')}>
                    <ButtonText>Logar</ButtonText>
                </ButtonSingIn>

                

                </ContainerButton>

            </ContainerForm>

        </Container>
    );
}


const Container = styled.View `
    flex:1;
    background-color: #004973;
`
const ContainerLogo = styled.View `
    flex:1; 
    justify-content: center;
    align-items: center;
    margin-top: 75px;
`
const ContainerForm = styled.View `
    flex:2;
    background-color: #004973;
    align-items: center;
`
const Title = styled.Text ` 
    font-size: 30px;
    font-weight: bold;
    color: #FFFF;
    margin-left: 62px;
    margin-right: 62px;
    margin-top: 78px;
`
const ContainerButton = styled.View `
    width: 260px;
    margin-top: 120px;
    justify-content: center;
    background-color: rgba(50, 50, 50, 0.48);
    border-radius: 20px;
    border-width: 2px;
    border-color: #fff;
    flexDirection: row;
`
const ButtonSingUp = styled.TouchableOpacity `
    margin-top: -2px;
    align-items: center;
    justify-content: center;
    background-color: #007FC7;
    border-radius: 20px;
    height: 62px;
    width: 130px;
    border-width: 2px;
    border-color: #fff;
`
const ButtonSingIn = styled.TouchableOpacity `
    align-items: center;
    justify-content: center;
    align-self: center;
    border-radius: 20px;
    width: 130px;
    height: 60px;
`
const ButtonText = styled.Text `
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    align-self: center;
`  