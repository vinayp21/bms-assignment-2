import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
// import { store, history } from './store';
import { ContextProvider } from './context';

const App = () => {
	return (
		<ContextProvider>
			<div>
				<Home />
			</div>
		</ContextProvider>
	);
};

const routes = (
	<BrowserRouter >
		<Switch>
			<Route exact path="/" component={App} />
		</Switch>
	</BrowserRouter>
);
export default routes;

ReactDOM.render(routes, document.getElementById('root'));
