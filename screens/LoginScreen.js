import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native-web'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text>LoginScreen</Text>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rosegold',
    },
})