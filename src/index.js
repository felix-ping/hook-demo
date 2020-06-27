import React from 'react';
import ReactDOM from 'react-dom';
// import Game from './chess/game.js'
// import Counter from './clock'
import Calculator from './Calculator/Calculator.js'
/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Example from './counter.js';
import Example2 from './useStateDemo.js';
import Example3 from './useEffectDemo.js';

import ProfilePageFunction from './function';
import ProfilePageClass from './class';

class Bpp extends React.Component {
  state = {
    user: 'Dan',
  };
  render() {
    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunction user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClass user={this.state.user} />
          <b> (class)</b>
        </p>
        <p>
          Can you spot the difference in the behavior?
        </p>
      </>
    )
  }
} */


const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator/>, rootElement);


/* ReactDOM.render(
  <React.StrictMode>
    <Example />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); */
