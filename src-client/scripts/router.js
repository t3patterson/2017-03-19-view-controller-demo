import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},
	
	routes: {
		'login' : 'goToLogin',
		'' : 'goToHome'
	},

	goToLogin: function(){
		ACTIONS.setView('LOGIN')
	},
	
	goToHome: function(){
		ACTIONS.setView('HOME')
	}
	
})
