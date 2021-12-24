import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import {Icon} from 'react-native-elements';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';

const Login = ({errors, hide, toggleHide, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}>Welcome to Contacts</Text>
        <Text style={styles.subtitle}>Please login here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            handleOnChangeText={value => onChange({name: 'userName', value})}
            error={errors.userName}
          />

          <Input
            label="Password"
            handleOnChangeText={value => onChange({name: 'password', value})}
            icon={
              <Icon
                name={hide ? 'visibility-off' : 'visibility'}
                color="#00aced"
                onPress={toggleHide}
              />
            }
            iconPosition="right"
            secureTextEntry={hide}
            error={errors.password}
          />
          <CustomButton title="Login" primary onPress={onSubmit} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>New to Contacts?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.linkText}>Register here</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;
