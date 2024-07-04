import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <View
      style={{
        padding: 25,
        padddingTop: 40,
        marginTop: 30,
        backgrooundColor: Colors.WHITE,
        height: '100%'
      }}>

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 70,
        textAlign: 'center'
      }}>Create New Account</Text>

      {/* User Full Name */}
      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Full Name' />
      </View>

      {/* Email */}
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter email' />
      </View>

      {/* password */}
      <View style={{
        marginTop: 30
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter password' />
      </View>

      {/* Sign In BUtton */}
      <View style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center'
        }}>Create Account</Text>
      </View>
      {/* Create account button*/}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 15,
          borderWidth: 1
        }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center'
        }}>Sign In</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'
  }
})