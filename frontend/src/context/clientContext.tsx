import React, { createContext, useState, useContext } from 'react';

interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

interface ClientContextData {
    clients: Client[];
    addClient: (client: Client) => void;
    removeClient: (id: number) => void;
}

const ClientContext = createContext<ClientContextData | undefined>(undefined);

export const ClientProvider: React.FC = ({ children }) => {
    const [clients, setClients] = useState<Client[]>([]);

    const addClient = (client: Client) => {
        setClients([...clients, client]);
    };

    const removeClient = (id: number) => {
        setClients(clients.filter(client => client.id !== id));
    };

    return (
        <ClientContext.Provider value={{ clients, addClient, removeClient }}>
            {children}
        </ClientContext.Provider>
    );
};

export const useClient = (): ClientContextData => {
    const context = useContext(ClientContext);
    if (!context) {
        throw new Error('useClient must be used within a ClientProvider');
    }
    return context;
};