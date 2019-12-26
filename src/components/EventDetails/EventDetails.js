import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { closeSection } from '../../actions/bmsAction';
import { getMonth } from '../../utils';
import {context} from '../../context'
import './EventDetails.scss';

const opts = {
	height: '490',
	width: '100%',
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 1
	}
};
// const onReady = event => {
// 	// access to player in all event handlers via event.target
// 	event.target.pauseVideo();
// };

const EventDetails = ({ rowIndex, dispatch, modValue, lastRow }) => {

	const { state:{ selectedEvent }, contextDispatch } = useContext(context);

	const closeDetailsSection = () => {
		contextDispatch(closeSection());
	};

	const getVideoId = url => {
		const urlArr = url.split('=');
		if (urlArr.length > 1) {
			return urlArr[1].split('&')[0];
		}
		return urlArr[urlArr.length - 1];
	};
	
	const getAllGenre = () => {
		return ['horror', 'drama'];
	};

	const validRow =
		(selectedEvent &&
			Object.keys(selectedEvent).length > 0 &&
			rowIndex >= selectedEvent.id &&
			rowIndex - modValue < selectedEvent.id) ||
		(selectedEvent && rowIndex - selectedEvent.id < modValue && lastRow);

	if (validRow) {
		const id = getVideoId(selectedEvent.TrailerURL);
		return (
			<div className="details row">
				<div className="col-md-8 video-section">
					<YouTube videoId={id} opts={opts} />
				</div>
				<div className="col-md-4 video-details">
					<button
						className="close"
						type="button"
						onClick={closeDetailsSection}
					>
						X
					</button>
					<div className="title">
						<b>{selectedEvent.EventTitle}</b>
					</div>
					<div className="language">{selectedEvent.EventLanguage}</div>
					{getAllGenre().map(genre => (
						<span className="genre">{genre}</span>
					))}
					<div className="d-flex flex-row">
						<div className="d-flex flex-row stats">
							<span className="far fa-thumbs-up like" />
							<div className="perct d-flex flex-column">
								<span>{selectedEvent.wtsPerc}%</span>
								<span>{selectedEvent.wtsCount} votes</span>
							</div>
						</div>
						<div className="d-flex flex-row date">
							<span className="far fa-calendar-alt calendar" />
							<div className="trailer-date d-flex flex-column">
								<span>
									{`${new Date(selectedEvent.trailerUploadDate).getDate()}
									${getMonth(new Date(selectedEvent.trailerUploadDate).getMonth())}`}
								</span>
								<span>
									{new Date(selectedEvent.trailerUploadDate).getFullYear()}{' '}
								</span>
							</div>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-around interest">
						<div className="d-flex flex-column">
							<span className="far fa-thumbs-up yes" />
							<div className="count">{selectedEvent.wtsCount}</div>
						</div>

						<div className="d-flex flex-column">
							<span className="fas fa-question may-be" />
							<div className="count">{selectedEvent.maybeCount}</div>
						</div>

						<div className="d-flex flex-column">
							<span className="far fa-thumbs-down no" />
							<div className="count">{selectedEvent.dwtsCount}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return null;
};

EventDetails.propTypes = {
	selectedEvent: PropTypes.object,
	rowIndex: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
	modValue: PropTypes.number.isRequired,
	lastRow: PropTypes.bool
};
export default EventDetails;
