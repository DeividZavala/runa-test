import React, { Component } from 'react';
import Router from './Router';
import {fetchBeers, searchBeer} from './redux/ducks/beers';
import './App.css';
import {connect} from "react-redux";

class App extends Component {

	componentWillMount() {
		this.props.fetchBeers()
	}

	handleChange = e => {
		let input = e.target.value;
		//if(input === "") return this.props.fetchBeers();
		this.props.searchBeer(input)
	};

  render() {
    return (
      <div className="App">

				<nav className="uk-navbar-container uk-padding uk-padding-remove-top uk-padding-remove-bottom" uk-navbar="true">
					<div className="uk-navbar-left">

						<ul className="uk-navbar-nav">
							<li className="uk-active"><a href="#">Active</a></li>
							<li><a href="#">Item</a></li>
						</ul>

					</div>

					<div className="uk-navbar-right">

						<div>
							<span className="uk-navbar-toggle" uk-search-icon="true" uk-icon="icon: search"></span>
							<div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
								<form className="uk-search uk-search-navbar uk-width-1-1">
									<input
										className="uk-search-input"
										onChange={this.handleChange}
										type="search" placeholder="Search..."
										autoFocus={true} />
								</form>
							</div>
						</div>

					</div>

				</nav>

				<Router/>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {fetchBeers, searchBeer})(App);
