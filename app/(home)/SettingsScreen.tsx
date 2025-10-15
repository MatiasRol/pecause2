import { router } from "expo-router";
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CustomText from "../../components/ui/CustomText";
import LinkText from "../../components/ui/LinkText";

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="large" dark={true}>
          ⚙️ Configuración
        </CustomText>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Cuenta
        </CustomText>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>👤 Editar perfil</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>🔒 Cambiar contraseña</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>📧 Correo electrónico</CustomText>
        </View>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Preferencias
        </CustomText>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>🔔 Notificaciones</CustomText>
          <CustomText variant="small" dark={true}>Activadas</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>🎵 Calidad de audio</CustomText>
          <CustomText variant="small" dark={true}>Alta</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>📱 Descargas</CustomText>
          <CustomText variant="small" dark={true}>WiFi únicamente</CustomText>
        </View>

        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>🌙 Tema oscuro</CustomText>
          <CustomText variant="small" dark={true}>Activado</CustomText>
        </View>
      </View>

      <View style={styles.section}>
        <CustomText variant="medium" dark={true}>
          Acerca de
        </CustomText>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>ℹ️ Versión</CustomText>
          <CustomText variant="small" dark={true}>1.0.0</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>📄 Términos y condiciones</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={true}>🔐 Privacidad</CustomText>
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