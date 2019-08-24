import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { store, history } from './store';

const App = () => {
	return (
		<div>
			<Home />
		</div>
	);
};

const routes = (
	<ConnectedRouter history={history}>
		<Switch>
			<Route exact path="/" component={App} />
		</Switch>
	</ConnectedRouter>
);
export default routes;

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
