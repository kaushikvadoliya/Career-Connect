/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import styles from './style';

type Props = {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
} & TextInputProps;

const InputField = ({ control, name, rules, ...rest }: Props) => {
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
