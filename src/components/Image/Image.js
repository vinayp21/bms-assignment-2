import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Image extends Component {
	constructor(props) {
		super(props);
		this.imgRef = React.createRef();
	}

	componentDidMount() {
		const { imageCode } = this.props;
		this.observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const { isIntersecting } = entry;
				if (isIntersecting) {
					this.imgRef.current.src = `https://in.bmscdn.com/events/moviecard/${imageCode}.jpg`;
					this.observer = this.observer.disconnect();
				}
			});
		});
		this.observer.observe(this.imgRef.current);
	}

	render() {
		return <img ref={this.imgRef} alt="movie" />;
	}
}

Image.propTypes = {
	imageCode: Proptypes.string.isRequired
};

export default Image;
