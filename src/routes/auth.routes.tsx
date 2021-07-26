
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/home';
import { SignIn } from '../screens/signin';
import AppointmentsDetails from '../screens/AppointmentsDetails';
import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100,
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentsDetails"
                component={AppointmentsDetails}
            />
        </Navigator>
    );
}
