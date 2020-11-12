import React from 'react';
import Header from './component/Header';
import Trello from './pages/Trello';
import Main from './pages/Main';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/trello" exact component={Trello} />
    </>
  );
}

export default App;
