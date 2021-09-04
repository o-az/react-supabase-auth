import { useAuth } from '@Contexts/Auth';
import { Button, Input, Spacer } from '@geist-ui/react';
import { Lock, LogIn, Mail } from '@geist-ui/react-icons';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer } from './FormContainer';
import { FormFooter } from './FormFooter';
// import styled from 'styled-components';
// const Container = styled.div`
//   grid-row: 2 / 5;
//   grid-column: 2 / 5;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   align-content: center;
//   justify-content: space-around;
//   width: 100%;
// `;

// interface InputProps {
//   id: string;
//   label: string;
//   type?: string;
// };

export const Login = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleLoading = async () => {
    setLoading(!loading);
  };
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(emailRef, passwordRef);
    event.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const { error } = await signIn({ email, password });
    error ? alert('error in singing in') : history.push('/');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          id="input-email"
          icon={<Mail />}
          ref={emailRef}
          type="default"
          width="100%"
          placeholder="Email Address"
        />
        <Spacer h={1} />
        <Input.Password
          id="input-password"
          icon={<Lock />}
          ref={passwordRef}
          type="default"
          width="100%"
          placeholder="Password"
        />
        <Spacer />
        <Button
          htmlType="submit"
          onClick={handleLoading}
          loading={loading}
          shadow
          type="secondary"
          iconRight={<LogIn />}
          width="100%"
          font={1.2}
        >
          Log in
        </Button>
        <FormFooter redirectTo="/signup" text="Don't have an account?" />
      </form>
    </FormContainer>
  );
};
