import { Provider } from 'react-redux';
import Router from './components/Router';
import store from './store';
import './styles/Globals.css';

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
