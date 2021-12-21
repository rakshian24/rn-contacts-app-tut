import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import {Icon} from 'react-native-elements';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';

const Login = ({
  userName,
  setUserName,
  password,
  setPassword,
  hide,
  toggleHide,
}) => {
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
            value={userName}
            handleOnChangeText={text => setUserName(text)}
          />

          <Input
            label="Password"
            value={password}
            handleOnChangeText={text => setPassword(text)}
            icon={
              <Icon
                name={hide ? 'visibility-off' : 'visibility'}
                color="#00aced"
                onPress={toggleHide}
              />
            }
            iconPosition="right"
            secureTextEntry={hide}
          />
          <CustomButton title="Login" primary />
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
