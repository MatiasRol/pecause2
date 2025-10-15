import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback } from 'react';
import { Image, Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
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
    { 
      id: 1, 
      titulo: "LAS NOCHES", 
      artista: "Junior H", 
      imagen: require("../../assets/images/LASNOCHES.png"),
      esImagen: true
    },
    { 
      id: 2, 
      titulo: "Habibi", 
      artista: "JHAYCO", 
      imagen: require("../../assets/images/Habibi.png"),
      esImagen: true
    },
    { 
      id: 3, 
      titulo: "Luego",
      artista: "Eladio Carrion",
      imagen: require("../../assets/images/ArchivosEladio.png"),
      esImagen: true
    },
    { 
      id: 4, 
      titulo: "Conversaciones",
      artista: "Eladio Carrion",
      imagen: require("../../assets/images/ArchivosEladio.png"),
      esImagen: true
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Sección Info */}
      <View style={styles.infoSection}>
        <Ionicons name="musical-notes" size={32} color="#fff" />
        <CustomText variant="large" dark={true}>
          Dashboard Musical
        </CustomText>
        <CustomText variant="small" dark={true}>
          Tu biblioteca personal
        </CustomText>
      </View>

      <View style={styles.header}>
        <CustomText variant="large" dark={true}>
          ¡Hola!
        </CustomText>
        <Ionicons name="hand-right" size={24} color="#fff" style={styles.icon} />
        <CustomText variant="small" dark={true}>
          ¿Qué quieres escuchar hoy?
        </CustomText>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Reproduciendo 
        </CustomText>
        
        <View style={styles.recentCard}>
          <View style={styles.albumCover}>
            <Image 
              source={require("../../assets/images/ArchivosEladio.png")} 
              style={styles.albumImage}
            />
          </View>
          <View style={styles.trackInfo}>
            <CustomText variant="medium" dark={true}>
              Vuelve B
            </CustomText>
            <CustomText variant="small" dark={true}>
              Eladio Carrion
            </CustomText>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Canciones por tipo de música
        </CustomText>
        
        {canciones.map((cancion) => (
          <View key={cancion.id} style={styles.songItem}>
            <View style={styles.songIcon}>
              {cancion.esImagen ? (
                <Image 
                  source={cancion.imagen} 
                  style={styles.songImage}
                />
              ) : (
                <CustomText variant="medium" dark={true}>
                  {cancion.imagen}
                </CustomText>
              )}
            </View>
            <View style={styles.songInfo}>
              <CustomText variant="medium" dark={true}>
                {cancion.titulo}
              </CustomText>
              <CustomText variant="small" dark={true}>
                {cancion.artista}
              </CustomText>
            </View>
            <Ionicons name="play-circle" size={24} color="#1DB954" />
          </View>
        ))}
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
  infoSection: {
    backgroundColor: '#1DB954',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  icon: {
    marginVertical: 5,
  },
  section: {
    padding: 20,
    paddingTop: 10,
  },
  recentCard: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  albumCover: {
    width: 60,
    height: 60,
    backgroundColor: '#1DB954',
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