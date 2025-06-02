import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const initialPosts = [
  {
    id: '1',
    user: 'أمينة',
    text: 'هذا إكسسوار جديد حبيت أشاركه معكم!',
    image: 'https://example.com/photo1.jpg',
    likes: 5,
  },
  {
    id: '2',
    user: 'مريم',
    text: 'شو رأيكم بهالتصميم؟',
    image: null,
    likes: 3,
  },
];

export default function SocialScreen() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState('');

  const addPost = () => {
    if (newPostText.trim() === '') return;
    const newPost = {
      id: (posts.length + 1).toString(),
      user: 'أنت',
      text: newPostText,
      image: null,
      likes: 0,
    };
    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="اكتب منشورك هنا..."
        value={newPostText}
        onChangeText={setNewPostText}
        style={styles.input}
      />
      <TouchableOpacity onPress={addPost} style={styles.button}>
        <Text style={styles.buttonText}>نشر</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.post}>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.text}>{item.text}</Text>
            {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
            <Text style={styles.likes}>إعجابات: {item.likes}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:10, backgroundColor:'#fff' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:10, marginBottom:10, color:'#000' },
  button: { backgroundColor:'#f4a9c5', padding:12, borderRadius:8, alignItems:'center', marginBottom:10 },
  buttonText: { color:'#000', fontWeight:'bold', fontSize:16 },
  post: { borderBottomWidth:1, borderColor:'#eee', paddingVertical:10 },
  user: { fontWeight:'bold', color:'#000', fontSize:16 },
  text: { marginVertical:5, color:'#000' },
  image: { width:'100%', height:200, borderRadius:8, marginTop:5 },
  likes: { fontSize:14, color:'#555', marginTop:5 }
});