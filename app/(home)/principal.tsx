import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { router } from "expo-router";
import CustomText from "../../components/ui/CustomText";

const Principal = () => {
  // Datos de ejemplo para canciones populares
  const canciones = [
    { id: 1, titulo: "Blinding Lights", artista: "The Weeknd", imagen: "🎵" },
    { id: 2, titulo: "Shape of You", artista: "Ed Sheeran", imagen: "🎵" },
    { id: 3, titulo: "Bohemian Rhapsody", artista: "Queen", imagen: "🎵" },
    { id: 4, titulo: "Dance Monkey", artista: "Tones and I", imagen: "🎵" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header con saludo */}
      <View style={styles.header}>
        <CustomText variant="large" dark={false}>
          ¡Hola! 👋
        </CustomText>
        <CustomText variant="small" dark={false}>
          ¿Qué quieres escuchar hoy?
        </CustomText>
      </View>

      {/* Sección de reproducción reciente */}
      <View style={styles.section}>
        <CustomText variant="medium" dark={false}>
          Reproducido recientemente
        </CustomText>
        
        <View style={styles.recentCard}>
          <View style={styles.albumCover}>
            <CustomText variant="large" dark={true}>🎧</CustomText>
          </View>
          <View style={styles.trackInfo}>
            <CustomText variant="medium" dark={false}>
              Starboy
            </CustomText>
            <CustomText variant="small" dark={false}>
              The Weeknd
            </CustomText>
          </View>
        </View>
      </View>

      {/* Lista de canciones populares */}
      <View style={styles.section}>
        <CustomText variant="medium" dark={false}>
          Canciones populares
        </CustomText>
        
        {canciones.map((cancion) => (
          <View key={cancion.id} style={styles.songItem}>
            <View style={styles.songIcon}>
              <CustomText variant="medium" dark={true}>
                {cancion.imagen}
              </CustomText>
            </View>
            <View style={styles.songInfo}>
              <CustomText variant="medium" dark={false}>
                {cancion.titulo}
              </CustomText>
              <CustomText variant="small" dark={false}>
                {cancion.artista}
              </CustomText>
            </View>
            <CustomText variant="medium" dark={false}>▶️</CustomText>
          </View>
        ))}
      </View>

      {/* Espaciado inferior */}
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
  },
  songInfo: {
    flex: 1,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default Principal;