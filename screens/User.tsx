import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {UserProps} from "../types";

type UserPropsType = {}

export const User = ({route, navigation}: UserProps) => {
    return (
        <View style={styles.container}>
            <Text>User</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate("Details", {id: 2, title: "Pavel"})}/>
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
