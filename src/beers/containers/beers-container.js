import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchBeers} from '../../redux/ducks/beers';
import Beer from "../components/beer";

class BearsContainer extends Component{

	componentWillMount() {
		this.props.fetchBeers()
	}

	render(){
		const {data:beers, status, messages} = this.props.beers;
		return(
			<div className="uk-section">
				<div className="uk-container">
					{status === "pending" &&
						<div className="uk-width-1-1@m">
							<div><span className="uk-margin-small-right" uk-spinner="ratio: 3"></span></div>
							<p>Cargando cervezas...</p>
						</div>
					}
					{status === "success" &&
					<div className="uk-grid-small uk-grid-match uk-child-width-1-4@m uk-child-width-1-1@s" uk-grid="true">
						{beers.map((beer, index) => <Beer {...beer} key={index}/>)}
					</div>}

					{(status === "success" && beers.length === 0) &&
					<div className="uk-alert-primary" uk-alert="true">
						<h3>0 resultados</h3>
						<p>Prueba con el nombre de otra chela</p>
					</div>}

					{status === "failure" &&
					<div className="uk-alert-danger" uk-alert="true">
						<h3>Opps!!</h3>
						<p>{messages[0].text}</p>
					</div>}

				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {fetchBeers})(BearsContainer);
