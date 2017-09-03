import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootswatch/flatly/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

const mountmbc = $('#MBroot').get(0);

export class MBroot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bot: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(i,event) {
    var self = this;
    self.setState(prevState => ({
      bot: i
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCall(this.state.value.split("\n"));

  }

  render(){
    return(
      <div className="container">
        <div className="col-lg-3 bots">
          <div className="add"> <button onClick={this.handleClick.bind(this,0)} className={this.state.bot == 0 ? 'btn btn-success' : 'btn'}>ADD</button></div>
          <div className="multipy"><button onClick={this.handleClick.bind(this,1)} className={this.state.bot == 1 ? 'btn btn-success' : 'btn'}>MULTIPLY</button></div>
          <div className="subtract"><button onClick={this.handleClick.bind(this,2)} className={this.state.bot == 2 ? 'btn btn-success' : 'btn'}>SUBTRACT</button></div>
        </div>
        <div className="col-lg-9 human">
          <div className="row output">
            <div className="message bot-bubble">Hello Human!</div>
            <div className="message human-bubble">Hello bot!</div>
          </div>
          <div className="row input">

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MBroot/>, mountmbc);
