import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



export const Main = () => {

    return (
        <View style={styles.container}>
            <Text>Main</Text>
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
