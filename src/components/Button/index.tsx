import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './style';

type Props = {
  text: string;
  onPress?: () => void;
  backgroudColor: string;
} & Omit<TouchableOpacityProps, 'onPress'>;

const Button = ({
  text,
  onPress,
  backgroudColor,
  style,
  ...restTouchableProps
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: backgroudColor }, style]}
      {...restTouchableProps}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
