import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EventDetails = ({ selectedEvent, rowIndex }) => {
	const validRow =
		selectedEvent && rowIndex >= selectedEvent.id && rowIndex - 4 <= selectedEvent.id;
	if (validRow) {
		return <div className="details">{selectedEvent.EventTitle}</div>;
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
	rowIndex: PropTypes.number.isRequired
};
export default connect(mapStateToProps)(EventDetails);
