import React from 'react'
import {AppRouter} from './router.js'
import {ACTIONS} from './actions.js'
import {STORE} from './store.js'


export const ViewController = React.createClass({

	getInitialState: function(){
		let stateObj = {
			currentView: "HOME"
		}
		return stateObj
	},
	
	render: function(){
		let currentView = this.state.currentView
		let componentToRender

		switch(currentView){
			case "HOME":
				componentToRender = <h1 className="M-bg_success"> The Home Page</h1>
				break;
			case "LOGIN": 
				componentToRender =  <h1 className="M-bg_info">Login</h1>
				break;
			default: 
				componentToRender = <h1 className="M-bg_fail">Nothing found!</h1>
		}

		return (
			<div>
				{componentToRender}
			</div>
		)
		
	}
})
