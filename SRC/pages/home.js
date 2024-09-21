import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo </h1>
      <Link to="/api-data">Ver Dados da API</Link>
    </div>
  );
};

export default Home;
