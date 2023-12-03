import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(<App />);