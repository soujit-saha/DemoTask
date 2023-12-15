import {ToastAndroid} from 'react-native';

export default function showAlert(message: string, isLong = false) {
  ToastAndroid.show(
    message,
    isLong == true ? ToastAndroid.LONG : ToastAndroid.SHORT,
  );
}
