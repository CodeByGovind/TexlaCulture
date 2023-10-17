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
      width: width * 0.7, // Use a percentage of the screen width
      height: height * 0.3, // Use a percentage of the screen height
      resizeMode: 'cover',
    },
    text: {
      width: width * 0.8, // Use a percentage of the screen width
      fontSize: 22,
      textAlign: 'center', color: 'black', fontWeight: '600'
    },
    text1: {
      width: width * 0.8, // Use a percentage of the screen width
      fontSize: 15,
      textAlign: 'center', color: 'black', fontWeight: '600'
    },
    button: {
      width: width * 0.7, // Use a percentage of the screen width
      height: height * 0.08, // Use a percentage of the screen height
      alignSelf: 'center',
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 12,
      backgroundColor: 'blue',
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
        <Text style={styles.text1}> With TexlaCultre's Employee Management System, unleash the true potential </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoNumber')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 290,
    height: 291.16,
    top: 163,
    left: 70,
    resizeMode: 'cover', // or 'contain' based on your design
  },
  text: {
    width: 399,
    height: 84,
    top: 578,
    left: 16,
    marginBottom: 7, // Gap between image and text
  },
  button: {
    width: 264,
    height: 57,
    top: 773,
    left: 83,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: 'blue', // Adjust the color based on your design
    marginTop: 40, // Gap between text and button
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default GetStartedScreen;
