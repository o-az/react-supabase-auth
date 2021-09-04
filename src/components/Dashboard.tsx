import { useAuth } from '@Contexts/Auth';
import { Loading, Table } from '@geist-ui/react';
import * as React from 'react';
import styled from 'styled-components';
import { Logout } from './Logout';

const endpoint = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
const query = `
query {
  allFilms {
    films {
      title
      director
      releaseDate
    }
  }
}
`;

interface IFilm {
  title: string;
  director: string;
  releaseDate: string;
}

const Container = styled.div`
  grid-row: 2 / 5;
  grid-column: 2 / 5;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: flex-start;
`;

export const Dashboard = () => {
  const { user } = useAuth();

  const [films, setFilms] = React.useState<IFilm[]>([] as IFilm[]);

  const fetchFilms = async () => {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query }),
      credentials: 'omit',
    });
    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    fetchFilms().then((result) => {
      setFilms(result.data.allFilms.films);
    });
  }, []);

  return (
    <>
      <Logout />
      <Container>
        {films ? (
          <Table data={films}>
            <Table.Column prop="title" label="title" />
            <Table.Column prop="director" label="director" />
            <Table.Column prop="releaseDate" label="release date" />
          </Table>
        ) : (
          <Loading spaceRatio={2.5} />
        )}
        <p>Welcome! ${user?.id}!</p>
      </Container>
    </>
  );
};
