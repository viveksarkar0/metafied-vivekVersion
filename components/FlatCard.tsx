import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCard</Text>
      <View style={styles.contaniner}>
        <View style={styles.card}>
            <Text>red</Text>
        </View>
        <View style={styles.card}>
            <Text>red</Text>
        </View>
        <View style={styles.card}>
            <Text>red</Text>
        </View>
        <View style={styles.card}>
            <Text>red</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    contaniner:{
flex:1,
flexDirection:"row",
padding:3
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        backgroundColor:"#FF7F7F",
        borderRadius:4,
        margin:8
    },
    heading:{
        fontSize:32,
        fontWeight:'bold'
    }
})