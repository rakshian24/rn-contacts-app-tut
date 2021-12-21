import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/color';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 8,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  textInputContainer: {
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 5,
    flex: 1,
  },
  label: {
    paddingVertical: 5,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    fontSize: 14,
    color: colors.danger,
    paddingVertical: 8,
  },
});
