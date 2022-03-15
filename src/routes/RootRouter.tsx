import Main from 'pages/Main';
import SetOptionStepOne from 'pages/SetOptionStepOne';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/option" element={<SetOptionStepOne />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
