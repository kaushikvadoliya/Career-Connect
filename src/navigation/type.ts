import { User } from '../screens/PersonalInformationScreen';

export type StackParams = {
  PersonalInformation: undefined;
  EducationAndExperience: {
    userInfo: User;
  };
  PortFolio: undefined;
  Review: undefined;
};
