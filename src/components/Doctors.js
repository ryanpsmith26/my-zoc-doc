import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getDoctors } from '../redux';

function Doctors({ doctors, getDoctors }) {
	useEffect(() => {
		getDoctors();
	}, []);

	// console.log('docs------->', doctors);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Doctor List</h1>
				<ul>
					{/* fix key */}
					{doctors.map((doc, i) => (
						<li key={i}>
							{doc.firstName} {doc.lastName}
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

const mapState = (state) => ({
	doctors: state.doctors
});

const mapDispatch = (dispatch) => ({
	getDoctors: () => dispatch(getDoctors())
});

export default connect(mapState, mapDispatch)(Doctors);
