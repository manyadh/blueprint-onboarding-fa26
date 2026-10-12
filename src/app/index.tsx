import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  getAllPosts,
  Post as PostType,
} from '../../api/supabase/queries/query';
import Post from '../components/Post';

export default function App() {
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .catch(err => console.log('ERROR:', err.message));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {posts === null ? (
            <Text>Loading...</Text>
          ) : (
            posts.map(post => (
              <Post
                key={post.id}
                username={post.user_name}
                npo={post.npo_name}
                city={post.Locations.city_name}
                state={post.Locations.state_abbr}
                text={post.post_text}
                image={post.image_link}
                likeCount={post.num_likes}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
  },
  scrollContent: {
    padding: 16,
  },
});
