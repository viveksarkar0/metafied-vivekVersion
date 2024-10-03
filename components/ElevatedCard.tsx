import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCard</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
            <Text>one</Text>
        </View>
        <View style={styles.card}>
            <Text>one</Text>
        </View>
        <View style={styles.card}>
            <Text>one</Text>
        </View>
        <View style={styles.card}>
            <Text>one</Text>
        </View>
        <View style={styles.card}>
            <Text>one</Text>
        </View>
        <View style={styles.card}>
            <Text>one</Text>
        </View>

        
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({

    card:{
        width:100,
        height:100,
        backgroundColor:"#001B24",
        borderRadius:6,
        margin:9
    },
    heading:{
        fontSize:32,
        fontWeight:'bold'
    }
}

)