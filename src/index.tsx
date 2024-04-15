import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Model, createServer } from 'miragejs';
import ReactModal from 'react-modal';

createServer({

  models: {
    transaction : Model
  },

  seeds(server) {
    server.db.loadData({
      transactions : [
        {id: 1, title : 'Conta de luz', amount: 150, type: 'withdraw', category: 'casa', createdAt : new Date('2024-03-07 08:00')},
        {id: 2, title : 'Condominio', amount: 500, type: 'withdraw', category: 'casa', createdAt : new Date('2024-03-07 08:30')},
        {id: 3, title : 'salário', amount: 5000, type: 'deposit', category: 'casa', createdAt : new Date('2024-03-05 00:01')},
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

ReactModal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

