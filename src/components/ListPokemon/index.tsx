import React, { useEffect, useState } from 'react';
import pokemon from '../../api/pokemon';
import { FilterPokemonType } from '../../types/filter-pokemon.type';
import CardPokemon from '../CardPokemon';
import { List } from './styled';

export default function ListPokemon({ offset, limit }: FilterPokemonType) {
  const [items, setItems] = useState<Array<{ name: string; url: string }>>([]);

  useEffect(() => {
    pokemon
      .findAll({ offset, limit })
      .then(({ data }) => setItems(data.results));
  }, [offset, limit]);

  return (
    <List>
      {items.map((item) => (
        <CardPokemon key={item.name} name={item.name} />
      ))}
    </List>
  );
}
