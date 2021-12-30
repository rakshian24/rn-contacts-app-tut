import React, {useState} from 'react';
import RegisterComponent from '../../components/Register';
import {getFieldLabel, validateEmail} from '../../utils/helperFunctions';
import envs from '../../config/env';

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [hide, setHide] = useState(true);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      //Password Validation
      if (name === 'password') {
        if (value.length < 6) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'Password should be min 6 characters',
            };
          });
        } else {
          setError(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      }
      //Username Validation
      else if (name === 'userName') {
        if (value.length < 3) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'Username should be min 3 characters',
            };
          });
        } else if (value.length > 28) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'Username is too long',
            };
          });
        } else {
          setError(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      }
      //First Name Validation
      else if (name === 'firstName') {
        if (value.length < 3) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'First name should be min 3 characters',
            };
          });
        } else if (value.length > 28) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'First name is too long',
            };
          });
        } else {
          setError(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      }
      //Last Name Validation
      else if (name === 'lastName') {
        if (value.length < 3) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'Last name should be min 3 characters',
            };
          });
        } else if (value.length > 28) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'Last name is too long',
            };
          });
        } else {
          setError(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      }
      // Email Validation
      else if (name === 'email') {
        if (!validateEmail(value)) {
          setError(prev => {
            return {
              ...prev,
              email: 'Please enter a valid email address',
            };
          });
        } else {
          setError(prev => {
            return {...prev, email: null};
          });
        }
      } else {
        setError(prev => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    } else {
      setError(prev => {
        return {...prev, [name]: `${getFieldLabel(name)} is required`};
      });
    }
  };
  const onSubmit = () => {
    if (!form.userName) {
      setError(prev => {
        return {...prev, userName: 'User Name is required'};
      });
    }
    if (!form.firstName) {
      setError(prev => {
        return {...prev, firstName: 'First Name is required'};
      });
    }
    if (!form.lastName) {
      setError(prev => {
        return {...prev, lastName: 'Last Name is required'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'Email is required'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'Password is required'};
      });
    }
  };

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <RegisterComponent
      onChange={onChange}
      error={error}
      onSubmit={onSubmit}
      hide={hide}
      toggleHide={toggleHide}
    />
  );
};

export default Register;
