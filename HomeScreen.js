// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌸 Blossom Store 🌸</Text>
      <Text style={styles.subtitle}>مرحباً بك في عالم الإكسسوارات اليدوية</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductDetails')}
      >
        <Text style={styles.buttonText}>عرض المنتجات</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>تسجيل الدخول</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#FFF0F5', // زهري فاتح
    minHeight: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFD1DC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});