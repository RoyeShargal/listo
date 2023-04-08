import TextInput from '../../../components/TextInput/TextInput';
import React, { useEffect, useState } from 'react';
import { InputFieldContainer } from './styles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('EMAIL: ', email);
  }, [email]);

  useEffect(() => {
    console.log('passWORD: ', password);
  }, [password]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red',
        borderRadius: 16,
      }}
    >
      <InputFieldContainer>
        <p style={{ marginBottom: 4 }}>Email:</p>
        <TextInput onValueChanged={setEmail} />
      </InputFieldContainer>

      <InputFieldContainer>
        <p style={{ marginBottom: 4 }}>Password:</p>
        <TextInput onValueChanged={setPassword} />
      </InputFieldContainer>
    </div>
  );
};

export default Register;
