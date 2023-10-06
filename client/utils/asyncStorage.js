import AsyncStorage from '@react-native-async-storage/async-storage';

//onBoarding
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error storing onboarding value: ', error);
    throw error; // Re-throw the error to handle it at a higher level if needed
  }
};

export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value; // Return the retrieved value
  } catch (error) {
    console.error('Error retrieving onboarding value: ', error);
    throw error; // Re-throw the error to handle it at a higher level if needed
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing onboarding value: ', error);
    throw error; // Re-throw the error to handle it at a higher level if needed
  }
};
