import { View, StyleSheet, Image } from 'react-native';
import { router } from "expo-router";
import CustomText from "../../components/ui/CustomText";
import { Ionicons } from '@expo/vector-icons';

const NowPlaying = () => {
  return (
    <View style={styles.container}>
      <View style={styles.albumContainer}>
        <View style={styles.albumArt}>
          <Image 
            source={require("../../assets/images/ArchivosEladio.png")} 
            style={styles.albumImage}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <CustomText variant="large" dark={true}>
          Vuelve B
        </CustomText>
        <CustomText variant="medium" dark={true}>
          Eladio Carrion
        </CustomText>
        <CustomText variant="small" dark={true}>
          Álbum: Archivos Eladio
        </CustomText>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.timeContainer}>
          <CustomText variant="small" dark={true}>1:23</CustomText>
          <CustomText variant="small" dark={true}>3:45</CustomText>
        </View>
      </View>

      <View style={styles.controls}>
        <Ionicons name="play-skip-back" size={40} color="#fff" />
        <Ionicons name="pause-circle" size={70} color="#1DB954" />
        <Ionicons name="play-skip-forward" size={40} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'space-around',
  },
  albumContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  albumArt: {
    width: 250,
    height: 250,
    backgroundColor: '#1DB954',
    borderRadius: 20,
    overflow: 'hidden',
  },
  albumImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  progressContainer: {
    marginVertical: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#404040',
    borderRadius: 2,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    width: '40%',
    backgroundColor: '#1DB954',
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default NowPlaying;