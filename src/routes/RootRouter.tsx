import Main from 'pages/Main';
import SetOption from 'pages/SetOption';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/option" element={<SetOption />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
