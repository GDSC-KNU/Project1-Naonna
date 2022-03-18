import Main from 'pages/Main';
import Option from 'pages/Option';
import OptionResult from 'pages/OptionResult';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/option/*" element={<Option />} />\
        <Route path="/result" element={<OptionResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
