import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Doctors from './Doctors';
import Appts from './Appts';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<p>Welcome to Ryan's ZocDoc!</p>
					<Link to="/docs">Browse Docs</Link>
					<Link to="/appts">Your Appointments</Link>
				</header>
				<Route path="/docs" component={Doctors} />
				<Route path="/appts" component={Appts} />
			</div>
		</Router>
	);
}

export default App;
