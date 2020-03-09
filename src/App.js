import React, {Component} from 'react';
import Style from 'style-it';

class App extends Component {
  render() {
    return (
      Style.it(`
        ${this.props.style}
        .box {
          width: 100px;
          height: 100px;
        }
      `,
        <div className="box"/>
      )
    );
  }
}

export default App;
