import React, {Component} from 'react';
import Style from 'style-it';
import './App.css';

class App extends Component {
  render() {
    return (
      Style.it(this.props.style,
        <div className="box">xxxx</div>
      )
    );
  }
}

export default App;
