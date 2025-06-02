import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { productId, productName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productName}</Text>
      <Text style={styles.description}>تفاصيل وصورة المنتج رح تنضاف هون لاحقاً.</Text>
      <Button title="العودة" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF5F5' },
  title: { fontSize: 24, marginBottom: 10, color: '#000' },
  description: { fontSize: 16, color: '#666' },
});