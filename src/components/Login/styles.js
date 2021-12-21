import {StyleSheet} from 'react-native';
import color from '../../assets/theme/color';

export default StyleSheet.create({
  logo: {
    height: 175,
    width: 175,
    alignSelf: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '500',
    alignSelf: 'center',
    paddingBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    alignSelf: 'center',
    paddingVertical: 10,
    color: 'black',
  },
  form: {
    paddingVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    paddingRight: 10,
    color: 'black',
  },
  linkText: {
    fontSize: 16,
    paddingRight: 10,
    color: color.secondary,
  },
});
