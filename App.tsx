import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'


//Form validation
import * as Yup from 'yup'
import {Formik} from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, 'Should be min of 4 characters').max(16, 'Should be max of 16 characters').required('Length is required')
})
export default function App(): React.JSX.Element {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(false)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbol, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@£$%^&*()_+';

    if (upperCase) {
      characterList = characterList + upperCaseChars
    }
    if(lowerCase) {
      characterList = characterList + lowerCaseChars
    }
    if(numbers) {
      characterList = characterList + digitChars
    }
    if(symbol) {
      characterList = characterList + specialChars
    }
    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    console.log('Character:', characters)

    let result = ''
    for(let i = 0; i < passwordLength; i++){
    const characterIndex = Math.round(Math.random() * characters.length)
    console.log('CharacterIndex,', characterIndex)
    result += characters.charAt(characterIndex)
    }
    return result
    
  }

const resetPasswordState = () => {
setPassword('')
setIsPassGenerated(false)
setLowerCase(false)
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
       initialValues={{ passwordLength: ' ' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        console.log(values)
        generatePasswordString(+values.passwordLength) //
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
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor='#29ab87'
          />
        </View>
        <View style={styles.inputWrapper}><Text style={styles.heading}>Include Upper case letter</Text>
          <BouncyCheckbox
          isChecked={upperCase}
          onPress={() => setUpperCase(!upperCase)}
          fillColor='#29ab87'
          /></View>
        <View style={styles.inputWrapper}><Text style={styles.heading}>Include Numbers</Text>
          <BouncyCheckbox
          isChecked={numbers}
          onPress={() => setNumbers(!numbers)}
          fillColor='#29ab87'
          /></View>
        <View style={styles.inputWrapper}><Text style={styles.heading}>Include Symbols</Text>
          <BouncyCheckbox
          isChecked={symbol}
          onPress={() => setSymbols(!symbol)}
          fillColor='#29ab87'
          /></View> 
          

        <View style={styles.formActions}>
          <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() =>handleSubmit()}>
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
    marginBottom: 15,
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
      fontSize: 12,
      color: '#ff0d10',
  },
  inputWrapper: {
flex: 1,
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 15,

  },   
  inputColumn: {
    flexDirection: 'column',
    
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  formActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
 generatedPassword: {
  fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
 }
})