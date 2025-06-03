import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>الدعم والتواصل</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:support@blossomstore.com')}>
        <Text style={styles.link}>البريد الإلكتروني: support@blossomstore.com</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('tel:+1234567890')}>
        <Text style={styles.link}>رقم الهاتف: +1234567890</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://blossomstore.com')}>
        <Text style={styles.link}>الموقع الإلكتروني: blossomstore.com</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff', padding:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20, color:'#000' },
  link: { fontSize:18, color:'#f4a9c5', marginBottom:15, textDecorationLine:'underline' }
});