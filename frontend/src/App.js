import React from 'react';
import MainPage from './pages/MainPage';
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Route path="/" component={MainPage} />
    </div>
  )
}

export default App;