import { Text, View } from 'react-native';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputField from '../InputField';
import styles from './style';
import RadioButton from '../RadioButton';
import { UserDetails } from '../../types/userType';

const PortFolio = () => {
  const { control, register } = useFormContext<UserDetails>();
  return (
    <View>
      <Text style={styles.headerText}>
        Step 3: Enter your Portfolio related Details
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter the PortFolio URL :</Text>
        <View>
          <InputField<UserDetails>
            control={control}
            placeholder="Portfolio URL"
            rules={{
              required: 'URL is required',
              pattern: {
                value:
                  /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/,
                message: 'URL is invalid',
              },
            }}
            {...register('portfolio')}
          />
        </View>
        <RadioButton<UserDetails>
          control={control}
          text="Enter the Job Type"
          array={['Remote', 'On-Site', 'Hybrid']}
          {...register('jobType')}
          rules={{
            required: 'select the job type',
          }}
        />
        <Text style={styles.text}>Enter the Bio Details :</Text>
        <InputField<UserDetails>
          style={styles.bioContainer}
          control={control}
          placeholder="Bio Details"
          multiline
          numberOfLines={10}
          rules={{
            required: 'Bio Details are required',
            minLength: {
              value: 50,
              message: 'Bio is the minmum 50 Character',
            },
          }}
          {...register('bio')}
        />
      </View>
    </View>
  );
};

export default PortFolio;
