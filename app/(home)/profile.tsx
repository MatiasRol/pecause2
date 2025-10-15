import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import LinkText from "../../components/ui/LinkText";
import CustomText from "../../components/ui/CustomText";
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const artistasFavoritos = [
    {
      id: 1,
      nombre: "Eladio Carrion",
      imagen: require("../../assets/images/eladioP.png")
    },
    {
      id: 2,
      nombre: "Bad Bunny",
      imagen: require("../../assets/images/BadBo.png")
    },
    {
      id: 3,
      nombre: "Alvaro Dias",
      imagen: require("../../assets/images/AlvaritoP.png")
    },
    {
      id: 2,
      nombre: "JUNIOR H",
      imagen: require("../../assets/images/junniorHP.png")
    },
  ];

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
        
        {artistasFavoritos.map((artista) => (
          <View key={artista.id} style={styles.artistItem}>
            <View style={styles.artistImageContainer}>
              <Image 
                source={artista.imagen} 
                style={styles.artistImage}
              />
            </View>
            <CustomText variant="medium" dark={true}>{artista.nombre}</CustomText>
          </View>
        ))}
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
  artistImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    overflow: 'hidden',
    backgroundColor: '#282828',
  },
  artistImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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