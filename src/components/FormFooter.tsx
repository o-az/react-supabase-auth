import { Card, Text } from '@geist-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IFormFooter {
  text: string;
  redirectTo: string;
}

export const FormFooter: React.FC<IFormFooter> = (props: IFormFooter) => {
  const { text, redirectTo } = props;
  const linkText = redirectTo === '/signup' ? 'Sign Up' : 'Sign In';
  return (
    <Card.Footer>
      <Text p>
        {text} <Link to={redirectTo}>{linkText}</Link>
      </Text>
    </Card.Footer>
  );
};
