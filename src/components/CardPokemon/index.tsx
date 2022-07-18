import React, { useEffect, useState } from 'react';
import pokemon from '../../api/pokemon';
import { PokemonType } from '../../types/pokemon.type';
import { Card, Badge } from './styled';
import { CgMoreVertical } from 'react-icons/cg';
import { TbPokeball } from 'react-icons/tb';

type PropType = {
  name: string;
};

export default function CardPokemon({ name }: PropType) {
  const [info, setInfo] = useState<PokemonType>({});
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    pokemon.findOne(name).then(({ data }) => setInfo(data));
  }, [name]);

  function handleFlip() {
    setFlipped(!flipped);
  }

  return (
    <Card flip={flipped}>
      <main>
        <div className="front">
          <header>
            <div>
              <p>N° {`00${info.id}`.slice(-3)}</p>
            </div>
            <div>
              <h1>{info?.name}</h1>
            </div>
            <div>
              <button>
                <CgMoreVertical size={14} />
              </button>
              <button onClick={handleFlip}>
                <TbPokeball size={14} />
              </button>
            </div>
          </header>
          <main>
            <figure>
              <img
                src={info?.sprites?.other['official-artwork'].front_default}
                alt={info?.name}
              />
            </figure>
            <div className="info">
              {info.types?.map((item) => (
                <Badge key={item.type.name}>{item.type.name}</Badge>
              ))}
            </div>
          </main>
        </div>
        <div className="back">
          <header>
            <div>
              <p>N° {`00${info.id}`.slice(-3)}</p>
            </div>
            <div>
              <h1>{info?.name}</h1>
            </div>
            <div>
              <button>
                <CgMoreVertical size={14} />
              </button>
              <button onClick={handleFlip}>
                <TbPokeball size={14} />
              </button>
            </div>
          </header>
          <main>
            {info.stats?.map((item) => (
              <p>
                <b>{item.stat.name}: </b>
                {item.base_stat}
              </p>
            ))}
            <p>
              <b>Height: </b>
              {info.height && Number(info.height / 10).toFixed(2)} m
            </p>
            <p>
              <b>Weight: </b>
              {info.weight && Number(info.weight / 10).toFixed(2)} kg
            </p>
          </main>
        </div>
      </main>
    </Card>
  );
}
