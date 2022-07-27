import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Welcome} from '../pages/Welcome'
import { SingUp } from '../pages/SingUp'
import { SingIn } from '../pages/SingIn';





const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />

            <Screen
            name="SingIn"
            component={SingIn}
            options={{ headerShown: false}}
            />

             <Screen
            name="SingUp"
            component={SingUp}
            options={{ headerShown: false}}
            />

        </Navigator>
    )
    } 
