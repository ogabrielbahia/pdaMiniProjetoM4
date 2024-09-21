import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 20px;
  background-color: #e3f2fd;
  margin: 20px 0;
  border-radius: 8px;
`;

const ListItem = styled(motion.li)`
  list-style: none;
  margin-bottom: 10px;
`;

const Route1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('URL_DA_ROTA_1') // Coloque aqui a URL da rota 1 da API
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <Section>
      <h2>Dados da Rota 1</h2>
      <ul>
        {data.map((item) => (
          <ListItem
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {item.name}
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};

export default Route1;
