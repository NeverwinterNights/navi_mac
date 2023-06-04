import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";

export type RootStackParamList = { // типизация стаков
    Home: undefined;
    Details: { id: number, title: string };
    User: undefined;
};

// типизация пропсов по скринам, их передаем в пропсы в скрине
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;


// export type RootTabsParamList = { // типизация табов  без вложенных
//     Main: undefined;
//     Contacts: undefined;
//     Options: undefined;
// };


export type RootDrawerParamList = { // типизация драверов
    Main: undefined;
    Contacts: undefined;
    Options: undefined;
};

//типизация вложенных стаков
export type RootNestedStackParamList = {
    One: undefined;
    Two: undefined;
    Three: undefined;
};


export type RootTabsParamList = { // типизация табов  без вложенных
    Main: undefined;
    Contacts: NavigatorScreenParams<RootNestedStackParamList>;
    Options: undefined;
};

// типизация для юзНавигейт
export type NavigationUseType = NavigationProp<RootTabsParamList>;

export const useAppNavigation = () => useNavigation<NavigationUseType>()
