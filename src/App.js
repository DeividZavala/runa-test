import React, { Component } from 'react';
import Router from './Router';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">

				<nav className="uk-navbar-container" uk-navbar="true">
					<div className="uk-navbar-left">

						<ul className="uk-navbar-nav">
							<li className="uk-active"><a href="#">Active</a></li>
							<li><a href="#">Item</a></li>
						</ul>

					</div>
				</nav>

				<Router/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
