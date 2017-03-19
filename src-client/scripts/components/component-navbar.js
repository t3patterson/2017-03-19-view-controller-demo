import React from 'react'

export const Sidebar = React.createClass({
	render: function(){
		return <div style={{position: fixed, right:0, top: 0, height: '100%'}}>
			<ul style={{listStyleType: 'none'}}>
				<li data-route="HOME">Home</li>
				<li data-route="THREAD">Login</li>
			</ul>
		</div>
	}
	
})