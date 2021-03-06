import { useAuth } from '@Contexts/Auth';
import { Button, Input, Spacer } from '@geist-ui/react';
import { Edit, Lock, Mail } from '@geist-ui/react-icons';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer } from './FormContainer';
import { FormFooter } from './FormFooter';

export const Signup = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleLoading = async () => {
    setLoading(!loading);
  };
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const { signUp } = useAuth();
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const { error } = await signUp({ email, password });
    error ? alert('error in singing up') : history.push('/');
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
          iconRight={<Edit />}
          width="100%"
          font={1.2}
        >
          Create account
        </Button>
        <FormFooter redirectTo="/login" text="Already have an account?" />
      </form>
    </FormContainer>
  );
};
