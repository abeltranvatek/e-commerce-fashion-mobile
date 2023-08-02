import { getUniqueId, getDeviceId } from 'react-native-device-info';
import { Platform, NativeModules } from 'react-native';

export const getUserDevice = async () => {
  return {
    deviceId: await getUniqueId(),
    description: getDeviceId(),
    platform: Platform.OS,
  };
};

export const getMarginTopAbsolute = () => {
  const { StatusBarManager } = NativeModules;
  return StatusBarManager.HEIGHT ?? 0;
};
