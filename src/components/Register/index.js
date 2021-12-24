import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SIGN_IN} from '../../constants/routeNames';
import {Icon} from 'react-native-elements';

const Register = ({error, onChange, onSubmit, hide, toggleHide}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}>Create your account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            handleOnChangeText={value => onChange({name: 'userName', value})}
            error={error.userName}
          />

          <Input
            label="First name"
            handleOnChangeText={value => onChange({name: 'firstName', value})}
            error={error.firstName}
          />

          <Input
            label="Last name"
            handleOnChangeText={value => onChange({name: 'lastName', value})}
            error={error.lastName}
          />

          <Input
            label="Email"
            handleOnChangeText={value => onChange({name: 'email', value})}
            error={error.email}
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
            error={error.password}
          />
          <CustomButton title="Register" primary onPress={onSubmit} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
          <Text style={styles.linkText}>Login here</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;
