import React from 'react';

import '../public/style/header.css';

class Header extends React.Component{
	
	render(){
		return(
			<div class="header">
				<div id="title_board">
					<div id = "content">Service Monitoring</div>
					<div id = "address">Server IP : {this.props.ip}</div>
				</div>
					
			</div>
		);
	}
}


export default Header;
