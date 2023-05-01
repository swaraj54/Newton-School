import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


// React 18 version
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// const App = () => {
//   return <h1>Hello, World Newton's!</h1>;
// };
// ReactDOM.render(<App />, document.getElementById('root'));
