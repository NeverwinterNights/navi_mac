import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootNestedStackParamList} from "../../types";
import {One} from "./nested_screens/One";
import {Two} from "./nested_screens/Two";
import {Three} from "./nested_screens/Three";


export const RootNestedStackNavi = () => {

    const Stack = createNativeStackNavigator<RootNestedStackParamList>()
    return (
        <Stack.Navigator>
        <Stack.Screen name={"One"} component={One}/>
        <Stack.Screen name={"Two"} component={Two}/>
        <Stack.Screen name={"Three"} component={Three}/>
    </Stack.Navigator>
    );
};

