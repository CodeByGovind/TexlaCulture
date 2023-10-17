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
      fontSize: 24, color: 'blue', fontWeight: '500', paddingBottom: 5
    },
    mono: {
      width: width * 0.9,
      fontSize: 20, color: '#000', fontWeight: '500', paddingBottom: 8
    },
    label: {
      width: width * 0.9,
      fontSize: 14, color: 'grey', fontWeight: '400', paddingBottom: 10
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
    button: {
      width: width * 0.9,
      height: height * 0.08,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 12,
      backgroundColor: 'blue',
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
      <Text style={styles.title}><Text style={{ backgroundColor: 'blue', color: '#fff', marginHorizontal: 10, fontWeight: 'bold', fontSize: 24 }}> TC </Text> TexlaCultre</Text>
      <Text style={styles.mono}>Verify your Mobile Number</Text>

      <Text style={styles.label}>Your Text Here</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Placeholder"
        returnKeyType='done'
        keyboardType='number-pad'
        maxLength={10}
      />

      <Text style={styles.subtitle}>Subtitle Text</Text>

    </View>
  );
};