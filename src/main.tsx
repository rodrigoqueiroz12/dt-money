import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TransactionsProvider from './contexts/TransactionsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </React.StrictMode>,
)
