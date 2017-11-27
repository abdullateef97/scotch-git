import React, { Component } from 'react';
import {connect} from 'react-redux';
let actions = require('../actions/index')

export  class App extends Component {
  componentWillMount(){
    this.props.fetchDev();
  }

  renderDev(dev){
    return (
      <div className="dev-card">
     <h4 className="dev-title">  <a href={dev.html_url} target="_blank"> {dev.login}</a></h4>
  </div> 
    )

  }
  render() {
    let {devs} = this.props
    if(devs.isFetching == true){
      return <p>Loading</p>
    }
    else if(devs.isFetching == false && devs.devsArray.length >= 1){
      return(
        <div>
        <div className="dev-list">
        {devs.devsArray.map(this.renderDev)}
    </div>
    </div>
    )
    }
    else{
      return(
      <p>I dont know oooo</p>
      )
    }
  }
}



  export default connect(
    (state)=>{
        return state
    },actions)(App)
