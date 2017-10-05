/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div>
        <div className='col-lg-6 col-lg-offset-3'>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter an Steam32 Id"
              onChange={this.handleChange}
            />
            <Button bsStyle="primary" bsSize="large" onClick={this.handleSubmit}>Primary button</Button>
          </FormGroup>
        </div>
      </div>
    );
  }

  handleSubmit(){
    alert("a");
  }
}
