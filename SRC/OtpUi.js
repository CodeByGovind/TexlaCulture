import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react'

export default function OtpUi() {
  const { width, height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: height * 0.05
    },
    title: {
      width: width * 0.9,
      fontSize: 24, color: '#3300ff', fontWeight: '500', paddingBottom: 5
    },
    mono: {
      width: width * 0.9,
      fontSize: 20, color: '#000000', fontWeight: '500', paddingBottom: 8
    },
    label: {
      width: width * 0.9,
      fontSize: 14, color: '#000000', fontWeight: '500', paddingBottom: 10
    },
    input: {
      width: width * 0.9,
      height: height * 0.08,
      marginBottom: 8,
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
    },
    subtitle: {
      width: width * 0.9,
      marginBottom: 40,
    },
 
    footerText: {
      width: width * 0.9,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}><Text style={{ backgroundColor: '#3300ff', color: '#fff', marginHorizontal: 10, fontWeight: 'bold', fontSize: 24 }}> TC </Text> TexlaCulture</Text>
      <Text style={styles.mono}>Verify your Mobile Number</Text>

      <Text style={styles.label}> Please enter code send to your mobile number ending with *****3848</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Placeholder"
        returnKeyType='done'
        keyboardType='number-pad'
        maxLength={10}
      />

      <Text style={styles.subtitle}>Didn't receive the code?<Text style={{color:'#3300ff'}}> Resend OTP 0:10sec</Text> </Text>

    </View>
  );
};