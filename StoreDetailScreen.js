import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const sampleProducts = [
  { id: '101', name: 'سوار خاص', price: '20$', image: 'https://example.com/prod1.jpg' },
  { id: '102', name: 'قلادة جميلة', price: '35$', image: 'https://example.com/prod2.jpg' },
];

export default function StoreDetailScreen({ route, navigation }) {
  const { store } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.storeName}>{store.name}</Text>
      <FlatList
        data={sampleProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 15, backgroundColor:'#fff' },
  storeName: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 15, textAlign:'center' },
  productCard: { marginBottom: 15, backgroundColor:'#f9f9f9', borderRadius:8, padding:10, alignItems:'center' },
  productImage: { width: 100, height: 100, borderRadius:8, marginBottom:8 },
  productName: { fontSize: 18, fontWeight:'600', color: '#000' },
  productPrice: { fontSize: 16, color: '#555' },
});