import './App.css';
import Layout from './AdminComponent/Layout/Layout';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';
import AdminLogin from './AdminComponent/AdminLogin/AdminLogin';

export const UserContext = createContext();

function App() {
	
	return (
		<div className="">
			<BrowserRouter>
				<Switch>

					<Route path='/admin'><Layout /> </Route>
					<Route path='/adminLogin'> <AdminLogin/> </Route>

					<Route path='*'> <h4> 404 error </h4> </Route>

				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
