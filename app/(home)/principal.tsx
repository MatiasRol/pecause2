import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { router } from "expo-router";
import CustomText from "../../components/ui/CustomText";
import LinkText from "../../components/ui/LinkText";

const Principal = () => {
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
      esImagen: true  // CAMBIADO: debe ser true porque es una imagen
    },
    { 
      id: 4, 
      titulo: "Conversaciones",
      artista: "Eladio Carrion",
      imagen: require("../../assets/images/ArchivosEladio.png"),
      esImagen: true  // CAMBIADO: debe ser true porque es una imagen
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="large" dark={true}>
          ¡Hola! 👋
        </CustomText>
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
            <CustomText variant="large" dark={true}>🎧</CustomText>
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
          Canciones escuchadas recientemente
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
            <CustomText variant="medium" dark={true}>▶️</CustomText>
          </View>
        ))}
      </View>

      {/* Link para cerrar sesión */}
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
  header: {
    padding: 20,
    paddingTop: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
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
  linkContainer: {
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default Principal;