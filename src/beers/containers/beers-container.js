import React, {Component} from 'react';
import {connect} from "react-redux";
import Beer from "../components/beer";

class BearsContainer extends Component{
	render(){
		const {data:beers, loading} = this.props.beers;
		return(
			<div className="uk-section">
				<div className="uk-container">
					{loading &&
						<div className="uk-width-1-1@m">
							<div><span className="uk-margin-small-right" uk-spinner="ratio: 3"></span></div>
							<p>Cargando cervezas...</p>
						</div>
					}
					{!loading &&
					<div className="uk-grid-small uk-grid-match uk-child-width-1-4@m" uk-grid="true">
						{beers.map((beer, index) => <Beer {...beer} key={index}/>)}
					</div>}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(BearsContainer);
