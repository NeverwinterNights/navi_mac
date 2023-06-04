import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DetailsProps} from "../types";


export const Details = ({route, navigation}: DetailsProps) => {
    const {id, title}=route.params
    return (
        <View style={styles.container}>
            <Text>Details</Text>
            <Text>id: {id}</Text>
            <Text>title: {title}</Text>
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
