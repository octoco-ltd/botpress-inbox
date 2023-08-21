import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Toaster } from 'react-hot-toast';
import './styles/tailwind-input.css';

export default function App() {
	const [authenticated, setAuthenticated] = useState(false);

	return (
	    <BrowserRouter>
	      <Routes>
	        <Route
	          path="/"
	          element={authenticated ? <Navigate to="/dashboard" /> : <Login setAuthenticated={setAuthenticated} />}
	        />
	        <Route
	          path="/dashboard"
	          element={authenticated ? <Dashboard /> : <Navigate to="/" />}
	        />
	      </Routes>
	      <Toaster />
	    </BrowserRouter>
	);
}
