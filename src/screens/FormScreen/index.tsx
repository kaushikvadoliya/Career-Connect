import React from 'react';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormProvider, useForm } from 'react-hook-form';
import { UserDetails } from '../../types/userType';
import Stepper from '../../components/Stepper';

const FormScreen = () => {
  const methods = useForm<UserDetails>({
    mode: 'onSubmit',
    defaultValues: {
      skills: [],
      email: '',
      gender: '',
      fullName: '',
      experience: undefined,
      bio: '',
      jobType: '',
      phone: undefined,
      qualification: '',
      portfolio: '',
    },
  });
  return (
    <FormProvider {...methods}>
      <SafeAreaView style={styles.container}>
        <Stepper />
      </SafeAreaView>
    </FormProvider>
  );
};

export default FormScreen;
