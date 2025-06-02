import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.5138,
          longitude: 36.2765,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: 33.5138, longitude: 36.2765 }}
          title="Blossom Store"
          description="محلكم المفضل"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1 },
  map: { flex:1 }
});