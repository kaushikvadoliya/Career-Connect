import React, { useState } from 'react';
import styles from './style';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PersonalInformation from '../../components/PersonalInformation';
import EducationAndExperience from '../../components/EducationAndExperience';
import PortFolio from '../../components/PortFolio';
import ReviewAndSubmit from '../../components/ReviewAndSubmit';
import Button from '../../components/Button';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { UserDetails } from '../../types/userType';

const steps = [
  {
    id: 'persoanl-info-form',
    title: 'Personal Information',
    content: <PersonalInformation />,
  },
  {
    id: 'education-experience',
    title: 'Educational & Experience',
    content: <EducationAndExperience />,
  },
  {
    id: 'porrtfolio',
    title: 'Portfolio & Preferences',
    content: <PortFolio />,
  },
  {
    id: 'review-submit',
    title: 'Review & Submit',
    content: <ReviewAndSubmit />,
  },
];

const Stepper = () => {
  const { handleSubmit } = useFormContext<UserDetails>();
  const [activeStep, setActiveStep] = useState<number>(0);

  const onSubmit = (data: UserDetails) => {
    setActiveStep(activeStep + 1);
    console.log(data);
  };

  const backPage = () => {
    setActiveStep(activeStep - 1);
  };

  const onSave = () => {
    Alert.alert('Data is Submitted');
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.stepContainer}>
          {steps.map((_, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={
                  activeStep === index
                    ? styles.activeButton
                    : styles.inActiveButton
                }
                onPress={() => setActiveStep(index)}
              >
                <Text style={styles.buttonText}>Step {index + 1}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.headerContainer}>
          <Image
            style={styles.image}
            source={require('../../assests/logo.png')}
          />
          <Text style={styles.logoText}>CareerConnct</Text>
        </View>
        <Text style={styles.headerTitle}>{steps[activeStep].title}</Text>
        {steps[activeStep].content}
      </View>

      <View style={styles.mainButtonContainer}>
        {activeStep > 0 && (
          <Button
            onPress={backPage}
            text="Back"
            backgroudColor="grey"
            style={styles.button}
          />
        )}
        {activeStep < steps.length - 1 && (
          <Button
            onPress={handleSubmit(onSubmit)}
            text="Next"
            backgroudColor="#1e90ff"
            style={styles.button}
          />
        )}
        {activeStep === steps.length - 1 && (
          <Button
            onPress={handleSubmit(onSave)}
            text="Save"
            backgroudColor="#1e90ff"
            style={styles.button}
          />
        )}
      </View>
    </>
  );
};

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
