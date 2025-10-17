import { create } from 'zustand';
import { UserDetails } from '../../types/userType';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStoreType = {
  user: UserDetails | null;
  error: string | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  setUser: (userData: UserDetails) => Promise<void>;
  reset: () => Promise<void>;
};

export const AuthStore = create<AuthStoreType>(set => ({
  user: null,
  error: null,
  loading: false,

  fetchUser: async () => {
    set({ loading: true, error: null });

    try {
      const userExist = await AsyncStorage.getItem('USER');
      if (userExist) {
        set({ loading: false, user: JSON.parse(userExist) });
      } else {
        set({ loading: false, user: null });
      }
    } catch (err: any) {
      set({ loading: false, error: err });
    }
  },

  setUser: async (user: UserDetails) => {
    set({ error: null, loading: true });

    try {
      await AsyncStorage.setItem('USER', JSON.stringify(user));
      set({ user: user, loading: false });
    } catch (err: any) {
      set({ error: err, loading: false });
    }
  },

  reset: async () => {
    set({ loading: true, error: null });

    try {
      await AsyncStorage.removeItem('USER');
      set({ user: null, loading: false });
    } catch (err: any) {
      set({ error: err, loading: false });
    }
  },
}));
