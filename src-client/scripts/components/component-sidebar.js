import React from 'react'

let sidebarStyle={
	position: 'fixed', 
	right:0, top: 0, 
	height: '100%', 
	background: '#E74C3C',
	padding: 0
}
let barStyle = {
	padding: '12px',
	background: '#ddd',
	border: '1x solid #333'
}

export const Sidebar = React.createClass({
	render: function(){
		return <div style={sidebarStyle}>
			<ul style={{listStyleType: 'none', padding: 0}}>
				<li style={barStyle} data-route="HOME">Home</li>
				<li style={barStyle} data-route="THREAD">About</li>
				<li style={barStyle} data-route="THREAD">Login</li>
			</ul>
		</div>
	}
	
})