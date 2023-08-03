import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';
import LoginScreenStyles from './style';
import {translate} from '../../../utils/language';
import {fetchLoginRequest} from '../redux/auth.actions';
import {useDispatch} from 'react-redux';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../navigation/screenName';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const onClickLogin = () => {
    dispatch(
      fetchLoginRequest({
        userName: 'userName',
        password: 'password',
      }),

      navigate({screen: ScreenName.REGISTER_SCREEN}),
    );
  };

  return <View></View>;
};

export default LoginScreen;
