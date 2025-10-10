import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import { useFormContext } from 'react-hook-form';
import { UserDetails } from '../../types/userType';

const ReviewAndSubmit = () => {
  const { getValues } = useFormContext<UserDetails>();
  const data = getValues();

  return (
    <View>
      <Text style={styles.headerText}>
        Step 4 : Check your the details and after submit
      </Text>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>FullName : </Text>
          <Text style={styles.text}>{data?.fullName}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Email : </Text>
          <Text style={styles.text}>{data?.email}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Phone : </Text>
          <Text style={styles.text}>{data?.phone}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Gender : </Text>
          <Text style={styles.text}>{data?.gender}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Highest Qualification : </Text>
          <Text style={styles.text}>{data?.qualification}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Years of Experience : </Text>
          <Text style={styles.text}>{data?.experience}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Skills : </Text>
          <View style={styles.skillsContainer}>
            {data?.skills.map((item, index) => {
              return (
                <View key={index} style={styles.skillContainer}>
                  <View style={styles.dotStyle} />
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>PortFilio URL : </Text>
          <Text style={styles.text}>{data?.portfolio}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Job Tyoe : </Text>
          <Text style={styles.text}>{data?.jobType}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Bio Details : </Text>
          <Text style={styles.bioText}>{data?.bio}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewAndSubmit;
