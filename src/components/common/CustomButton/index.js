import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import color from '../../../assets/theme/color';
import colors from '../../../assets/theme/color';
import styles from './styles';

const CustomButton = ({
  title,
  primary,
  secondary,
  danger,
  success,
  disabled,
  loading,
}) => {
  const getCustomButtonColor = () => {
    if (disabled) {
      return colors.gray;
    }
    if (primary) {
      return colors.primary;
    }

    if (secondary) {
      return colors.secondary;
    }

    if (danger) {
      return colors.danger;
    }

    if (success) {
      return colors.success;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.customButton, {backgroundColor: getCustomButtonColor()}]}>
      <View style={styles.loadingSection}>
        {loading && <ActivityIndicator style={{paddingRight: 5}} />}
        {title && (
          // eslint-disable-next-line react-native/no-inline-styles
          <Text
            style={[
              styles.buttonText,
              // eslint-disable-next-line react-native/no-inline-styles
              {color: disabled ? 'black' : color.white},
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
