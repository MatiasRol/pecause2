import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { router } from "expo-router";
import { useCallback } from 'react';
import { Image, Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import CustomText from "../../components/ui/CustomText";
import LinkText from "../../components/ui/LinkText";

const Profile = () => {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('hidden');
        StatusBar.setHidden(true, 'fade');
      }
    }, [])
  );

  const artistasFavoritos = [
    { id: 1, nombre: "Eladio Carrion", imagen: require("../../assets/images/eladioP.png") },
    { id: 2, nombre: "Bad Bunny", imagen: require("../../assets/images/BadBo.png") },
    { id: 3, nombre: "Alvaro Dias", imagen: require("../../assets/images/AlvaritoP.png") },
    { id: 4, nombre: "JUNIOR H", imagen: require("../../assets/images/junniorHP.png") },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        {/* Imagen de perfil en vez del icono */}
        <View style={styles.avatar}>
          <Image 
            source={require("../../assets/images/perfil.png")} 
            style={styles.avatarImage} 
          />
        </View>
        <CustomText variant="large" dark={true}>Mattox0908</CustomText>
        <CustomText variant="small" dark={true}>roldanmatias441@gmail.com</CustomText>
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
        <CustomText variant="medium" dark={true}>Tus artistas favoritos</CustomText>
        {artistasFavoritos.map((artista) => (
          <View key={artista.id} style={styles.artistItem}>
            <View style={styles.artistImageContainer}>
              <Image source={artista.imagen} style={styles.artistImage} />
            </View>
            <CustomText variant="medium" dark={true}>{artista.nombre}</CustomText>
          </View>
        ))}
      </View>

      <View style={styles.linkContainer}>
        <LinkText text="Cerrar Sesión" dark={true} onPress={() => router.push('/')} />
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212' 
  },
  profileHeader: { 
    alignItems: 'center', 
    paddingVertical: 30, 
    backgroundColor: '#9b5de5' 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    overflow: 'hidden', 
    marginBottom: 15 
  },
  avatarImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
  },
  statsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 25, 
    backgroundColor: '#1e1e1e', 
    marginVertical: 20 
  },
  statBox: { 
    alignItems: 'center' 
  },
  section: { 
    padding: 20 
  },
  artistItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#2a2a2a' 
  },
  artistImageContainer: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    marginRight: 15, 
    overflow: 'hidden', 
    backgroundColor: '#282828' 
  },
  artistImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
  },
  linkContainer: { 
    alignItems: 'center', 
    marginTop: 30, 
    paddingVertical: 20 
  },
  bottomSpacing: { 
    height: 100 
  },
});

export default Profile;
