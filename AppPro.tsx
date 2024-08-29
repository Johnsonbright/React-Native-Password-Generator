import React from "react";
import { 
  Text,
  View,
  StyleSheet,
  useColorScheme,
  } from 'react-native';

function AppPro(): JSX.Element {
  const isDarkmode = useColorScheme() === 'dark'
console.log(isDarkmode)
return (
  <View style= {styles.container} >
    <Text style = {isDarkmode ?styles.whiteText : styles.darkText} >  
      Hello Ifechukwu
      </Text>
  </View>
)
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  whiteText: {
    color: '#FFFFFF'
  },
  
  darkText: {
    color: '#000000'
  }
})
export default AppPro