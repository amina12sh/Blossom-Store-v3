// src/screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params || {
    product: {
      name: 'عقد لؤلؤ يدوي',
      description: 'عقد مصنوع يدويًا من الخرز واللؤلؤ الطبيعي.',
      price: '15,000 ل.س',
      tools: ['خيط نايلون', 'إبرة', 'خرز لؤلؤي'],
      image: 'https://via.placeholder.com/250',
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.label}>الوصف:</Text>
      <Text style={styles.text}>{product.description}</Text>
      <Text style={styles.label}>السعر:</Text>
      <Text style={styles.text}>{product.price}</Text>
      <Text style={styles.label}>الأدوات المستخدمة:</Text>
      {product.tools.map((tool, index) => (
        <Text key={index} style={styles.tool}>• {tool}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#000',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    alignSelf: 'flex-start',
  },
  tool: {
    fontSize: 15,
    color: '#444',
    alignSelf: 'flex-start',
  },
});