import React from 'react';
import axios from 'axios';
import LineGraph from './chart/graph';
import Viewer from './logview';
import Arcgraph from './chart/arcgraph';
import Diskcapa from './chart/disk'
import Particle from './chart/particle';
import './style/board.css';

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		
		};
	}
	datasync(){

	}
	renderchart(comment){
		return(
	
				<LineGraph comment = {comment}/>
			
		);
	}

	render(){
		return(
			<div class="board">
				<div class = "leftside">
					{this.renderchart("Active Service")}
					{this.renderchart("Response Time")}
					{this.renderchart("Temperature")}
				</div>
				<div class = "center">
					<Particle/>
					<Arcgraph count = {this.state.servicecount}/>
					<Diskcapa />
					<Viewer />
					
				</div>
				<div class = "rightside">
					{this.renderchart("SQL Connection")}
					{this.renderchart("TPS")}
					{this.renderchart("Memory Usage")}
					
				</div>
			</div>
		);
	}
}


export default Board;