import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import Header from './header'
import './style/index.css';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ip : '127.0.0.1',
		};
	}

	render(){
		return(
			<div class="app">

				<Header ip = {this.state.ip}/>
				<Board />
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
