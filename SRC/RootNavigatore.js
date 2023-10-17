import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetStartedScreen from './GetStartedScreen';
import MoNumberUi from './MoNumberUi';
import OtpUi from './OtpUi';
import NextScreen from './NextScreen';

const Stack = createStackNavigator();

export default function RootNavigatore() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Next">
                <Stack.Screen name="Next" component={NextScreen} options={{headerShown:false}}/>
                <Stack.Screen name="GetStarted" component={GetStartedScreen}  />
                <Stack.Screen name="MoNumber" component={MoNumberUi} />
                <Stack.Screen name="Otp" component={OtpUi} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
