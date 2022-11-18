import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../themes/CalculatorTheme';

interface Props {
  text: string;
  textColor?: string;
  buttontype?: string;
  color: string;
  action?: () => void;
}

export const Button = ({
  text,
  textColor = 'white',
  buttontype = 'common',
  color,
  action,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(buttontype === 'common' ? null : styles.dobleButton),
        backgroundColor: color,
      }}
      onPress={action}>
      <Text
        style={[styles.text, textColor === 'white' ? null : styles.blackText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
