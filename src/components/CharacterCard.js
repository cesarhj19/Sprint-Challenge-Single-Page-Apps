import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row;
  margin: 20px;
`;

const Content = styled.div`
  text-align: center;
  margin: auto;
`;

const Image = styled.img`
  max-width: 500px;
`;

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Image src={character.image} />
      <Content>
        <h1>{character.name}</h1>
        <p>Location: {character.location.name}</p>
        <p>Origin: {character.origin.name}</p>
      </Content>
    </Card>
  );
}
