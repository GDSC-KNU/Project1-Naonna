import Main from 'pages/Main';
import SetOptionStepOne from 'pages/SetOptionStepOne';
import OptionResult from 'pages/OptionResult';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/option" element={<SetOptionStepOne />} />
        <Route path="/result" element = {<OptionResult/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
