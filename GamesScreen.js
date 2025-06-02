import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>صفحة الألعاب</Text>
      <Text style={styles.text}>هون ممكن تضيفي ألعاب بسيطة مرتبطة بالإكسسوارات أو مسلية للزوار.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title: { fontSize:24, fontWeight:'bold', color:'#000', marginBottom:10 },
  text: { fontSize:16, color:'#555', textAlign:'center', paddingHorizontal:20 }
});