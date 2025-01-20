import { Formik } from 'formik';
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BouncyCheckBox from "react-native-bouncy-checkbox";

// Form Validation
import * as Yup from "yup"

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, "Should be minimum of 4 characters").max(16, "Should be maximum of 16 characters").required("Length is required")
});

function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcedfghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }

    if (lowerCase) {
      characterList += lowerCaseChars;
    }

    if (numbers) {
      characterList += digitChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={value => {
              // console.log(value);
              generatePasswordString(+value.passwordLength) // (number(value.passwordLength))
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle} value={values.passwordLength} onChangeText={handleChange('passwordLength')} placeholder='Ex. 8' keyboardType='numeric' />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckBox disableText isChecked={lowerCase} onPress={() => setLowerCase(!lowerCase)} fillColor='#29AB87' />
                </View>

                <View style={styles.inputWrapper}><Text style={styles.heading}>Include uppercase</Text>
                  <BouncyCheckBox disableText isChecked={upperCase} onPress={() => setUpperCase(!upperCase)} fillColor='#29AB87' /></View>

                <View style={styles.inputWrapper}><Text style={styles.heading}>Include numbers</Text>
                  <BouncyCheckBox disableText isChecked={numbers} onPress={() => setNumbers(!numbers)} fillColor='#29AB87' /></View>

                <View style={styles.inputWrapper}><Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckBox disableText isChecked={symbols} onPress={() => setSymbols(!symbols)} fillColor='#29AB87' /></View>

                <View style={styles.formAction}>
                  <TouchableOpacity disabled={!isValid} style={styles.primaryBtn} onPress={() => handleSubmit()}>
                    <Text style={styles.primaryBtnText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.secondaryBtn} onPress={() => {
                    handleReset();
                    resetPasswordState();
                  }} >
                    <Text style={styles.secondaryBtnText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {
          isPassGenerated ? (
            <View style={[styles.card, styles.elevatedCard]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long press to copy</Text>
              <View>
                <Text selectable={true} style={styles.generatedPassword}>{password}</Text></View>
            </View>
          ) : null
        }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40,
  },
  formContainer: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  formAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  inputColumn: {
    flexDirection: 'column',
  },
  heading: {
    fontSize: 16
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  primaryBtn: {
    backgroundColor: 'rgb(91, 124, 255)',
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  primaryBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  secondaryBtn: {
    backgroundColor: 'rgb(141, 147, 173)',
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  secondaryBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,

  },
  elevatedCard: {
    backgroundColor: '#ddd',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4
  },
  description: {},
  generatedPassword: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10
  },
})

export default App