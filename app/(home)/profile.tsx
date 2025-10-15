import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from "expo-router";
import LinkText from "../../components/ui/LinkText";
import CustomText from "../../components/ui/CustomText";
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#000" />
        </View>
        <CustomText variant="large" dark={true}>
          Usuario Demo
        </CustomText>
        <CustomText variant="small" dark={true}>
          usuario@ejemplo.com
        </CustomText>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <CustomText variant="large" dark={true}>45</CustomText>
          <CustomText variant="small" dark={true}>Playlists</CustomText>
        </View>
        <View style={styles.statBox}>
          <CustomText variant="large" dark={true}>1.2K</CustomText>
          <CustomText variant="small" dark={true}>Canciones</CustomText>
        </View>
        <View style={styles.statBox}>
          <CustomText variant="large" dark={true}>28</CustomText>
          <CustomText variant="small" dark={true}>Artistas</CustomText>
        </View>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Tus artistas favoritos
        </CustomText>
        
        <View style={styles.artistItem}>
          <View style={styles.artistIcon}>
            <Ionicons name="mic" size={24} color="#fff" />
          </View>
          <CustomText variant="medium" dark={true}>The Weeknd</CustomText>
        </View>

        <View style={styles.artistItem}>
          <View style={styles.artistIcon}>
            <Ionicons name="musical-note" size={24} color="#fff" />
          </View>
          <CustomText variant="medium" dark={true}>Ed Sheeran</CustomText>
        </View>

        <View style={styles.artistItem}>
          <View style={styles.artistIcon}>
            <Ionicons name="radio" size={24} color="#fff" />
          </View>
          <CustomText variant="medium" dark={true}>Queen</CustomText>
        </View>
      </View>

      <View style={styles.linkContainer}>
        <LinkText 
          text="Cerrar Sesión" 
          dark={true} 
          onPress={() => router.push('/')} 
        />
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#1DB954',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 25,
    backgroundColor: '#1e1e1e',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  section: {
    padding: 20,
  },
  artistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  artistIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#282828',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default Profile;