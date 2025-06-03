import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('تنبيه', 'يرجى تعبئة جميع الحقول');
      return;
    }

    // هون بتحطي كود التسجيل الحقيقي أو ال API
    Alert.alert('تم', 'تم إنشاء الحساب بنجاح!');
    navigation.navigate('Login'); // بتروحي على شاشة تسجيل الدخول بعد النجاح
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إنشاء حساب جديد</Text>

      <TextInput
        style={styles.input}
        placeholder="الاسم"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>إنشاء حساب</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>لديك حساب؟ تسجيل الدخول</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#000' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 8, backgroundColor: '#f9f9f9' },
  button: { backgroundColor: '#e89baa', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { marginTop: 15, textAlign: 'center', color: '#555', textDecorationLine: 'underline' },
});