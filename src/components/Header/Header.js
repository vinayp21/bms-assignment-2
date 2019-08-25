import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { updateList } from '../../actions/bmsAction';
import './Header.scss';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			selectedLanguage: [{ label: 'Language', value: 'Language' }],
			selectedGenre: [{ label: 'Genre', value: 'Genre' }]
		};
	}

	getDropdownOptions = data => {
		const options = data.map(lang => {
			return {
				label: lang,
				value: lang
			};
		});
		return options;
	};

	selectLanguage = selectedData => {
		const { dispatch } = this.props;
		let data = [];
		data = selectedData.filter(lang => lang.label !== 'Language');
		if (selectedData.length === 0) {
			data = [{ label: 'Language', value: 'Language' }];
		}
		this.setState(
			{
				selectedLanguage: [...data]
			},
			() => {
				const { selectedLanguage, selectedGenre } = this.state;
				dispatch(updateList(selectedLanguage, selectedGenre));
			}
		);
	};

	selectGenre = selectedData => {
		const { dispatch } = this.props;
		let data = [];
		data = selectedData.filter(lang => lang.label !== 'Genre');
		if (selectedData.length === 0) {
			data = [{ label: 'Genre', value: 'Genre' }];
		}
		this.setState(
			{
				selectedGenre: [...data]
			},
			() => {
				const { selectedGenre, selectedLanguage } = this.state;
				dispatch(updateList(selectedLanguage, selectedGenre));
			}
		);
	};

	getAllFilters = (selectedLanguage, selectedGenre) => {
		const genreList = selectedLanguage.filter(lang => lang.label !== 'Language');
		const langList = selectedGenre.filter(lang => lang.label !== 'Genre');
		return [...genreList, ...langList];
	};

	removeFilter = filter => {
		const { dispatch } = this.props;
		const { selectedLanguage, selectedGenre } = this.state;
		let filterLangData = selectedLanguage.filter(lang => lang.label !== filter.label);
		let filterGenreData = selectedGenre.filter(lang => lang.label !== filter.label);
		if (filterLangData.length === 0) {
			filterLangData = [{ label: 'Language', value: 'Language' }];
		}
		if (filterGenreData.length === 0) {
			filterGenreData = [{ label: 'Genre', value: 'Genre' }];
		}
		this.setState({
			selectedLanguage: filterLangData,
			selectedGenre: filterGenreData
		});
		dispatch(updateList(filterLangData, filterGenreData));
	};

	render() {
		const { selectedLanguage, selectedGenre } = this.state;
		const {
			eventData: { data, genre }
		} = this.props;
		const laguageOptions = Object.keys(data).length > 0 ? this.getDropdownOptions(data[0]) : [];
		const genreOptions = Object.keys(data).length > 0 ? this.getDropdownOptions(genre) : [];
		const allFilters = this.getAllFilters(selectedLanguage, selectedGenre);
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
									onChange={this.selectLanguage}
								/>
							</li>
							<li className="nav-item">
								<ReactMultiSelectCheckboxes
									options={genreOptions}
									value={selectedGenre}
									onChange={this.selectGenre}
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
									onClick={() => this.removeFilter(filter)}
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
}
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
