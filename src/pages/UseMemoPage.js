import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import React, {useMemo, useState} from 'react';

const initialValues = {
  name: '',
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 20,
  },
  container: {
    margin: 12,
    flex: 1,
  },
  themeStyles: dark => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
      marginTop: 20,
      padding: 10,
    };
  },
});

// fungsi slowedFunction dibungkus useMemo agar ketika pagenya rebuild maka fungsi tersebut tidak dijalankan.
// fungsi tersebut dijalankan jika variable values.name berubah.
const UseMemoPage = ({navigation}) => {
  const [values, setValues] = useState(initialValues);
  const [dark, setDark] = useState(false);
  // without implement useMemo
  // const slowedName = slowFunction(values.name);

  // implement useMemo, kalo ngga implement ini ketika tombol change theme diklik maka
  // akan ikut slow ganti warnanya walaupun si tombol change theme ini tidak memanggil values.name sama sekali
  const slowedName = useMemo(() => {
    return slowFunction(values.name);
  }, [values.name]);

  const onInputChange = (inputType, inputValue) => {
    setValues({
      ...values,
      [inputType]: inputValue,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          keyboardType="numeric"
          inputType=""
          value={values.name}
          onChangeText={value => onInputChange('name', value)}
          placeholder="Type a name here"
          style={styles.input}
        />
        <Button
          title="Change Theme"
          onPress={() => setDark(prevDark => !prevDark)}
        />
        <Text style={styles.themeStyles(dark)}>{slowedName}</Text>
      </View>
    </>
  );
};

function slowFunction(value) {
  console.log('Calling Slow Function');
  for (let i = 0; i < 100000000; i++) {}
  return 'Slowed Text: ' + value;
}

export default UseMemoPage;
