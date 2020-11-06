import './App.css';
import Doctors from './Doctors';
import Appts from './Appts';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Welcome to Ryan's ZocDoc!</p>
				<Doctors />
				<Appts />
			</header>
		</div>
	);
}

export default App;
