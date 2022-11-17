import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../themes/CalculatorTheme';
import { Button } from '../components/Button';

const CalculatorScreen = () => {
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
        <Text
          style={styles.inputText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {inputValue}
        </Text>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.inputContainer}>
        <Button
          text="C"
          color="#9b9b9b"
          textColor="black"
          action={() => {
            setTimesPressed('0');
          }}
        />
        <Button
          text="+/-"
          color="#9b9b9b"
          textColor="black"
          action={() => {
            setTimesPressed('0');
          }}
        />
        <Button
          text="del"
          color="#9b9b9b"
          textColor="black"
          action={() => {
            setTimesPressed('0');
          }}
        />
        <Button
          text="&divide;"
          color="#ff9527"
          action={() => {
            setTimesPressed(current => current + '÷');
          }}
        />
        <Button
          text="1"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '1');
          }}
        />
        <Button
          text="2"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '2');
          }}
        />
        <Button
          text="3"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '3');
          }}
        />
        <Button
          text="&#215;"
          color="#ff9527"
          action={() => {
            setTimesPressed(current => current + '×');
          }}
        />
        <Button
          text="4"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '4');
          }}
        />
        <Button
          text="5"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '5');
          }}
        />
        <Button
          text="6"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '6');
          }}
        />
        <Button
          text="&#45;"
          color="#ff9527"
          action={() => {
            setTimesPressed(current => current + '-');
          }}
        />
        <Button
          text="7"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '7');
          }}
        />
        <Button
          text="8"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '8');
          }}
        />
        <Button
          text="9"
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '9');
          }}
        />
        <Button
          text="&#43;"
          color="#ff9527"
          action={() => {
            setTimesPressed(current => current + '+');
          }}
        />
        <Button
          text="0"
          color="#2d2d2d"
          customWidth="181"
          action={() => {
            setTimesPressed(current => current + '0');
          }}
        />
        <Button
          text="."
          color="#2d2d2d"
          action={() => {
            setTimesPressed(current => current + '.');
          }}
        />
        <Button
          text="&#61;"
          color="#ff9527"
          action={() => {
            setTimesPressed(current => current + '=');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
