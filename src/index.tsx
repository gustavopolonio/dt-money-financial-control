import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website development',
          value: 5000,
          category: 'Sell',
          type: 'deposit',
          createdAt: new Date('2022-03-18 15:32:00')
        },
        {
          id: 2,
          title: 'Rent apto',
          value: 1000,
          category: 'Mounth rent',
          type: 'withdraw',
          createdAt: new Date('2022-03-18 18:32:00')
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);