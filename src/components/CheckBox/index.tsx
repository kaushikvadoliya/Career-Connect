import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { Controller, Control, RegisterOptions } from 'react-hook-form';

const skills: string[] = ['React-Native', 'TypeScript', 'React-js', 'Node-js'];

type CheckBoxProps = {
  control: Control<any>;
  name: string;
  rules: RegisterOptions;
};

const CheckBox = ({ control, name, rules }: CheckBoxProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <View>
            <Text style={styles.title}>Choose the Skills</Text>
            <View style={styles.checkBoxContainer}>
              {skills.map(option => {
                const isSelected = value.includes(option);
                return (
                  <TouchableOpacity
                    key={option}
                    style={styles.checkBox}
                    onPress={() => {
                      let newSkills: string[];
                      if (isSelected) {
                        newSkills = value.filter(
                          (item: string) => item !== option,
                        );
                      } else {
                        newSkills = [...value, option];
                      }
                      onChange(newSkills);
                    }}
                  >
                    <View style={styles.boxBorder}>
                      {value.includes(option) ? (
                        <View style={styles.box} />
                      ) : undefined}
                    </View>
                    <Text style={styles.checkBoxtext}>{option}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default CheckBox;
