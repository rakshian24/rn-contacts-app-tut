import React, {useState} from 'react';
import LoginComponent from '../../components/Login';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <LoginComponent
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      hide={hide}
      toggleHide={toggleHide}
    />
  );
};

export default SignIn;
