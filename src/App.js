import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Form from './components/form/form';

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
          <Header className="page__header"/>
          <Form className="page__form" />
      </div>
    </div>
  );
}

export default App;
