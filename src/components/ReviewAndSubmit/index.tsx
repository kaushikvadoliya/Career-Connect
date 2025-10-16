import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import { useFormContext } from 'react-hook-form';
import { UserDetails } from '../../types/userType';
import { AuthStore } from '../../Zustand/Store/AuthStore';

const ReviewAndSubmit = () => {
  const { getValues } = useFormContext<UserDetails>();
  const data = getValues();
  if (data) {
    const { setUser } = AuthStore();
    setUser(data);
  }

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
          <Text style={styles.text}>{data.skills.join(' , ')}</Text>
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
