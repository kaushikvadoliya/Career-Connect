import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import { useFormContext } from 'react-hook-form';
import InputField from '../InputField';
import DropdownComponent from '../DropDown/index.';
import CheckBox from '../CheckBox';
import { EducationDetails } from '../../types/userType';

const EducationAndExperience = () => {
  const { control, register } = useFormContext<EducationDetails>();
  return (
    <View>
      <Text style={styles.headerText}>
        Step 2: Enter your Educational & Experience information
      </Text>
      <View style={styles.container}>
        <Text style={styles.text}>Enter the Education Qualification :</Text>
        <DropdownComponent<EducationDetails>
          control={control}
          rules={{
            required: 'select the highest qualification',
          }}
          {...register('qualification')}
        />
        <Text style={styles.text}>Enter the Years of Experience :</Text>
        <View>
          <InputField<EducationDetails>
            control={control}
            placeholder="experience"
            rules={{
              required: 'experience is required',
              minLength: {
                value: 0,
                message: 'Experience is more than 1 year',
              },
            }}
            {...register('experience')}
          />
        </View>
        <CheckBox<EducationDetails>
          control={control}
          rules={{
            required: 'select the skills',
          }}
          {...register('skills')}
        />
      </View>
    </View>
  );
};

export default EducationAndExperience;
