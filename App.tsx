import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'


//Form validation
import * as Yup from 'yup'
import {Formik} from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, 'Should be min of 4 characters').max(16, 'Should be max of 16 characters').required('Length is required')
})
export default function App() {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbol, setSymbols] = useState(false)

  const generatePasswordStriing = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@£$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if(lowerCase) {
      characterList += lowerCaseChars
    }
    if(numbers) {
      characterList += digitChars
    }
    if(symbol) {
      characterList += specialChars
    }
    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for(let i = 0; i < passwordLength; i++){
    const characterIndex = Math.round(Math.random() * characters.length)
    result += characters.charAt(characterIndex)
    }
    return result
    console.log('hitech')
  }

const resetPasswordState = () => {
setPassword('')
setIsPassGenerated(false)
setLowerCase(true)
setUpperCase(false)
setNumbers(false)
setSymbols(false)
}

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
     <SafeAreaView style = {styles.appContainer}>
       <View style={styles.formContainer}>
        <Text style= {styles.title}>
          Password Generator
        </Text>
        <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        console.log(values)
        generatePasswordStriing(+values.passwordLength) //
       }}
     >
       {({
         values,
         errors,
         isValid,
         touched,
         handleChange,
         handleSubmit,
         isSubmitting,
         handleReset,
         /* and other goodies */
       }) => (
        <>
        <View style={styles.inputWrapper}>
          <View style= {styles.inputColumn}>
            <Text style= {styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
          </View>
          <TextInput
            style={styles.inputStyle}
            value = {values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder = 'Ex.8'
            keyboardType='numeric'
            />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
         useBuiltInState
         disableText
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor='#29ab87'
          />
        </View>
        <View style={styles.inputWrapper}><Text style={styles.heading}>Include Upper case letter</Text>
          <BouncyCheckbox
         useBuiltInState
          disableText
          isChecked={upperCase}
          onPress={() => setUpperCase(!upperCase)}
          fillColor='#29ab87'
          /></View>
        <View style={styles.inputWrapper}><Text style={styles.heading}>Include Numbers</Text>
          <BouncyCheckbox
         useBuiltInState={true}
         disableText
          isChecked={numbers}
          onPress={() => setNumbers(!numbers)}
          fillColor='#29ab87'
          /></View>
        <View style={styles.inputWrapper}><Text style={styles.heading}>Include Symbols</Text>
          <BouncyCheckbox
         useBuiltInState
         disableText
          isChecked={symbol}
          onPress={() => setSymbols(!symbol)}
          fillColor='#29ab87'
          /></View> 
          

        <View style={styles.formActions}>
          <TouchableOpacity disabled={!isValid}
          style={styles.primaryBtn}
          onPress={() => handleSubmit()}
          >
          <Text  style={styles.primaryBtnText}> Generate Password</Text>
            </TouchableOpacity>
          <TouchableOpacity  style={styles.secondaryBtn} 
          onPress={()=> {handleReset();
            resetPasswordState()
          }}
          > 
            <Text style={styles.secondaryBtnTxt}> Reset</Text>
            </TouchableOpacity>
        </View>
        </>
       )}
     </Formik>
       </View>
       {isPassGenerated ? (
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.subTitle}> Result: </Text>
          <Text style={styles.description}> Long Press to copy</Text>
          <Text style={styles.generatedPassword}> {password}</Text>
        </View>
       )

        : null }
     </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
  color: '#758283',
  marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  errorText: {

  },
  inputWrapper: {
flex: 1,
flexDirection: 'row',
justifyContent: 'space-between',

  },
  inputColumn: {
    flex: 1,
    flexDirection: 'row',
    
  },
  inputStyle: {

  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-evenly',
    
  },
  primaryBtn: {},
  primaryBtnText: {},
  secondaryBtn: {},
  secondaryBtnTxt: {},
  card: {},
  cardElevated: {},
 generatedPassword: {}
})