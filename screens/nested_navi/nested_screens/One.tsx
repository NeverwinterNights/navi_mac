import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from "../../../types";

type OnePropsType = {}

export const One = ({}: OnePropsType) => {
    const navigation = useAppNavigation()
    return (
        <View style={styles.container}>
            <Text>One</Text>
            <Button title="Go to Two" onPress={() => navigation.navigate("Contacts", {screen:"Two"})}/>
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
