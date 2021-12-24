import React, {useState} from 'react';
import LoginComponent from '../../components/Login';
import {getFieldLabel} from '../../utils/helperFunctions';

const SignIn = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [hide, setHide] = useState(true);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value === '') {
      setErrors(prev => {
        return {
          ...prev,
          [name]: `${getFieldLabel(name)} is required`,
        };
      });
    } else {
      setErrors(prev => {
        return {
          ...prev,
          [name]: null,
        };
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {
          ...prev,
          userName: 'User Name is required',
        };
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Password is required',
        };
      });
    }
  };

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <LoginComponent
      errors={errors}
      hide={hide}
      toggleHide={toggleHide}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignIn;
