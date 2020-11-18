import './App.css';
import Layout from './AdminComponent/Layout/Layout';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';
import AdminLogin from './AdminComponent/AdminLogin/AdminLogin';
import Login from './Login/Login/Login';
import DetailsPage from './HomePageComponent/DetailsPage/DetailsPage';
import Home from './HomePageComponent/Home/Home';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({})
	return (
		<div className="">
			<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
				<BrowserRouter>
					<Switch>
						
						<Route path='/admin'><Layout /> </Route>
						<Route path='/adminLogin'> <AdminLogin /> </Route>
						<Route exact path='/'> <Home /> </Route>
						<Route path='/home'> <Home /> </Route>
						<PrivateRoute path="/details/:detailsId/:detailTitle/:detailPrice"> <DetailsPage /> </PrivateRoute>
						<Route path="/login"> <Login /> </Route>
						<Route path='*'> <h4> 404 error </h4> </Route>

					</Switch>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
