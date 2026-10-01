import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View style={styles.post}>
            <View style={styles.row}>
              <ProfilePlaceholder width={48} height={48} />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.regular}>
                  <Text style={styles.bold}>neha32</Text> at{' '}
                  <Text style={styles.bold}>Mission Bit</Text>
                </Text>
                <Text style={[styles.gray, { marginTop: 4 }]}>
                  San Francisco, CA
                </Text>
              </View>
            </View>

            <Image
              source={{
                uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
              }}
              style={styles.image}
            />

            <Text style={styles.body}>
              This past weekend, I taught at Mission Bit. I was working with a
              group of high school students who were building their first web
              pages. I really enjoyed being able to help guide 10 students on
              learning CS fundamentals through a project! They were all really
              eager to learn, and I'm glad I signed up. Highly recommend to any
              other software engineers interested in volunteering! Sign-up here:
              https://missionbit.org/get-involved/volunteer-with-us/
            </Text>

            <View style={[styles.row, { marginBottom: 8 }]}>
              <Text style={[styles.small, { marginRight: 16 }]}>3 likes</Text>
              <Text style={styles.small}>View 2 comments</Text>
            </View>

            <View
              style={[
                styles.row,
                { justifyContent: 'space-between', marginVertical: 6 },
              ]}
            >
              <View style={styles.row}>
                <HeartIcon width={24} height={24} />
                <CommentsIcon
                  width={24}
                  height={24}
                  style={{ marginLeft: 16 }}
                />
              </View>
              <ShareIcon width={24} height={24} />
            </View>

            <Text style={[styles.gray, styles.small, { marginTop: 4 }]}>
              February 1
            </Text>
          </View>

          <View style={styles.row}>
            <ProfilePlaceholder width={48} height={48} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.regular}>
                <Text style={styles.bold}>aiden_ugh</Text> at{' '}
                <Text style={styles.bold}>Boys and Girls Club</Text>
              </Text>
              <Text style={[styles.gray, { marginTop: 4 }]}>Oakland, CA</Text>
            </View>
          </View>
          <Text style={[styles.body, { marginTop: 4 }]}>
            I recently volunteered at my local Boys and Girls Club!
          </Text>
        </ScrollView>
      </View>
    </View>
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
  row: { flexDirection: 'row', alignItems: 'center' },
  image: {
    width: '100%',
    aspectRatio: 1.5,
    borderRadius: 16,
    marginVertical: 12,
  },
  gray: { color: '#999999', fontFamily: 'Poppins_400Regular' },
  body: {
    marginTop: 4,
    marginBottom: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
  },
  small: { fontSize: 12, fontFamily: 'Poppins_400Regular' },
  bold: { fontFamily: 'Poppins_600SemiBold' },
  regular: { fontFamily: 'Poppins_400Regular' },
  post: {
    paddingBottom: 18,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
});
