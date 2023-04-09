/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
