import React from 'react';

const BeerDetail = ({ph, brewers_tips, image_url = "", description = "", name = "", ingredients = {}}) => (
	<div className="uk-grid-match uk-child-width-1-2@m uk-child-width-1-1@m" uk-grid="true">
		<div>
			<div className="uk-height-large">
				<img className="uk-responsive-height" src={image_url} alt={name} />
			</div>
		</div>
		<div>
			<div className="uk-text-left">
				<h1 className="uk-heading-divider uk-text-uppercase">{name}</h1>
				<span className="uk-label uk-label-warning"><span className="uk-text-bold">PH: </span>{ph}</span>
				<p>
					<strong>Description: </strong>
					{description}
				</p>

				<h4 className="uk-heading-divider">Ingredients</h4>

				<div className="uk-grid uk-child-width-1-2@m" uk-grid="true">
					{Object.keys(ingredients).map((key, index) => (
						<div key={index}>
							<h4 className="uk-heading-bullet">{key}</h4>
							{ingredients[key] instanceof Array ?
								<ul className="uk-list uk-list-bullet">
								{ingredients[key].map((obj, i) => <li key={i}>{obj.name}</li>) }
							</ul> :
							<strong>{ingredients[key]}</strong>}
						</div>
					))}
				</div>

				<h4 className="uk-heading-divider">Consejo cervecero</h4>
				<p>
					{brewers_tips}
				</p>

			</div>
		</div>
	</div>
);

export  default BeerDetail;
