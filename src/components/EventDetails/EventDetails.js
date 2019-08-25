import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { closeSection } from '../../actions/bmsAction';
import { getMonth } from '../../utils';
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
const closeDetailsSection = dispatch => {
	dispatch(closeSection());
};

const getVideoId = url => {
	const urlArr = url.split('=');
	return urlArr[urlArr.length - 1];
};

const getAllGenre = () => {
	return ['horror', 'drama'];
};

const EventDetails = ({ selectedEvent, rowIndex, dispatch }) => {
	const validRow =
		selectedEvent &&
		Object.keys(selectedEvent).length > 0 &&
		rowIndex >= selectedEvent.id &&
		rowIndex - 4 < selectedEvent.id;

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
						onClick={() => closeDetailsSection(dispatch)}
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
const mapStateToProps = state => {
	return {
		selectedEvent: state.bms.selectedEvent
	};
};
EventDetails.propTypes = {
	selectedEvent: PropTypes.object.isRequired,
	rowIndex: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(EventDetails);
