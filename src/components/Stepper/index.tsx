import { useFormContext } from 'react-hook-form';
import EducationAndExperience from '../EducationAndExperience';
import PersonalInformation from '../PersonalInformation';
import PortFolio from '../PortFolio';
import ReviewAndSubmit from '../ReviewAndSubmit';
import { UserDetails } from '../../types/userType';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../Button';
import styles from './style';
import { AuthStore } from '../../Zustand/Store/AuthStore';
import { useNavigation } from '@react-navigation/native';

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
  const { user } = AuthStore();
  const { handleSubmit } = useFormContext<UserDetails>();
  const [activeStep, setActiveStep] = useState<number>(0);
  const navigation = useNavigation<any>();

  const onSubmit = (data: UserDetails) => {
    setActiveStep(activeStep + 1);
    console.log(data);
  };

  const backPage = () => {
    setActiveStep(activeStep - 1);
  };

  const onSave = () => {
    if (user !== null) {
      navigation.navigate('HomeStack', { screen: 'Home' });
    }
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

export default Stepper;
