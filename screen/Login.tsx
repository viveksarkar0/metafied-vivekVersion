import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/Navigation";
import Lg from '../components/Lg';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  return (
    <Lg style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <View style={styles.innerContainer}>
        {/* Logo */}
        <Image source={require('../assets/another/NewLogo.png')} style={styles.logo} />

        {/* Title and Subtitle */}
        <Text style={styles.title}>Welcome to Metafied</Text>
        <Text style={styles.subtitle}>Log in or Register your email.</Text>

        {/* Google Login Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Separator Line */}
        <View style={styles.line} />

        {/* Email Input */}
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#fff" 
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    </Lg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',  // Setting a global background
  },
  innerContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#B7B7B7',
    marginBottom: 20,
  },
  googleButton: {
    width: 300,
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  line: {
    width: 250,
    borderColor: '#D9D9D966',
    borderWidth: 1,
    marginBottom: 20,
  },
  input: {
    width: 300,
    backgroundColor: '#444',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: '#D9D9D9',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Login;
