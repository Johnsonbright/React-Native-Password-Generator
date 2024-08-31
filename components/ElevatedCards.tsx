import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style= {styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal={true}  scrollEnabled={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text> Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text> Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text> To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text> Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text> More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text> 😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container: {
    padding: 8,
    
    
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100, 
    borderRadius:4,
    margin: 8,
    color: '#00000'
  },
  cardElevated: {
backgroundColor: '#CAD5E2',
elevation: 4,
shadowOffset: {
  width: 1,
  height: 1,
},
shadowColor: '#50DBB4',
shadowOpacity: 0.4,
shadpwRadius: 2
  }
})