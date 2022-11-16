import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [timesPressed, setTimesPressed] = useState('0');
  let inputValue = '';
  if (Number(timesPressed) > 0) {
    if (timesPressed[0] === '0') {
      inputValue = timesPressed.slice(1);
      setTimesPressed(timesPressed.slice(1));
    }
    inputValue = timesPressed;
  } else {
    inputValue = timesPressed;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.inputText}>{inputValue}</Text>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.inputContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.optionButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.optionButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed('0');
          }}>
          <Text style={[styles.text, styles.blackText]}>C</Text>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Text style={[styles.text, styles.blackText]}>+/-</Text>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Text style={[styles.text, styles.blackText]}>del</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.operationButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.operationButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '/');
          }}>
          <Text style={styles.text}>&divide;</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '1');
          }}>
          <Text style={styles.text}>1</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '2');
          }}>
          <Text style={styles.text}>2</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '3');
          }}>
          <Text style={styles.text}>3</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.operationButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.operationButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + 'x');
          }}>
          <Text style={styles.text}>&#215;</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '4');
          }}>
          <Text style={styles.text}>4</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '5');
          }}>
          <Text style={styles.text}>5</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '6');
          }}>
          <Text style={styles.text}>6</Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.text}>&#45;</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '7');
          }}>
          <Text style={styles.text}>7</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '8');
          }}>
          <Text style={styles.text}>8</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}
          onPress={() => {
            setTimesPressed(current => current + '9');
          }}>
          <Text style={styles.text}>9</Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.text}>&#43;</Text>
        </Pressable>
        <Pressable
          style={[styles.numberButton, styles.dobleButton]}
          onPress={() => {
            setTimesPressed(current => current + '0');
          }}>
          <Text style={styles.text}>0</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.numberButton,
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : styles.numberButton.backgroundColor,
            },
          ]}>
          <Text style={styles.text}>.</Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.text}>&#61;</Text>
        </Pressable>
      </View>
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
