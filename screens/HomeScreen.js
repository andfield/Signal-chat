import React, { useLayoutEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem';

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal"
        })
    }, [])

    return (
        <SafeAreaView>
            <StatusBar style='light' />
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
