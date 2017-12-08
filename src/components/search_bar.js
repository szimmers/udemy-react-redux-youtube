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
	render() {
		return <input />;
	}
}

export default SearchBar;