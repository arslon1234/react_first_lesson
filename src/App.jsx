import React, {Component} from "react";
export default class App extends Component{
  state={
    count:0,
    step: 1,
    users: [1,2,3,4]
  }
  addItem =()=>{
    let result = this.state.users
    let last_item = result[result.length - 1]
    result.push(last_item + 1)
    this.setState({
      users: result
    })
  }
  increaseCount =()=> {
    const {count,step} = this.state
    this.setState({
      count: count + step
    })
  }
  decreaseCount =()=> {
    const {count,step} = this.state
    this.setState({
      count: count - step
    })
  }
  increaseStep=()=>{
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }
  decreaseStep=()=>{
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }
  change =(index)=>{
    console.log(index)
  }
  render(){
    const {count, step, users} = this.state
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.increaseCount}>increase Count</button>
        <button onClick={this.decreaseCount}>decrease Count</button>
        <h2>Step: {step}</h2>
        <button onClick={this.increaseStep}>increase Step</button>
        <button onClick={this.decreaseStep}>decrease Step</button>
        <button onClick={this.addItem}>add array item</button>
        <h2>Array elements</h2>
        {
          users.map((item,index)=>{
            return <div>
            <button onClick={()=>this.change(index)}>+</button>
              <span>{item}</span>
              <button>-</button>
            </div>
          })
        }
      </div>
    )
  }
}
