import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const stores = [
  { id: '1', name: 'متجر أمينة', image: 'https://example.com/store1.jpg' },
  { id: '2', name: 'متجر مريم', image: 'https://example.com/store2.jpg' },
  // أضيفي متاجر حسب الحاجة
];

export default function StoresScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('StoreDetail', { store: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  card: { marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 8, padding: 10, alignItems: 'center' },
  image: { width: 120, height: 120, borderRadius: 8, marginBottom: 8 },
  name: { fontSize: 18, color: '#000', fontWeight: '600' },
});