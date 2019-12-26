import React, { Component, Fragment, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import PropTypes from 'prop-types';
import { getPageData } from '../actions/bmsAction';
import Card from './Card/Card';
import EventDetails from './EventDetails/EventDetails';
import Header from './Header/Header';
import { screen } from '../utils';
import Test from './test'
import './Home.scss';
import {context} from '../context'

const Home = () => {
	const { state:{ data, filteredList }, contextDispatch } = useContext(context);
	
	useEffect(() => {
		const getAllGenres = list => {
			const keys = Object.keys(list);
			const uniqueGenre = [];
			keys.forEach(eventKey => {
				const genreArr = list[eventKey].EventGenre.split('|');
				genreArr.forEach(genre => {
					if (uniqueGenre.indexOf(genre) === -1) {
						uniqueGenre.push(genre);
					}
				});
			});
			return uniqueGenre;
		};
		axios.get('http://localhost:3001/getAllEvents').then(response => {
                const data = JSON.parse(response.data);
                const uniqueGenre = getAllGenres(data[1]);
                    contextDispatch(getPageData(data, uniqueGenre))
            });
	},[])
	
	const getModValue = size => {
		let value = 0;
		if (size === 'large') {
			value = 4;
		} else if (size === 'medium') {
			value = 2;
		} else {
			value = 1;
		}
		return value;
	};
		const list = filteredList && filteredList.length > 0 ? filteredList : data;
		const eventObj = list[1];
		const eventKeys = list.length > 0 && Object.keys(list[1]);
		const modValue = getModValue(screen());
		
		return (
			<div className="home">
				<Header />
				<div className="container card-section">
					{/* <Test/> */}
					<div className="row">
						{eventKeys &&
							eventKeys.map((key, index) => {
								const isRowEnd = (index + 1) % modValue === 0;

								return (
									<Fragment key={key}>
										<div
											key={key}
											className="col-md-3 col-sm-6 col-12 card-item"
										>
											<Card
												dispatch={contextDispatch}
												data={eventObj[key]}
												selectedId={index + 1}
											/>
										</div>
										{isRowEnd && (
											<div className="col-md-12 video-space">
												<EventDetails
													rowIndex={index + 1}
													modValue={modValue}
												/>
											</div>
										)}
									</Fragment>
								);
							})}
						{eventKeys && (
							<div className="col-md-12 video-space">
								<EventDetails
									lastRow
									rowIndex={eventKeys.length}
									modValue={modValue}
								/>
							</div>
						)}
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

Home.propTypes = {
	eventData: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default Home;
