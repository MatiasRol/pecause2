import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Audio } from 'expo-av';
import * as NavigationBar from 'expo-navigation-bar';
import { useCallback, useEffect, useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import CustomText from "../../components/ui/CustomText";

const NowPlaying = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // porcentaje de reproducción

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('hidden');
        StatusBar.setHidden(true, 'fade');
      }

      return () => {
        if (Platform.OS === 'android') {
          NavigationBar.setVisibilityAsync('visible');
          StatusBar.setHidden(false, 'fade');
        }
      };
    }, [])
  );

  async function playSound() {
    if (!sound) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require("../../assets/images/Vuelve Candy B.mp3") 
      );
      setSound(newSound);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.durationMillis) {
          setProgress(status.positionMillis / status.durationMillis);
          if (status.didJustFinish) setIsPlaying(false);
        }
      });

      await newSound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync(); // liberar memoria
      }
    };
  }, [sound]);

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
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
        <View style={styles.timeContainer}>
          <CustomText variant="small" dark={true}>
            {sound && isPlaying ? Math.floor(progress * 3) + ":23" : "0:00"}
          </CustomText>
          <CustomText variant="small" dark={true}>3:45</CustomText>
        </View>
      </View>

      <View style={styles.controls}>
        <Ionicons name="play-skip-back" size={40} color="#fff" onPress={() => console.log("Anterior")} />
        
        {isPlaying ? (
          <Ionicons name="pause-circle" size={70} color="#9b5de5" onPress={pauseSound} />
        ) : (
          <Ionicons name="play-circle" size={70} color="#9b5de5" onPress={playSound} />
        )}
        
        <Ionicons name="play-skip-forward" size={40} color="#fff" onPress={() => console.log("Siguiente")} />
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
    backgroundColor: '#9b5de5',
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
    backgroundColor: '#9b5de5',
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
