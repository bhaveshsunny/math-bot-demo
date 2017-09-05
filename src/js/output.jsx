import React from 'react';

export class Output extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      droid: this.props.droid,
      text: this.props.message
  };
}



  render(){
    return(
      <div className={this.state.droid == 0 ? 'message bot-bubble' : 'message human-bubble'}>{this.state.text}</div>
    );
  }
}
