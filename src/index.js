import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* auth provider  */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
