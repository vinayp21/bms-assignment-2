import React from 'react';
import PropTypes from 'prop-types';
import { setSelectedEvent } from '../../actions/bmsAction';
import './Card.scss';

const selectEvent = (data, disptach, selectedId) => {
	disptach(setSelectedEvent(data, selectedId));
};

const Card = ({ data, dispatch, selectedId }) => {
	return (
		<div className="card">
			<img
				src={`https://in.bmscdn.com/events/moviecard/${data.EventImageCode}.jpg`}
				alt="movie"
				onClick={() => selectEvent(data, dispatch, selectedId)}
			/>
			<div className="event-details">
				<div>
					<div className="title">{data.EventTitle}</div>
					<div className="language">
						<span>U</span>
						<span>|</span>
						<span>{data.EventLanguage}</span>
					</div>
				</div>
				<div className="rating">
					<span className="fas fa-heart fav" />
					<span>
						<b>{data.wtsPerc}%</b>
					</span>
				</div>
			</div>
			<div className="votes" />
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	selectedId: PropTypes.number.isRequired
};

export default Card;
