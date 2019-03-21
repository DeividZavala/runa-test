import React, { Component } from 'react';
import Router from './Router';
import {fetchBeers, searchBeer, fetchBeer} from './redux/ducks/beers';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import './App.css';

class App extends Component {

	handleChange = e => {
		let input = e.target.value;
		if(input === "") return this.props.fetchBeers();
		this.props.searchBeer(input)
	};

	randomBeer = (e) => {
		e.preventDefault();
		let random = Math.floor(Math.random() * 325) + 1;
		this.props.fetchBeer(random);
		this.props.history.push(`/${random}`)
	};

  render() {
    return (
      <div className="App">

				<nav className="uk-navbar-container uk-padding uk-padding-remove-top uk-padding-remove-bottom" uk-navbar="true">
					<div className="uk-navbar-left">

						<ul className="uk-navbar-nav">
							<li className="uk-active"><Link to="/">Home</Link></li>
							<li onClick={this.randomBeer}><a href="">Cerveza Random</a></li>
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

const WithRouter = withRouter(App);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {fetchBeers, searchBeer, fetchBeer})(WithRouter);
