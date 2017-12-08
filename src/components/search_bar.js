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
	handleInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		//return <input onChange={this.handleInputChange} />;
		return <input onChange={event => console.log(event.target.value)} />;
	}
}

export default SearchBar;