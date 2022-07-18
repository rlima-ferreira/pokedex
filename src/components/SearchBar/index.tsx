import React, { useState, ChangeEvent, FormEvent } from 'react';
import pokemon from '../../api/pokemon';
import Input from '../Input';
import { Form } from './styled';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [form, setForm] = useState({ name: '' });

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    pokemon.findOne(form.name);
  }

  function handleChange({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [name]: value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </Form>
  );
}
