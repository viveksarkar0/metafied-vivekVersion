import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/Navigation";
import Lg from '../components/Lg';

type FirstProps = NativeStackScreenProps<RootStackParamList, 'First'>;

const First = ({ navigation }: FirstProps) => {
  return (
    <Lg style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/another/NewLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>metafied</Text>
      </View>
      
      {/* Arrow Button */}
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.navigate('Second')}>
        <Image
          source={require('../assets/another/right-arrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </Lg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'web' ? '10%' : '75%',
  },
  logo: {
    width: Platform.OS === 'web' ? 80 : 70,
    height: Platform.OS === 'web' ? 80 : 70,
    marginRight: 10,
  },
  title: {
    fontSize: Platform.OS === 'web' ? 70 : 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  arrowContainer: {
    marginBottom: Platform.OS === 'web' ? 80 : 50,
  },
  arrow: {
    width: 50,
    height: 50,
  },
});

export default First;
