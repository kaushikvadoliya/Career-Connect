import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Controller,
  Control,
  RegisterOptions,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import styles from './style';

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  array: string[];
  text: string;
  rules: RegisterOptions<T, FieldPath<T>>;
};

const RadioButton = <T extends FieldValues>({
  control,
  name,
  array,
  text,
  rules,
}: Props<T>) => {
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
