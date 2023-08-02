import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { spinner } from './spinner.style';

const Spinner = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [, setCount] = useState<number>(0);

  useEffect(() => {
    EventRegister.addEventListener('ShowSpinner', () => {
      setIsShow(true);
      setCount(preNumber => preNumber + 1);
    });
    EventRegister.addEventListener('HideSpinner', () => {
      setCount(preNumber => {
        const decrease = preNumber - 1;
        if (decrease <= 0) {
          setIsShow(false);
        }
        return decrease;
      });
    });

    return () => {
      EventRegister.removeEventListener('ShowSpinner');
      EventRegister.removeEventListener('HideSpinner');
      EventRegister.removeAllListeners();
    };
  }, []);

  return (
    <>
      {isShow && (
        <View style={spinner.container}>
          <View style={spinner.overlay} />
          <View style={spinner.indicatorContainer}>
            <View style={spinner.containerStyle} />
          </View>
        </View>
      )}
    </>
  );
};

export const showSpinner = () => EventRegister.emit('ShowSpinner');
export const hideSpinner = () => EventRegister.emit('HideSpinner');

export default Spinner;
