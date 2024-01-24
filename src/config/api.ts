import {Platform} from 'react-native';

export const ANDROID_BASE_API_URL = 'http://127.0.0.1:8080';
export const IOS_BASE_API_URL = 'http://127.0.0.1:8080';
export const BASE_API_URL =
  Platform.OS === 'ios' ? IOS_BASE_API_URL : ANDROID_BASE_API_URL;

