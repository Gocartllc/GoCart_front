// SecureStorage.tsx
import * as Keychain from 'react-native-keychain';

class SecureStorage {
  static _instance: SecureStorage | undefined;

  static getInstance = () => {
    if (!this._instance) {
      this._instance = new SecureStorage();
    }

    return this._instance;
  };

  set = async (key: string, value: string) => {
    console.log(`Storing ${key}: ${value}`);
    try {
      await Keychain.setGenericPassword(key, value, { service: key });
    } catch (error) {
      console.log('Error setting data:', error);
    }
  };

  get = async (key: string) => {
    try {
      const credentials = await Keychain.getGenericPassword({ service: key });
      if (credentials) {
        console.log(`The value for ${key} is: ${credentials.password}`);
        return credentials.password;
      }
    } catch (error) {
      console.log('Error getting data:', error);
    }
    return null;
  };

  delete = async (key: string) => {
    console.log(`Deleting ${key}`);
    await Keychain.resetGenericPassword({ service: key });
  };

}

export default SecureStorage;
export const secureStore = SecureStorage.getInstance();
