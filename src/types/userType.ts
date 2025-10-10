export interface PersonalDetails {
  fullName: string;
  email: string;
  phone: number;
  gender: string;
}

export interface EducationDetails extends PersonalDetails {
  qualification: string;
  experience: number;
  skills: string[];
}

export interface UserDetails extends EducationDetails {
  portfolio: string;
  jobType: string;
  bio: string;
}
