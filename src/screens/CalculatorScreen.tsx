import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../themes/CalculatorTheme';
import { Button } from '../components/Button';

const CalculatorScreen = () => {
  const [timesPressed, setTimesPressed] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  let inputValue = '';
  if (Number(timesPressed) > 0) {
    if (timesPressed[0] === '0' && Number(timesPressed) >= 1) {
      inputValue = timesPressed.slice(1);
      setTimesPressed(timesPressed.slice(1));
    }
    inputValue = timesPressed;
  } else if (Number(timesPressed) === 0) {
    inputValue = '0';
  } else {
    inputValue = timesPressed;
  }

  const handleNumberPress = (number: string): void => {
    if (firstNumber === '0' && Number(number) >= 0) {
      setFirstNumber(current => current + number);
      setFirstNumber(firstNumber.slice(1));
    }
    setFirstNumber(current => current + number);
  };

  const clear = () => {
    setFirstNumber('0');
    setSecondNumber('');
  };

  const handleOperationPress = (operationButton: string) => {
    if (firstNumber.includes('= ')) {
      setSecondNumber(result + operationButton);
    } else {
      setSecondNumber(firstNumber + operationButton);
    }
    setOperation(operationButton);
    setFirstNumber('0');
  };
  const handleResult = () => {
    switch (operation) {
      case '÷':
        const division =
          Number(secondNumber.slice(0, -1)) / Number(firstNumber);
        setFirstNumber('= ' + String(division));
        setSecondNumber(current => current + firstNumber);
        setResult(division);
        break;
      case '×':
        const multiplication =
          Number(secondNumber.slice(0, -1)) * Number(firstNumber);
        setFirstNumber('= ' + String(multiplication));
        setSecondNumber(current => current + firstNumber);
        setResult(multiplication);
        break;
      case '-':
        const subtraction =
          Number(secondNumber.slice(0, -1)) - Number(firstNumber);
        setFirstNumber('= ' + String(subtraction));
        setSecondNumber(current => current + firstNumber);
        setResult(subtraction);
        break;
      case '+':
        const addition =
          Number(secondNumber.slice(0, -1)) + Number(firstNumber);
        setFirstNumber('= ' + String(addition));
        setSecondNumber(current => current + firstNumber);
        setResult(addition);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.inputText}>{secondNumber}</Text>
        <Text
          style={styles.resultText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {firstNumber}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {/* <View style={{ ...styles.inputContainer, backgroundColor: 'green' }}> */}
        <View style={styles.row}>
          <Button text="C" color="#9b9b9b" textColor="black" action={clear} />
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
              handleOperationPress('÷');
            }}
          />
        </View>
        <View style={styles.row}>
          <Button
            text="1"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('1');
            }}
          />
          <Button
            text="2"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('2');
            }}
          />
          <Button
            text="3"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('3');
            }}
          />
          <Button
            text="&#215;"
            color="#ff9527"
            action={() => {
              handleOperationPress('×');
            }}
          />
        </View>
        <View style={styles.row}>
          <Button
            text="4"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('4');
            }}
          />
          <Button
            text="5"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('5');
            }}
          />
          <Button
            text="6"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('6');
            }}
          />
          <Button
            text="&#45;"
            color="#ff9527"
            action={() => {
              handleOperationPress('-');
            }}
          />
        </View>
        <View style={styles.row}>
          <Button
            text="7"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('7');
            }}
          />
          <Button
            text="8"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('8');
            }}
          />
          <Button
            text="9"
            color="#2d2d2d"
            action={() => {
              handleNumberPress('9');
            }}
          />
          <Button
            text="&#43;"
            color="#ff9527"
            action={() => {
              handleOperationPress('+');
            }}
          />
        </View>
        <View style={styles.row}>
          <Button
            text="0"
            color="#2d2d2d"
            buttontype="doble"
            action={() => {
              handleNumberPress('0');
            }}
          />
          <Button
            text="."
            color="#2d2d2d"
            action={() => {
              handleNumberPress('.');
            }}
          />
          <Button
            text="&#61;"
            color="#ff9527"
            action={() => {
              handleResult();
              setTimesPressed(current => current + '=');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
