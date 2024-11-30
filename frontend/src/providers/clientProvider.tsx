import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { ClientProvider } from '../context/clientContext';
import './styles/main.scss';

ReactDOM.render(
    <ClientProvider>
        <App />
    </ClientProvider>,

    document.getElementById('root')
);