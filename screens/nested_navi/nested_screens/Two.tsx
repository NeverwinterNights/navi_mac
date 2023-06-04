import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from "../../../types";

type TwoPropsType = {}

export const Two = ({}: TwoPropsType) => {
    const navigation = useAppNavigation()

    return (
        <View style={styles.container}>
            <Text>Two</Text>
            <Button title="Go to Three" onPress={()=> navigation.navigate("Contacts", {screen:"Three"})}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    }
});
