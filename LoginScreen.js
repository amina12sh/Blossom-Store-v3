// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// هنا ممكن تضيفي مكتبات تسجيل دخول فيسبوك ومايكروسوفت لاحقًا (SDKs)

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = () => {
    if (!email || !password) {
      Alert.alert('خطأ', 'يرجى إدخال البريد الإلكتروني وكلمة المرور');
      return;
    }
    // هنا تضيفي منطق تسجيل الدخول بالبريد الإلكتروني
    Alert.alert('نجاح', `تم تسجيل الدخول بالبريد الإلكتروني: ${email}`);
  };

  const handlePhoneLogin = () => {
    if (!phone || !password) {
      Alert.alert('خطأ', 'يرجى إدخال رقم الهاتف وكلمة المرور');
      return;
    }
    // هنا تضيفي منطق تسجيل الدخول برقم الهاتف
    Alert.alert('نجاح', `تم تسجيل الدخول برقم الهاتف: ${phone}`);
  };

  const handleFacebookLogin = () => {
    Alert.alert('تسجيل دخول فيسبوك', 'سيتم فتح فيسبوك قريبًا');
    // ربط تسجيل الدخول بفيسبوك لاحقًا
  };

  const handleMicrosoftLogin = () => {
    Alert.alert('تسجيل دخول مايكروسوفت', 'سيتم فتح مايكروسوفت قريبًا');
    // ربط تسجيل الدخول بمايكروسوفت لاحقًا
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول</Text>

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="رقم الهاتف"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
        <Text style={styles.buttonText}>تسجيل دخول بالبريد</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePhoneLogin}>
        <Text style={styles.buttonText}>تسجيل دخول برقم الهاتف</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
        <Text style={styles.socialButtonText}>تسجيل دخول فيسبوك</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonMicrosoft} onPress={handleMicrosoftLogin}>
        <Text style={styles.socialButtonText}>تسجيل دخول مايكروسوفت</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD1DC',
    borderRadius: 25,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#FFB6C1',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  socialButton: {
    backgroundColor: '#3b5998', // فيسبوك أزرق
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  socialButtonMicrosoft: {
    backgroundColor: '#0078d4', // مايكروسوفت أزرق مميز
    padding: 15,
    borderRadius: 25,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});