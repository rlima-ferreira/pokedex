import React, { useState } from 'react';
import ListPokemon from '../ListPokemon';
import SearchBar from '../SearchBar';
import { Content } from './styled';

export default function Pokemons() {
  const [list, setList] = useState({ offset: 0, limit: 100 });

  return (
    <Content>
      <header>
        <h1>Pokémons</h1>
      </header>
      <main>
        <div>
          <SearchBar />
        </div>
        <ListPokemon offset={list.offset} limit={list.limit} />
      </main>
    </Content>
  );
}
