import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  inputMathOptions: {
    // width: 90,
    padding: 5,
    backgroundColor: 'blue',
    flex: 1,
  },
  inputOptions: {
    backgroundColor: 'red',
    alignSelf: 'auto',
    position: 'relative',
  },
  inputText: {
    top: 30,
    right: 10,
    fontSize: 70,
    position: 'absolute',
    color: 'white',
  },
  resultText: {
    top: 120,
    right: 10,
    fontSize: 50,
    position: 'absolute',
    color: '#7c7c7c',
  },
  operationButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#ff9527',
    alignItems: 'center',
    margin: 3,
  },
  optionButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#9b9b9b',
    alignItems: 'center',
    margin: 3,
  },
  numberButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    margin: 3,
  },
  dobleButton: { width: 181 },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
  },
  blackText: {
    color: 'black',
  },
});

export default App;
