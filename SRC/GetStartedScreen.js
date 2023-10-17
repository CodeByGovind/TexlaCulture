import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    image: {
      width: width * 0.7, 
      height: height * 0.3,
      resizeMode: 'cover',
    },
    text: {
      width: width * 0.8,
      fontSize: 22,
      textAlign: 'center', color: 'black', fontWeight: '600'
    },
    text1: {
      width: width * 0.8,
      fontSize: 15,
      textAlign: 'center', color: 'black', fontWeight: '600'
    },
    button: {
      width: width * 0.7,
      height: height * 0.08, 
      alignSelf: 'center',
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 12,
      backgroundColor: '#3300ff',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Image
         source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvEh7E3RcTPrakZhCu3iNyrat88HiLBt-RDei-IshfgmEtGbzuIpEoVBVgGKpbQTCpAw&usqp=CAU'
        }}
        style={styles.image}
      />

<View>
        <Text style={styles.text}>Empower Your workforce</Text>
        <Text style={styles.text1}> With TexlaCulture's Employee Management System, unleash the true potential </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoNumber')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};


export default GetStartedScreen;
