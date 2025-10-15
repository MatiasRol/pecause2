import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { Platform, StatusBar } from 'react-native';

export default function HomeLayout() {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('hidden');
        NavigationBar.setBehaviorAsync('overlay-swipe');
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

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#1DB954',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: '#b3b3b3',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen 
        name="principal" 
        options={{ 
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="nowplaying" 
        options={{ 
          title: "Now Playing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}