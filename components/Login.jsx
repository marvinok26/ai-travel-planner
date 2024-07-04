import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/img4.jpg')}
      style={{
        width: '100',
        height: 520,
      }}
      />
      <View style={styles.container}>
        <Text
        style={{
            fontSize: 30,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            marginTop:10
        }}
        >AI Travel Planner</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop:20
        }}>Discover your next adventure effortlessly. Personalized itenaries at your fingertips. Travel smarter with AI driven insights</Text>
        <View style={styles.button}>
            <Text style={{color:Colors.WHITE, 
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17}}>Sign in With Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        padding: 15
    },
    button:{
        padding: 15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop: '15%'

    }
})