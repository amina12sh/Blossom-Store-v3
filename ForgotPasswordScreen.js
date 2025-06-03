import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email.trim() === '') {
      Alert.alert('تنبيه', 'يرجى إدخال البريد الإلكتروني');
    } else {
      Alert.alert('تم', 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
      // يمكن ربطه بخدمة مثل Firebase لاحقاً
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>هل نسيت كلمة المرور؟</Text>
      <Text style={styles.subtitle}>أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور</Text>
      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>إرسال</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#000', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, marginBottom: 20 },
  button: { backgroundColor: '#f99cbf', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});