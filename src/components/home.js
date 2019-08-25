import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPageData } from '../actions/bmsAction';
import Card from './Card/Card';
import EventDetails from './EventDetails/EventDetails';
import Header from './Header/Header';

import './Home.scss';

const mapStateToProps = state => {
	return {
		eventData: state.bms
	};
};

class Home extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getPageData());
	}

	render() {
		const {
			eventData: { data, filteredList },
			dispatch
		} = this.props;
		const list = filteredList && filteredList.length > 0 ? filteredList : data;
		const eventObj = list[1];
		const eventKeys = list.length > 0 && Object.keys(list[1]);
		return (
			<div className="home">
				<Header />
				<div className="container card-section">
					<div className="row">
						{eventKeys &&
							eventKeys.map((key, index) => {
								const isRowEnd = (index + 1) % 4 === 0;

								return (
									<Fragment>
										<div
											key={key}
											className="col-md-3 col-sm-6 col-12 card-item"
										>
											<Card
												dispatch={dispatch}
												data={eventObj[key]}
												selectedId={index + 1}
											/>
										</div>
										{isRowEnd && (
											<div className="col-md-12 video-space">
												<EventDetails rowIndex={index + 1} />
											</div>
										)}
									</Fragment>
								);
							})}
					</div>
				</div>
				{!eventKeys && (
					<div className="loader text-center d-flex align-items-center justify-content-center">
						<img
							src="https://media.giphy.com/media/uyCJt0OOhJBiE/giphy.gif"
							alt=""
							width="150"
							height="150"
						/>
					</div>
				)}
			</div>
		);
	}
}

Home.propTypes = {
	eventData: PropTypes.arrayOf(PropTypes.object).isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Home);
