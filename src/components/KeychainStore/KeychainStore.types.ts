// KeychainStore.types.ts
export type TokenData = {
    accessToken: string;
    idToken: string;
    expiresAt: number; // This should be a timestamp
  };
  
  export type KeychainCredentials = {
    username: string; // This is the Keychain "username" which is the store name in this case
    password: string; // This will contain the actual data as a JSON string
  };
  