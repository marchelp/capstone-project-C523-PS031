// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignupPage from './Pages/SignupPage';

function App() {
  return (
    <div>
      <ToastContainer position='top-center' />
      <SignupPage />
    </div>
  );
}

export default App;
