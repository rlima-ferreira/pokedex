import { AxiosResponse } from 'axios';
import api from '../services/api';
import { FilterPokemonType } from '../types/filter-pokemon.type';

const pokemon = {
  findAll: async (params?: FilterPokemonType): Promise<AxiosResponse> =>
    api.get('/pokemon', { params }),
  findOne: async (name: string): Promise<AxiosResponse> =>
    api.get(`/pokemon/${name}`),
};

export default pokemon;
