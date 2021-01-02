import React from 'react';
import Cats from './Cats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Cats />
      </div>
    )
  }
}

export default App;