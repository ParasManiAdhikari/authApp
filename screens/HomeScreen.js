import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import { customerEmail } from './LoginScreen'
import { TouchableOpacity } from 'react-native-web'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';



const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSingOut = () => {
    auth.signOut()
      .then(() => {
        navigation.replace('Login')
      })
      .catch(error => {
        alert(error.message)
      }
      )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Welcome to your Homepage!</Text>
      <Text style={styles.buttonText}>Your email is : {auth.currentUser?.email} </Text>
      <TouchableOpacity
        onPress={handleSingOut}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    height: 50,
    backgroundColor: 'white',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
})