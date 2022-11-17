import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../themes/CalculatorTheme';

interface Props {
  text: string;
  textColor?: string;
  customWidth?: string;
  color: string;
  action?: () => void;
}

export const Button = ({
  text,
  textColor = 'white',
  customWidth = '80',
  color,
  action,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(customWidth === '80' ? null : styles.dobleButton),
        backgroundColor: color,
      }}
      onPress={action}>
      <Text
        style={[
          styles.text,
          textColor === 'white' ? styles.text : styles.blackText,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
