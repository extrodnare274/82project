import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';


import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {RFValue}
export default class Feed extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Feeds</Text>
            </View>
        )
    }
}