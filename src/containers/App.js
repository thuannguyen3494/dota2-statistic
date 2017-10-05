/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */

import React from 'react';

import Header from '../layouts/Header';
import Home from './Home/Home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any,
};
