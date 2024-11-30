import React from 'react';
import { useClient } from '../context/ClientContext';

const ClientList: React.FC = () => {
  const { clients, removeClient } = useClient();

  return (
    <ul>
      {clients.map(client => (
        <li key={client.id}>
          {client.name} - {client.email}
          <button onClick={() => removeClient(client.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;