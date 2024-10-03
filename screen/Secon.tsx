import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, Image } from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../navigation/Navigation"
import Lg from '../components/Lg';

type SecondProps = NativeStackScreenProps<RootStackParamList, 'Second'>

const Second = ({navigation}:SecondProps) => {
  const logos = [
    require('../assets/Icons/Dribbble.png'), 
    require('../assets/Icons/Meta.png'), 
    require('../assets/Icons/Google.png'), 
    require('../assets/Icons/Oracle.png'), 
    require('../assets/Icons/FedEx.png'), 
    require('../assets/Icons/Lego.png'), 
  ];

  return (
    <Lg style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#333' />
      {Platform.OS==='web' && 
          <View style={styles.webHeader}>
              <View style={styles.left}>
                  <Image source={require('../assets/another/NewLogo.png')} style={styles.logo}/>
                  <Text style={styles.buttonText}>metafied</Text>
              </View>
              <View style={styles.right}>
                  <TouchableOpacity style={styles.SignUpButton}>
                      <Text style={styles.whiteText}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </View>
      }
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Streamline Your Project Management Effortlessly
        </Text>
        <Text style={styles.subtitle}>
          Manage Tasks, Collaborate With <Text style={styles.highlight}>Ease</Text>, And Boost{' '}
          <Text style={styles.highlight}>Productivity</Text> With Our Intuitive Project
          Management Software.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.buttonText}>Try It Yourself</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.demoButton]}>
            <Text style={[styles.buttonText, styles.demoButtonText]}>Book a demo</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Platform.OS==='web' && 
          <View style={styles.bottomContainer}>
            <Text style={styles.BottomText}>
              Join More Than 1000+ Leading Companies Who Trust Metafied
            </Text>
            <View style={styles.logosContainer}>
              {logos.map((logo, index) => (
                <Image key={index} source={logo} style={styles.Bottomlogo} />
              ))}
            </View>
          </View>
      }
    </Lg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      ios:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      web:{
        padding:0,
        margin:0,
      }
    }),
  },
  webHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:100,
    marginTop:20,
    marginHorizontal:30,
  },
  logo:{
    width:25,
    height:25,
  },
  left:{
    flexDirection:"row",
    gap:5,
  },
  right:{

  },
  SignUpButton:{
    backgroundColor:"#B8BAC24D",
    borderRadius:30,
    padding:10,
    width:100,
    justifyContent:"center",
    alignItems:"center",
  },
  whiteText:{
    color:"#fff",
  },
  contentContainer: {
    alignItems: 'center',
    ...Platform.select({
      web:{
        alignItems:"flex-start",
        marginLeft:150,
      }
    }),
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    ...Platform.select({
      web:{
        fontSize:50,
        width:600,
        textAlign:"left",
      }
    })
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    ...Platform.select({
      web:{
        textAlign:"left",
        color:"#A4A5AA",
        width:600,
        size:22,
      }
    })
  },
  highlight: {
    color: '#EA00FF',
  },
  buttonContainer:{
    ...Platform.select({
      web:{
        flexDirection:"row",
        gap:20,
      }
    }),
  },
  button: {
    backgroundColor: '#006973',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
    ...Platform.select({
      web:{
        borderRadius: 40,
        paddingVertical:10,
      }
    }),
  },
  demoButton: {
    backgroundColor: '#B8BAC2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoButtonText: {
    color: '#000',
  },
  bottomContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:140,
    borderTopWidth:1,
    borderTopColor:"#fff",
    marginHorizontal:50,
  },
  BottomText: {
    marginBottom: 20,
    fontSize: 16,
    color:"#fff",
    textAlign: 'center',
  },
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  Bottomlogo: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Second;
