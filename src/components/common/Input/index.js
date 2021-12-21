import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import color from '../../../assets/theme/color';
import styles from './style';

const Input = ({
  value,
  handleOnChangeText,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focussed, setFocussed] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (focussed) {
      return color.primary;
    }
    if (error) {
      return color.danger;
    } else {
      return color.gray;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label ? (
        <View style={styles.label}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      ) : null}
      <View
        style={[
          styles.wrapper,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            flexDirection: getFlexDirection(),
            borderColor: getBorderColor(),
            alignItems: icon ? 'center' : 'stretch',
          },
        ]}>
        {icon && <View>{icon}</View>}
        <View style={styles.textInputContainer}>
          <TextInput
            value={value}
            onChangeText={handleOnChangeText}
            style={styles.textInput}
            onFocus={() => setFocussed(true)}
            onBlur={() => setFocussed(false)}
            {...props}
          />
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
