// src/screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>أهلاً بكِ في Blossom Store</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>ابدئي الآن</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF0F5',
  },
  logo: {
    width: 120, height: 120, marginBottom: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFB6C1', padding: 15, borderRadius: 25,
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold',
  },
});