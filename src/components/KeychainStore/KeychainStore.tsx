// KeychainStore.tsx
import * as Keychain from 'react-native-keychain';
import { TokenData, KeychainCredentials } from './KeychainStore.types';
import { KEYCHAIN_STORE } from './KeychainStore.config';

export const setKeychainValue = async (data: TokenData): Promise<boolean> => {
  try {
    await Keychain.setGenericPassword(KEYCHAIN_STORE, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error setting Keychain value:', error);
    return false;
  }
};

export const getKeychainValue = async (): Promise<TokenData | null> => {
  try {
    const credentials: KeychainCredentials | false = await Keychain.getGenericPassword();
    if (credentials) {
      return JSON.parse(credentials.password);
    } else {
      console.log('No credentials stored');
      return null;
    }
  } catch (error) {
    console.error('Error getting Keychain value:', error);
    return null;
  }
};
