import React, { Component } from 'react';
import Router from './Router';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
				<Router/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
