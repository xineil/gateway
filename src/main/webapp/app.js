var task = new Ext.util.DelayedTask(function() {
			Ext.getBody().unmask();
		});
Ext.application({
			name : 'Gway',
			appFolder : 'app',
			splashscreen : {},

			init : function() {
				splashscreen = Ext.getBody().mask('Loading application',
						'splashscreen')
			},

			launch : function() {
				task.delay(1000);
				console.log("thiis is the console log")
			}
		});
