import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_USER_TOKEN  = "TOKEN_USER"

export const saveUserToken = async (token) => {
    await AsyncStorage.setItem(KEY_USER_TOKEN, token)
    
};

export const getUserToken = async () => {
    const value = await AsyncStorage.getItem(KEY_USER_TOKEN)
    return value
};
  

