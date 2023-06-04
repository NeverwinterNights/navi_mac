import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from "../../../types";

type ThreePropsType = {}

export const Three = ({}: ThreePropsType) => {
    const navigation = useAppNavigation()

    return (
        <View style={styles.container}>
            <Text>Three</Text>
            <Button title="Go to Options" onPress={()=> navigation.navigate("Options")}/>

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
