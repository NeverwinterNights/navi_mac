import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



export const Contacts = () => {

    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
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
