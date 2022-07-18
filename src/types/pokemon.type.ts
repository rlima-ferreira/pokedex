export type PokemonType = {
  id?: number;
  name?: string;
  order?: number;
  height?: number;
  weight?: number;
  stats?: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types?: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};
