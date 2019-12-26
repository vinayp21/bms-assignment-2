import React, { Component, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { updateList } from '../../actions/bmsAction';
import './Header.scss';
import {context} from '../../context'

const Header = () => {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		selectedLanguage: [{ label: 'Language', value: 'Language' }],
	// 		selectedGenre: [{ label: 'Genre', value: 'Genre' }]
	// 	};
	// }
	const [selectedLanguage, setSelectedLanguage] = useState([{ label: 'Language', value: 'Language' }])
	const [selectedGenre, setSelectedGenre] = useState([{ label: 'Genre', value: 'Genre' }])
	const { state:{ data, genre }, contextDispatch } = useContext(context);

	// useEffect(() => {
	// 	contextDispatch(updateList(data, selectedLanguage, selectedGenre));
	// },[selectedLanguage])

	const getDropdownOptions = data => {
		const options = data.map(lang => {
			return {
				label: lang,
				value: lang
			};
		});
		return options;
	};

	const selectLanguage = selectedData => {
		// const { dispatch } = this.props;
		let langData = [];
		langData = selectedData.filter(lang => lang.label !== 'Language');
		if (selectedData.length === 0) {
			langData = [{ label: 'Language', value: 'Language' }];
		}
		// this.setState(
		// 	{
		// 		selectedLanguage: [...data]
		// 	},
		// 	() => {
		// 		const { selectedLanguage, selectedGenre } = this.state;
		// 		dispatch(updateList(selectedLanguage, selectedGenre));
		// 	}
		// );
		setSelectedLanguage([...langData]);
		contextDispatch(updateList(data, [...langData], selectedGenre));

	};

	const selectGenre = selectedData => {
		// const { dispatch } = this.props;
		let genreData = [];
		genreData = selectedData.filter(lang => lang.label !== 'Genre');
		if (selectedData.length === 0) {
			genreData = [{ label: 'Genre', value: 'Genre' }];
		}
		// this.setState(
		// 	{
		// 		selectedGenre: [...data]
		// 	},
		// 	() => {
		// 		const { selectedGenre, selectedLanguage } = this.state;
		// 		dispatch(updateList(selectedLanguage, selectedGenre));
		// 	}
		// );
		setSelectedGenre([...genreData]);
		contextDispatch(updateList(data,selectedLanguage, [...genreData]));
		
	};

	const getAllFilters = (selectedLanguage, selectedGenre) => {
		const genreList = selectedLanguage.filter(lang => lang.label !== 'Language');
		const langList = selectedGenre.filter(lang => lang.label !== 'Genre');
		return [...genreList, ...langList];
	};

	const removeFilter = filter => {
		
		let filterLangData = selectedLanguage.filter(lang => lang.label !== filter.label);
		let filterGenreData = selectedGenre.filter(lang => lang.label !== filter.label);
		if (filterLangData.length === 0) {
			filterLangData = [{ label: 'Language', value: 'Language' }];
		}
		if (filterGenreData.length === 0) {
			filterGenreData = [{ label: 'Genre', value: 'Genre' }];
		}
		
		setSelectedGenre(filterGenreData);
		setSelectedLanguage(filterLangData);
		contextDispatch(updateList(data, filterLangData, filterGenreData));
	};

		const laguageOptions = Object.keys(data).length > 0 ? getDropdownOptions(data[0]) : [];
		const genreOptions = Object.keys(data).length > 0 ? getDropdownOptions(genre) : [];
		const allFilters = getAllFilters(selectedLanguage, selectedGenre);
		return (
			<header className="Header">
				<nav className="navbar navbar-expand-lg navbar-light">
					<Link className="navbar-brand " to="/">
						BMS Trailers
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#1navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto" />
						<ul className="navbar-nav">
							<li className="nav-item">
								<ReactMultiSelectCheckboxes
									options={laguageOptions}
									value={selectedLanguage}
									onChange={selectLanguage}
								/>
							</li>
							<li className="nav-item">
								<ReactMultiSelectCheckboxes
									options={genreOptions}
									value={selectedGenre}
									onChange={selectGenre}
								/>
							</li>
						</ul>
					</div>
				</nav>
				{allFilters.length > 0 && (
					<div className="filters">
						{allFilters.map(filter => (
							<span key={filter.label}>
								{filter.label}{' '}
								<button
									type="button"
									className="remove-filter"
									onClick={() => removeFilter(filter)}
								>
									X
								</button>
							</span>
						))}
					</div>
				)}
			</header>
		);
	}
// }
const mapStateToProps = state => {
	return {
		eventData: state.bms
	};
};

Header.propTypes = {
	eventData: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Header);
