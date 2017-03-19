import React from 'react'
import {AppRouter} from './router.js'
import {ACTIONS} from './actions.js'
import {STORE} from './store.js'
import {Sidebar} from './components/component-sidebar.js'


export const ViewController = React.createClass({
	getInitialState: function(){
		return STORE.getStoreData()
	},

	componentWillMount: function(){
		STORE.onStoreChange(()=>{
			this.setState( STORE.getStoreData())
		})
		let router = new AppRouter()
	},

	render: function(){
		console.log(this.state.currentView)
		let componentToRender
		switch(this.state.currentView){
			case "LOGIN":
				componentToRender = <h1>LOGIN VIEW</h1>
				break;
			case "HOME":
				componentToRender = <h1>HOME VIEW</h1>
				break;
			default: 
				componentToRender = <h3 className="M-text_fail">Nothin found, bits</h3>
		}
			
		return (
			<div>
				<Sidebar/>
				{componentToRender}
			</div>
		)
	}
})