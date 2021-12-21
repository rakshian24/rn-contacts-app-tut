import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Icon} from 'react-native-elements';
import CustomButton from '../../components/common/CustomButton';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <Container>
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
      <CustomButton title="Login" primary loading={true} />
    </Container>
  );
};

export default SignIn;
