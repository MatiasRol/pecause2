import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback } from 'react';
import { Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import CustomText from "../../components/ui/CustomText";

const Principal = () => {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('hidden');
        StatusBar.setHidden(true, 'fade');
      }
    }, [])
  );

  const canciones = [
    { id: 1, titulo: "LAS NOCHES", artista: "Junior H", imagen: require("../../assets/images/LASNOCHES.png"), esImagen: true },
    { id: 2, titulo: "Habibi", artista: "JHAYCO", imagen: require("../../assets/images/Habibi.png"), esImagen: true },
    { id: 3, titulo: "Luego", artista: "Eladio Carrion", imagen: require("../../assets/images/ArchivosEladio.png"), esImagen: true },
    { id: 4, titulo: "Conversaciones", artista: "Eladio Carrion", imagen: require("../../assets/images/ArchivosEladio.png"), esImagen: true },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/fondo1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.purpleBox}>
          <Ionicons name="musical-notes" size={32} color="#fff" />
          <CustomText variant="large" dark={true}>PBA MUSIC</CustomText>
          <CustomText variant="small" dark={true}>Tu biblioteca personal</CustomText>
        </View>

        <View style={styles.cuadro}>
          
          <View style={styles.header}>
            <CustomText variant="large" dark={true}>Bienvenido</CustomText>
            <CustomText variant="large" dark={true}>Mattox</CustomText>
            <CustomText variant="small" dark={true}>¿Qué quieres escuchar hoy? 😎</CustomText>
          </View>

          <View style={styles.section}>
            <CustomText variant="medium" dark={true}>Reproduciendo</CustomText>
            <View style={styles.recentCard}>
              <View style={styles.albumCover}>
                <Image source={require("../../assets/images/ArchivosEladio.png")} style={styles.albumImage} />
              </View>
              <View style={styles.trackInfo}>
                <CustomText variant="medium" dark={true}>Vuelve B</CustomText>
                <CustomText variant="small" dark={true}>Eladio Carrion</CustomText>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <CustomText variant="medium" dark={true}>Canciones reproducidas recientemente </CustomText>
            {canciones.map((cancion) => (
              <View key={cancion.id} style={styles.songItem}>
                <View style={styles.songIcon}>
                  {cancion.esImagen ? (
                    <Image source={cancion.imagen} style={styles.songImage} />
                  ) : (
                    <CustomText variant="medium" dark={true}>{cancion.imagen}</CustomText>
                  )}
                </View>
                <View style={styles.songInfo}>
                  <CustomText variant="medium" dark={true}>{cancion.titulo}</CustomText>
                  <CustomText variant="small" dark={true}>{cancion.artista}</CustomText>
                </View>
                <Ionicons name="play-circle" size={24} color="#9b5de5" />
              </View>
            ))}
          </View>

        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  purpleBox: {
    backgroundColor: '#9b5de5',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  cuadro: {
    backgroundColor: 'rgba(0,0,0,0.6)', 
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
  },
  header: {
    paddingBottom: 10,
  },
  section: {
    paddingTop: 10,
  },
  recentCard: {
    flexDirection: 'row',
    backgroundColor: '#9b5de5', 
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  albumCover: {
    width: 60,
    height: 60,
    backgroundColor: '#9b5de5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  albumImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  trackInfo: {
    marginLeft: 15,
    flex: 1,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  songIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#282828',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  songImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  songInfo: {
    flex: 1,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default Principal;

