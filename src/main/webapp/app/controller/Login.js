Ext.define('Gway.controller.Login',{
	extend : 'Ext.app.Controller',
	
	views :['Login'],
	
	init : function(appplication){
		this.control({
			"login form button#submit" : {
				click : this.onButtonClickSubmit
			},
			"login form button#cancel" : {
				click : this.onButtonClickCancel
			}
		})
	},
	
	onButtonClickSubmit : function(button, e, options){
		console.log('login submit');
	},
	
	onButtonClickCancel : function(button, e, options){
		console.log('login Cancel');
	}
})