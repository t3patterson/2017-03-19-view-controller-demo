import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start();
	},
	
	routes: {
		'login': 'routeToLogin',
		'' : 'routeToHome',
		'*nomatch': 'routeTo404'
	},

	routeToLogin: function(){
		ACTIONS.setView("LOGIN")
	},

	routeToHome: function(){
		ACTIONS.setView("HOME")
	},
	
	routeTo404: function(){
		ACTIONS.setView("404")
	}
})
