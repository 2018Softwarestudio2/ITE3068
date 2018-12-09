import React from 'react';

import './style/logview.css';

class Viewer extends React.Component{
	constructor(props){
		super(props);
		this.state = {

			
		};
	}
	logset(){

	}

	render(){
		return(
			<div class = "logbox">
				<table class = 'logtable'  cellspacing='0'>
					<tr><th width = '100'>Type</th><th width = '100'>Factor</th><th width = '350'>Description</th></tr>
					<tr><td>Warning</td><td>CPU Usage</td><td>>= 70%</td></tr>
			

				</table>
			</div>
		);
	}
}

export default Viewer;