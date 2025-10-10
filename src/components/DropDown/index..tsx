/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './style';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { Text } from 'react-native';

export const Qualification = [
  { value: '10th Pass' },
  { value: '12th Pass' },
  { value: 'Graduate' },
  { value: 'Post Graduate' },
];

type Props = {
  control: Control<any>;
  name: string;
  rules: RegisterOptions;
};

const DropdownComponent = ({ name, control, rules }: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <View>
            <Dropdown
              style={[
                styles.dropdown,
                isFocus && { borderColor: isFocus ? '#1e90ff' : 'dimgrey' },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Qualification}
              search
              value={value}
              maxHeight={300}
              labelField="value"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              onChange={item => {
                setIsFocus(false);
                onChange(item.value);
              }}
            />
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default DropdownComponent;
