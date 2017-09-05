import React from 'react';
import { Output } from './output.jsx';

export class Input extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      numbers: [],
      output: this.props.output,
      mode: this.props.bot
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.display = this.display.bind(this);
  }

  handleChange(event) {
    this.setState({value:event.target.value});
  }

  componentWillReceiveProps(nextprops){
    this.state.mode = nextprops.bot;
    this.state.output = [];
    this.setState({value: parseInt(this.state.value)});
    console.log(this.state.mode,this.state.output);
  }



  handleSubmit(event) {
    event.preventDefault();
    this.state.numbers.push(parseInt(this.state.value));
    this.state.output.push([parseInt(this.state.value),1]);
    this.setState({value: parseInt(this.state.value)});
    if (this.state.numbers.length == 2){
      if(this.state.mode == 0){
        this.display(this.state.numbers[0]+this.state.numbers[1]);
      }
      if(this.state.mode == 1){
        this.display(this.state.numbers[0]*this.state.numbers[1]);
      }
      if(this.state.mode == 2){
        this.display(this.state.numbers[0]-this.state.numbers[1]);
      }
    }

  }

  display(res){
    this.state.result = res;
    this.state.numbers = [];
    this.state.output.push([parseInt(this.state.result),0]);
  }

  render(){
    return(
      <div>
        <div className="row output" id="out">
          {
            this.state.output.map((i,index) =>
              <Output droid={i[1]} message={i[0]} key={index.toString()}/>
            )
          }
        </div>
        <div className="row input">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="inputform">
              <input type="number" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.value} id="input"></input>
              <button >Send</button>
            </div>

          </form>
        </div>
    </div>
    );
  }
}
