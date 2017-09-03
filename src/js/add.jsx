import React from 'react';

export class MBroot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCall(this.state.value.split("\n"));

  }

  render(){
    return(
      <div className="container">
        <div className="col-lg-3 bots">
        </div>
        <div className="col-lg-9 human">
          <div className="row output"></div>
          <div className="row input">

          </div>
        </div>
      </div>
    );
  }
}
