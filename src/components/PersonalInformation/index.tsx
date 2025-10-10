import React from 'react';
import InputField from '../InputField';
import { useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';
import styles from './style';
import RadioButton from '../RadioButton';
import { PersonalDetails } from '../../types/userType';

const PersonalInformation = () => {
  const { register, control } = useFormContext<PersonalDetails>();

  return (
    <View>
      <Text style={styles.headerText}>
        Step 1: Enter your essential personal information
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter the FullName :</Text>
        <View>
          <InputField<PersonalDetails>
            control={control}
            placeholder="FullName"
            rules={{
              required: 'FullName is required',
              minLength: {
                value: 10,
                message: 'FullName length is greater than 8',
              },
            }}
            {...register('fullName')}
          />
        </View>
        <Text style={styles.text}>Enter the Email :</Text>
        <View>
          <InputField<PersonalDetails>
            control={control}
            placeholder="Email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Invalid Email format',
              },
            }}
            {...register('email')}
          />
        </View>
        <Text style={styles.text}>Enter the Phone Number :</Text>
        <View>
          <InputField<PersonalDetails>
            keyboardType="numeric"
            control={control}
            placeholder="Phone Number"
            rules={{
              required: 'Phone Number is required',
              minLength: {
                value: 10,
                message: 'phone number is minimum 10 digit',
              },
            }}
            {...register('phone')}
          />
        </View>
      </View>
      <RadioButton<PersonalDetails>
        control={control}
        array={['male', 'female', 'other']}
        text="Choose the Gender : "
        {...register('gender')}
        rules={{
          required: 'select the gender',
        }}
      />
    </View>
  );
};

export default PersonalInformation;
