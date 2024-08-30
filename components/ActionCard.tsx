import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style ={ styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
        source = {{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoX8C_RhTSq7G7AR2fGBXa9G2HKTAvKSRlwg&s'
        }}
        style ={styles.cardImg}
        />
        <View style= {styles.bodyContainer}>
          <Text numberOfLines={2}>
            Just like every year, Javascript bring in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I wont be wasting much more time and directly jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://github.com/Johnsonbright')}>
            <Text style={styles.socialLinks}>Check my Github repository</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8
    
  },
  card: {
    width: 380,
    height: 360,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 15,
    marginHorizontal: 12,
  },
  elevatedCard: {
backgroundColor: '#307cff',
elevated: 3,
shadowOffset: {
  width:1,
  height: 1
},
shadowColor: '#333',
shadowOpacity: 0.4
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  cardImg: {
    height: 100,
    
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    elevation: 1,
    borderRadius:6
  }
})