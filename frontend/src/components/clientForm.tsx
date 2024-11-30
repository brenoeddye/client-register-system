import React, { useState } from 'react';
import { useClient } from '../context/clientContext';

const ClientForm: React.FC = () => {
    const { addClient } = useClient();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = () => {
        addClient({ id: Date.now(), name, email, phone, address });
        setName(''); setEmail(''); setPhone(''); setAddress('');
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Endereço"></textarea>
            <button onClick={handleSubmit}>Adicionar Cliente</button>
        </div>
    );
};

export default ClientForm;