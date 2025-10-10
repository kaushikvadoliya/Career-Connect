/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import styles from './style';

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
} & TextInputProps;

const InputField = <T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: Props<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              {
                borderColor: isFocused ? '#1e90ff' : 'darkgrey',
                borderWidth: 1.2,
              },
            ]}
          >
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={() => {
                onBlur();
                setIsFocused(false);
              }}
              onFocus={() => setIsFocused(true)}
              placeholderTextColor="#888"
              {...rest}
            />
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default InputField;
