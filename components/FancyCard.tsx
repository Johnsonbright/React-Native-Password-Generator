import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Places</Text>
      <View style= {[styles.card, styles.cardElevated]}>
      <Image
      source={{
        uri: 'https://wallpapers.com/images/high/tropical-beach-vacation-scene-5xjfbam01a3pxwyb.png'
      }}
      style={styles.cardImg}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahel</Text>
        <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
        <Text style={styles.cardDescription}>The Hawa Mahal is a place in the city of jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace</Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
fontSize: 24,
fontWeight: 'bold',
paddingHorizontal: 8
  },
  card:{
    width: 350,
    height: 350,
    borderRadius:6,
    marginVertical: 12,
    marginHorizontal:16,

  },
  cardElevated:{
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  cardImg:{
    height: 180,
    width: 180,
    marginBottom:8
  },
  cardBody:{
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardLabel:{
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription:{
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1
  }
  ,
  cardFooter:{
    color: '#000000'
  }
})