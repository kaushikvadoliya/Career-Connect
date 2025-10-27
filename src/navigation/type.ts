import { UserDetails } from '../types/userType';

export type StackParams = {
  PersonalInformation: undefined;
  EducationAndExperience: {
    userInfo: UserDetails;
  };
  PortFolio: undefined;
  Review: undefined;
};
