import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

class Bootcamp extends React.Component {
  render() {
    return <h1>This is my first react website</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bootcamp/>);

export default App;
