import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import RalipoProvider from './provider/ralipo-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RalipoProvider
      showLauncher={true}
      showWidget={false}
      apiKey="d685a15e-cee3-4a26-b18e-af608d2258d9|6oabNTzDGGYO3bB3"
    >
      <div>
        <h1>Ralipo React</h1>
      </div>
      <App />
    </RalipoProvider>
  </React.StrictMode>
);
