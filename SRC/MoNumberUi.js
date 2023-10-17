import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
const MoNumberUi = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [value, setValue] = useState("");

  const phoneInput = useRef();
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
    phoneInputContainer: {
      width: width * 0.9,
      height: height * 0.1,
      marginBottom: 20
    },
    phoneInputTextContainer: {
      fontSize: 16, 
    },
    subtitle: {
      width: width * 0.9,
      marginBottom: 40,
    },
    button: {
      width: width * 0.9,
      height: height * 0.08,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 12,
      backgroundColor: '#3300ff',
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    footerText: {
      width: width * 0.9,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}><Text style={{ backgroundColor: '#3300ff', color: '#fff', marginHorizontal: 10, fontWeight: 'bold', fontSize: 24 }}> TC </Text> TexlaCulture</Text>
      <Text style={styles.mono}>Mobile Number</Text>

      <Text style={styles.label}>We'll send you a one-time verification code.</Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
          setValue(text)
        }}
        withDarkTheme
        withShadow
        autoFocus
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.phoneInputTextContainer}
      />
      <Text style={styles.subtitle}>By Continuing, I agree to the <Text style={{color:'#3300ff'}}>Terms of Use & Privacy Policy</Text></Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Otp')}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Having Trouble Logging in?<Text style={{color:'#3300ff'}}> Get Help</Text> </Text>
    </View>
  );
};



export default MoNumberUi;
