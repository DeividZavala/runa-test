import React, {Component} from 'react';
import BeerDetail from "../components/beer-detail";
import {fetchBeer} from '../../redux/ducks/beers';
import {connect} from "react-redux";

class BeerDetailContainer extends Component{

	componentWillMount() {
		let {id} = this.props.match.params;
		this.props.fetchBeer(id)
	}

	render(){
		const [beer] = this.props.beers.data;
		return (
			<div className="uk-section">
				<div className="uk-container">
					<BeerDetail {...beer}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {fetchBeer})(BeerDetailContainer);
