import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
// import { auth } from '../firebase'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';


const LoginScreen = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('User account created!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                if (error.code === 'auth/missing-email') {
                    alert('No email address!');
                }
                console.error(error);
            });
        console.log(email, password);
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                customerEmail = email;
                alert('You are Logged in!');
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    alert('User not found!');
                }
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong password!');
                }
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>FIRESHIP LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.Input}>
                </TextInput>
                <TextInput placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.Input}
                    secureTextEntry>
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { handleLogin() }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { handleSignUp() }}
                    style={[styles.button, styles.registerButton]}
                >
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rosegold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '60%',
    },
    Input: {
        backgroundColor: '#DFE8CC',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        borderWidth: 2,
        borderColor: 'grey',
    },
    buttonContainer: {
        marginTop: 60,
        width: '30%',

    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#224B0C',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#F0F2B6',
    },
    registerButton: {
        backgroundColor: '#FF9F29',
        marginBottom: 100,
    },
    registerButtonText: {
        color: '#1A4D2E',
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Object Sans',
        color: '#AC4425',
        marginBottom: 150,
    },
})