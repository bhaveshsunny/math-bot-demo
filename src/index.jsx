import _ from 'lodash';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootswatch/flatly/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import { Input } from './js/input.jsx';

const mountmbc = $('#MBroot').get(0);

export class MBroot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bot: 0,
      output:[]
    };
  }

  handleClick(i,event) {
    this.state.bot = i;
    this.setState({ bot: this.state.bot });
  }


  render(){
    console.log("yo");
    return(
      <div className="container">
        <div className="col-lg-3 bots">
          <div className="add bot"> <button onClick={this.handleClick.bind(this,0)} className={this.state.bot == 0 ? 'btn btn-success' : 'btn'}>ADD</button></div>
          <div className="multipy bot"><button onClick={this.handleClick.bind(this,1)} className={this.state.bot == 1 ? 'btn btn-success' : 'btn'}>MULTIPLY</button></div>
          <div className="subtract bot"><button onClick={this.handleClick.bind(this,2)} className={this.state.bot == 2 ? 'btn btn-success' : 'btn'}>SUBTRACT</button></div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 human">
          <Input bot={this.state.bot} output={this.state.output}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MBroot/>, mountmbc);
