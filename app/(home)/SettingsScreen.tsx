import { router } from "expo-router";
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CustomText from "../../components/ui/CustomText";
import LinkText from "../../components/ui/LinkText";

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <CustomText variant="large" dark={true}>
          ⚙️ Configuración
        </CustomText>
      </View>

      {/* Sección Cuenta */}
      <View style={styles.section}>
        <CustomText variant="medium" dark={false}>
          Cuenta
        </CustomText>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>👤 Editar perfil</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>🔒 Cambiar contraseña</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>📧 Correo electrónico</CustomText>
        </View>
      </View>

      {/* Sección Preferencias */}
      <View style={styles.section}>
        <CustomText variant="medium" dark={false}>
          Preferencias
        </CustomText>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>🔔 Notificaciones</CustomText>
          <CustomText variant="small" dark={false}>Activadas</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>🎵 Calidad de audio</CustomText>
          <CustomText variant="small" dark={false}>Alta</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>📱 Descargas</CustomText>
          <CustomText variant="small" dark={false}>WiFi únicamente</CustomText>
        </View>

        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>🌙 Tema oscuro</CustomText>
          <CustomText variant="small" dark={false}>Activado</CustomText>
        </View>
      </View>

      {/* Sección Acerca de */}
      <View style={styles.section}>
        <CustomText variant="medium" dark={false}>
          Acerca de
        </CustomText>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>ℹ️ Versión</CustomText>
          <CustomText variant="small" dark={false}>1.0.0</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>📄 Términos y condiciones</CustomText>
        </View>
        
        <View style={styles.settingItem}>
          <CustomText variant="medium" dark={false}>🔐 Privacidad</CustomText>
        </View>
      </View>

      {/* Links de navegación */}
      <View style={styles.linkContainer}>
        <LinkText 
          text="← Volver a Principal" 
          dark={true} 
          onPress={() => router.push('/(home)/principal')} 
        />
      </View>

      <View style={styles.linkSpacing}>
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
  },
  linkSpacing: {
    alignItems: 'center',
    marginTop: 15,
  },
  bottomSpacing: {
    height: 50,
  },
});

export default SettingsScreen;