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
      apiKey="YGA|6oaj8Ty4XXTN1pOV"
    >
      <div>
        <h1>Ralipo React</h1>
      </div>
      <App />
    </RalipoProvider>
  </React.StrictMode>
);
