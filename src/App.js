import React from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <Header />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </div>
  );
}

export default App;
