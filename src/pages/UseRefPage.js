import {View, TextInput, StyleSheet, Button} from 'react-native';
import React, {useRef, useState} from 'react';

const initialValues = {
  name: '',
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 20,
  },
  container: {
    margin: 12,
    flex: 1,
  },
  bottomButton: {
    marginBottom: 12,
  },
});

// ketika tombol focus di klik, maka kolom text input akan menjadi fokus,
// karena di kolom text input memanggil variabel useRef di properti ref yang ditrigger melalui tombol fokus
const UseRefPage = ({navigation}) => {
  const [values, setValues] = useState(initialValues);
  const inputRef = useRef();

  const onInputChange = (inputType, inputValue) => {
    setValues({
      ...values,
      [inputType]: inputValue,
    });
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Focus" onPress={() => focus()} />
        <TextInput
          ref={inputRef}
          value={values.name}
          onChangeText={value => onInputChange('name', value)}
          placeholder="Type your name here"
          style={styles.input}
        />
      </View>
      <View styles={styles.bottomButton}>
        <Button
          title="Go to useMemo Page"
          onPress={() => navigation.navigate('UseMemoPage')}
        />
      </View>
    </>
  );
};

export default UseRefPage;
