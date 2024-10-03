import { Platform, ViewStyle } from 'react-native'
import React, {ReactNode} from 'react'

var LinearGradient: any;

interface LgProps {
  children: ReactNode
  style?: ViewStyle
}

if (Platform.OS === 'web') {
  LinearGradient = require('react-native-web-linear-gradient').default;
} else {
  LinearGradient = require('react-native-linear-gradient').default;
}

const Lg= ({ children, style }: LgProps) => {
  let arr1=['#420f2b', '#0f0f42', '#0f0f42', '#420f2b']
  let arr2=['#420f2b', '#0f0f42', '#050811', '#050811', '#050811', '#050811', '#0f0f42', '#420f2b']
  return (
    <LinearGradient
        colors={Platform.OS==='web' ? arr2: arr1}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={style}>
           {children} 
    </LinearGradient>
  )
}

export default Lg
