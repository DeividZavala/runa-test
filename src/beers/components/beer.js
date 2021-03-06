import React from 'react';
import {Link} from "react-router-dom";

const Beer = ({image_url, name, description, id}) => (
	<div>
		<div className="uk-card uk-card-default">
			<div className="uk-card-media-top">
				<img style={{width: image_url === "https://images.punkapi.com/v2/keg.png" ? "50%" : "20%"}} src={image_url} alt="" />
			</div>
			<div className="uk-card-body">
				<h3 className="uk-card-title">{name}</h3>
				<p className="uk-text-truncate">{description}</p>
			</div>
			<div className="uk-card-footer">
				<Link to={`/${id}`} className="uk-button uk-button-primary">Más información</Link>
			</div>
		</div>
	</div>
);

export default Beer;
