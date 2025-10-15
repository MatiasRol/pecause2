import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { router } from "expo-router";
import React, { useCallback } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import CustomText from "../../components/ui/CustomText";
import LinkText from "../../components/ui/LinkText";

const SettingsScreen = () => {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('hidden');
        StatusBar.setHidden(true, 'fade');
      }
    }, [])
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="settings" size={32} color="#fff" />
        <CustomText variant="large" dark={true}>
          Configuración
        </CustomText>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Cuenta
        </CustomText>
        
        <View style={styles.settingItem}>
          <Ionicons name="person-circle-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Editar perfil</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Cambiar contraseña</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <Ionicons name="mail-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Correo electrónico</CustomText>
        </View>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Preferencias
        </CustomText>
        
        <View style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Notificaciones</CustomText>
          <CustomText variant="small" dark={true}>Activadas</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <Ionicons name="musical-notes-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Calidad de audio</CustomText>
          <CustomText variant="small" dark={true}>Alta</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <Ionicons name="download-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Descargas</CustomText>
          <CustomText variant="small" dark={true}>WiFi únicamente</CustomText>
        </View>

        <View style={styles.settingItem}>
          <Ionicons name="moon-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Tema oscuro</CustomText>
          <CustomText variant="small" dark={true}>Activado</CustomText>
        </View>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Acerca de
        </CustomText>
        
        <View style={styles.settingItem}>
          <Ionicons name="information-circle-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Versión</CustomText>
          <CustomText variant="small" dark={true}>1.0.0</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <Ionicons name="document-text-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Términos y condiciones</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <Ionicons name="shield-checkmark-outline" size={24} color="#fff" style={styles.itemIcon} />
          <CustomText variant="medium" dark={true}>Privacidad</CustomText>
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
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  section: {
    padding: 20,
    marginTop: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginTop: 10,
  },
  itemIcon: {
    marginRight: 10,
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

export default SettingsScreen;