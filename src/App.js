import React from 'react';
import Style from 'style-it';
import './App.css';

function App(props) {
  return (
    Style.it(`
      .box {
        background-color: indianred;
        width: 100px;
        height: 100px;
      }
    `,
      <div className="box"/>
    )
  );
}

export default App;
