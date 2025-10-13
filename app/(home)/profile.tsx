import { View, StyleSheet, ScrollView } from 'react-native';
import { router } from "expo-router";
import LinkText from "../../components/ui/LinkText";
import CustomText from "../../components/ui/CustomText";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header del perfil con avatar */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <CustomText variant="large" dark={true}>👤</CustomText>
        </View>
        <CustomText variant="large" dark={true}>
          Usuario Demo
        </CustomText>
        <CustomText variant="small" dark={true}>
          usuario@ejemplo.com
        </CustomText>
      </View>

      {/* Estadísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <CustomText variant="large" dark={false}>45</CustomText>
          <CustomText variant="small" dark={false}>Playlists</CustomText>
        </View>
        <View style={styles.statBox}>
          <CustomText variant="large" dark={false}>1.2K</CustomText>
          <CustomText variant="small" dark={false}>Canciones</CustomText>
        </View>
        <View style={styles.statBox}>
          <CustomText variant="large" dark={false}>28</CustomText>
          <CustomText variant="small" dark={false}>Artistas</CustomText>
        </View>
      </View>

      {/* Sección de preferencias */}
      <View style={styles.section}>
        <CustomText variant="medium" dark={false}>
          Tus artistas favoritos
        </CustomText>
        
        <View style={styles.artistItem}>
          <View style={styles.artistIcon}>
            <CustomText variant="medium" dark={true}>🎤</CustomText>
          </View>
          <CustomText variant="medium" dark={false}>The Weeknd</CustomText>
        </View>

        <View style={styles.artistItem}>
          <View style={styles.artistIcon}>
            <CustomText variant="medium" dark={true}>🎸</CustomText>
          </View>
          <CustomText variant="medium" dark={false}>Ed Sheeran</CustomText>
        </View>

        <View style={styles.artistItem}>
          <View style={styles.artistIcon}>
            <CustomText variant="medium" dark={true}>🎹</CustomText>
          </View>
          <CustomText variant="medium" dark={false}>Queen</CustomText>
        </View>
      </View>

      {/* Links de navegación */}
      <View style={styles.linkContainer}>
        <LinkText 
          text="← Volver a Principal" 
          dark={true} 
          onPress={() => router.push('/(home)/principal')} 
        />
      </View>

      <View style={styles.linkSpacing}>
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
    marginTop: 20,
  },
  linkSpacing: {
    alignItems: 'center',
    marginTop: 15,
  },
  bottomSpacing: {
    height: 50,
  },
});

export default Profile;