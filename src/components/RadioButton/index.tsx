import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import styles from './style';

type Props = {
  control: Control<any>;
  name: string;
  array: string[];
  text: string;
  rules: RegisterOptions;
};

const RadioButton = ({ control, name, array, text, rules }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <View>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.mainContainer}>
              {array.map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => onChange(option)}
                  style={styles.container}
                >
                  <View style={styles.circleBorder}>
                    {value === option && <View style={styles.circle} />}
                  </View>
                  <Text style={styles.text}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default RadioButton;
