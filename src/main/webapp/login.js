Ext.application({
			requires : 'Ext.container.Viewport',
			name : 'AM',

			appFolder : 'app',

			controllers : ['Login'],

			launch : function() {
				Ext.create('Ext.container.Viewport', {
							layout : {
								type : 'vbox',
								align : 'center',
								pack : 'center'
							},
							items : [{
										xtype : 'userlogin'
									}]
						});
			}
		});