import React, {Component} from 'react';

// functional component
/*
const SearchBar = () => {
	return <input/>;
};
*/

// class-based component. can introspect, hold state, communicate w/ other components.
// render() required.
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	handleInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		//return <input onChange={this.handleInputChange} />;
		//return <input onChange={event => console.log(event.target.value)} />;

		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})}
				/>
			</div>
		);
	}
}

export default SearchBar;