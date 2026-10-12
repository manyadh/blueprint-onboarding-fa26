import { Image, StyleSheet, Text, View } from 'react-native';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';

type PostProps = {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
};

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
}: PostProps) {
  return (
    <View style={styles.post}>
      <View style={styles.row}>
        <ProfilePlaceholder width={48} height={48} />
        <View style={styles.headerText}>
          <Text style={styles.regular}>
            <Text style={styles.bold}>{username}</Text> at{' '}
            <Text style={styles.bold}>{npo}</Text>
          </Text>
          <Text style={styles.location}>
            {city}, {state}
          </Text>
        </View>
      </View>

      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.body}>{text}</Text>

      <Text style={styles.small}>{likeCount} likes</Text>

      <View style={styles.actions}>
        <View style={styles.row}>
          <HeartIcon width={24} height={24} />
          <CommentsIcon width={24} height={24} style={styles.commentsIcon} />
        </View>
        <ShareIcon width={24} height={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 12,
  },
  regular: {
    fontFamily: 'Poppins_400Regular',
  },
  bold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  location: {
    color: '#999999',
    fontFamily: 'Poppins_400Regular',
    marginTop: 4,
  },
  image: {
    width: '100%',
    aspectRatio: 1.5,
    borderRadius: 16,
    marginVertical: 12,
  },
  body: {
    marginTop: 4,
    marginBottom: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
  },
  small: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  commentsIcon: {
    marginLeft: 16,
  },
});
