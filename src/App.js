import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './components/AccountMenu';
import BasicForm from './components/BasicForm'
import { Main } from './pages/main';
import { Todo } from './pages/todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import rootReducer from './redux/reducers';


export default () =>{
	return(
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Main/>}></Route>
				<Route path="/todo" element={<Todo/>}></Route>
			</Routes>
		</BrowserRouter>

	)
}