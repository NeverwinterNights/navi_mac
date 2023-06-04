import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeProps} from "../types";

type HomePropsType = {}

export const Home = ({route, navigation}: HomeProps) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to Users" onPress={()=> navigation.navigate("User")}/>
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
