import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



export const Options = () => {

    return (
        <View style={styles.container}>
            <Text>Options</Text>
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
