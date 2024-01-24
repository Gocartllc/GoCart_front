import React, { useEffect } from 'react';
import { View, Text, Image, Alert, StyleSheet } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import PremiumButton from '@components/PremiumButton/PremiumButton';
import Auth0 from 'react-native-auth0';
import config from 'auth0-configuration';
import { LoginTypeProps } from './Login.types';
import { getKeychainValue, setKeychainValue } from '@components/KeychainStore';
import { styles } from './Login.styles';

const auth0 = new Auth0({
  domain: config.domain,
  clientId: config.clientId,
});

const Login: React.FC<LoginTypeProps> = ({ navigation }) => {
    const { authorize, clearSession, user, getCredentials, error, isLoading } = useAuth0();

        // Automatically check for existing token when component mounts
        useEffect(() => {
          const checkToken = async () => {
              const tokenData = await getKeychainValue();
              if (tokenData) {
                  const currentTime = new Date().getTime(); // Current time in milliseconds
                  const tokenExpiryTime = tokenData.expiresAt * 1000; // Convert to milliseconds
                  if (currentTime < tokenExpiryTime) {
                      // Token is valid, navigate to MainTab
                      navigation.navigate('MainTab');
                  }
              }
          };
      
          checkToken();
      }, [navigation]);
      
      
    const onLogin = async () => {
        try {
            await authorize({ 
              scope: 'openid email profile',
          }, {});
            const credentials = await getCredentials();
            if (credentials && credentials.accessToken) {
                const tokenData = {
                    accessToken: credentials.accessToken,
                    idToken: credentials.idToken,
                    expiresAt: credentials.expiresAt // Assuming this is a timestamp
                };
                const success = await setKeychainValue(tokenData);

                if (!success) {
                    Alert.alert('Error', 'Failed to save token data');
                    return;
                }
      
                const userMetadata = await auth0.auth.userInfo({ token: credentials.accessToken });
                if (!userMetadata.user_metadata?.agreedToTerms) {
                    navigation.navigate('UserDetails');
                } else {
                    navigation.navigate('MainTab');
                }
            } else {
                Alert.alert('No access token received');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Login failed');
        }
    };

      
      
    
    const onSignup = async () => {
      try {
          await authorize({
            scope: 'openid profile email',
            audience: 'https://YOUR_AUTH0_DOMAIN/userinfo',
          });
  
          const credentials = await getCredentials();
          if (credentials && credentials.accessToken) {
              const tokenData = {
                  accessToken: credentials.accessToken,
                  idToken: credentials.idToken,
                  expiresAt: credentials.expiresAt // Assuming this is a timestamp
              };
              const success = await setKeychainValue(tokenData);
  
              if (!success) {
                  Alert.alert('Error', 'Failed to save token data');
                  return;
              }
  
              const userMetadata = await auth0.auth.userInfo({ token: credentials.accessToken });
              if (!userMetadata.user_metadata?.agreedToTerms) {
                  navigation.navigate('UserDetails');
              } else {
                  navigation.navigate('MainTab');
              }
              console.log('Signup successful');
          } else {
              Alert.alert('No access token received');
          }
      } catch (error) {
          console.error(error);
          Alert.alert('Signup failed');
      }
  };
  
    
    
      const loggedIn = user !== undefined && user !== null;
    
      const onLogout = async () => {
        await clearSession({}, {});
      };
    
    
      if (isLoading) {
        return <View style={styles.container}><Text>Loading</Text></View>;
      }

    return (
   
    <View style={{ flex: 1, backgroundColor:"#fffff" }}>
  
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop:120}}>
            <Image source={require('../../images/logo.png')} style={{ marginBottom: 50 }} />
        </View>
        <View style={styles.content}>
             <Text style={styles.shadowText}>Recipes made for You</Text>
             {error && <Text style={styles.errorlocal}>{error.message}</Text>}
        </View>
        <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <PremiumButton
                        title="Continue with Google"
                        onPress={() =>console.log("Hi")}
                        color="#FFF"
                        textcolor='#2dd881'
                        btnwidth={300} />
                </View>

                <View style={styles.buttonContainer}>
                    <PremiumButton
                        title="Continue with Apple"
                        onPress={() =>console.log("Hi")}
                        color="#FFF"
                        textcolor='#2dd881'
                        btnwidth={300} />
                </View>

                <View style={styles.buttonContainer}>
                    <PremiumButton
                        title="Sign up with Email"
                        onPress={onSignup}
                        color="#4f5d75"
                        textcolor='#2dd881'
                        btnwidth={300} />
                </View>

                <View style={styles.buttonContainer}>
                    <PremiumButton
                        title="Log in"
                        onPress={onLogin}
                        color="#FFF"
                        textcolor='#2dd881'
                        btnwidth={300} />
                </View>
            </View>
    </View>
    );
  };
  
  


  export default Login;
