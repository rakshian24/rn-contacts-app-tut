import React, {useState} from 'react';
import RegisterComponent from '../../components/Register';
import {getFieldLabel, validateEmail} from '../../utils/helperFunctions';

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [hide, setHide] = useState(true);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      // Password Validation
      if (name === 'password') {
        if (value.length < 6) {
          setError(prev => {
            return {
              ...prev,
              password: 'Password should be minimum 6 characters',
            };
          });
        } else {
          setError(prev => {
            return {...prev, password: null};
          });
        }
      }

      // User Name Validation
      if (name === 'userName') {
        if (value.length < 3) {
          setError(prev => {
            return {
              ...prev,
              userName: 'User Name should be minimum 3 characters',
            };
          });
        } else if (value.length > 30) {
          setError(prev => {
            return {
              ...prev,
              userName: 'User Name is too long',
            };
          });
        } else {
          setError(prev => {
            return {...prev, userName: null};
          });
        }
      }

      // First Name Validation
      if (name === 'firstName') {
        if (value.length < 3) {
          setError(prev => {
            return {
              ...prev,
              firstName: 'First Name should be minimum 3 characters',
            };
          });
        } else if (value.length > 30) {
          setError(prev => {
            return {
              ...prev,
              firstName: 'First Name is too long',
            };
          });
        } else {
          setError(prev => {
            return {...prev, firstName: null};
          });
        }
      }

      // Last Name Validation
      if (name === 'lastName') {
        if (value.length < 3) {
          setError(prev => {
            return {
              ...prev,
              lastName: 'Last Name should be minimum 3 characters',
            };
          });
        } else if (value.length > 30) {
          setError(prev => {
            return {
              ...prev,
              lastName: 'Last Name is too long',
            };
          });
        } else {
          setError(prev => {
            return {...prev, lastName: null};
          });
        }
      }
      // Email Validation
      if (name === 'email') {
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
          return {...prev, [name]: null};
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
