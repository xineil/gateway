var task = new Ext.util.DelayedTask(function() {
	Ext.getBody().unmask();
});
Ext.application({
	name : 'Gway',
	appFolder : 'app',
	splashscreen : {},

	init : function() {
		splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
		splashscreen.addCls('splashscreen');
		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
			cls : 'x-splash-icon'
		});
		splashscreen.fadeOut({
			duration : 3000,
			remove : true
		});
		splashscreen.next().fadeOut({
			duration : 3000,
			remove : true
		});
		
	},

	launch : function() {
		task.delay(5000);
		console.log("this is the console log")
	}
});
