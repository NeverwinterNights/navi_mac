import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {RootDrawerParamList, RootStackParamList, RootTabsParamList} from "./types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Contacts} from "./screens/screens_for_tabs/Contacts";
import {Main} from "./screens/screens_for_tabs/Main";
import {Options} from "./screens/screens_for_tabs/Options";
import {AntDesign} from '@expo/vector-icons';
import {User} from "./screens/User";
import {Details} from "./screens/Details";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Home} from "./screens/Home";
import {RootNestedStackNavi} from "./screens/nested_navi/RootStackNavi";

export default function App() {

    // const Stack = createNativeStackNavigator<RootStackParamList>()

     const Tab = createBottomTabNavigator<RootTabsParamList>();

    // npx expo start --clear очистка браузера
    //const Drawer = createDrawerNavigator<RootDrawerParamList>();


    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            {/*<Stack.Navigator>*/}
            {/*/!*<Stack.Navigator initialRouteName="User"> // задает главную страницу*/}
            {/*    <Stack.Screen name={"Home"} component={Home}/>*/}
            {/*    <Stack.Screen name={"User"} component={User}/>*/}
            {/*    <Stack.Screen name={"Details"} component={Details}/>*/}
            {/*</Stack.Navigator>*/}

            <Tab.Navigator screenOptions={({route, navigation}) => {
                let iconName: keyof typeof AntDesign.glyphMap

                return {
                    tabBarIcon: ({focused, size,color}) => {
                        if (route.name === "Main") {
                            iconName = "stepforward"
                        }
                        if (route.name === "Contacts") {
                            iconName = "plus"
                        }
                        if (route.name === "Options") {
                            iconName = "book"
                        }
                        return <AntDesign name={iconName} size={24} color={focused ? "red" : "black"}/>
                    }
                }

            }}>
                <Tab.Screen name={"Main"} component={Main}/>
                <Tab.Screen name={"Contacts"} component={RootNestedStackNavi}/>
                <Tab.Screen name={"Options"} component={Options}/>
            </Tab.Navigator>

            {/*<Drawer.Navigator>*/}
            {/*    <Drawer.Screen name={"Main"} component={Main}/>*/}
            {/*    <Drawer.Screen name={"Contacts"} component={Contacts}/>*/}
            {/*    <Drawer.Screen name={"Options"} component={Options}/>*/}
            {/*</Drawer.Navigator>*/}

        </NavigationContainer>
    );
}


