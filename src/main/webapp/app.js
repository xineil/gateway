Ext.application({
	name : 'Gway',
	appFolder : 'app',
	splashscreen : {},
	controllers : ['Login'],

	init : function() {
		splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
	},

	launch : function() {
		var task = new Ext.util.DelayedTask(function() {
			splashscreen.fadeOut({
				duration : 1,
				remove : true
			});
			splashscreen.next().fadeOut({
				duration : 1,
				remove : true,
				listeners : {
					afteranimate : function(el, startTime, eOptes) {
						Ext.widget('login');
					}
				}
			});
		});
		task.delay(0);
	}
});
