import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getAppts } from '../redux';

function Appts({ appts, getAppts }) {
	useEffect(() => {
		getAppts();
	}, []);

	console.log('appts------>', appts);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Appt List</h1>
			</header>
		</div>
	);
}

const mapState = (state) => ({
	appts: state.appts
});

const mapDispatch = (dispatch) => ({
	getAppts: () => dispatch(getAppts())
});

export default connect(mapState, mapDispatch)(Appts);
