Ext.define('AM.view.user.Login', {
			extend : 'Ext.form.Panel',
			alias : 'widget.userlogin',

			title : '登录',
			frame : true,
			width : 320,
			bodyPadding : 10,
			closable : true,
			defaultType : 'textfield',

			defaults : {
				anchor : '100%'
			},

			fieldDefaults : {
				labelAlign : 'right',
				labelWidth : 115,
				msgTarget : 'side'
			},

			items : [{
						allowBlank : false,
						fieldLabel : '用户',
						emptyText : 'user id',
						name : 'user'
					}, {
						allowBlank : false,
						fieldLabel : '密码',
						name : 'pass',
						emptyText : 'password',
						inputType : 'password'
					}, {
						xtype : 'checkbox',
						fieldLabel : '记住我',
						name : 'remember'
					}],

			buttons : [{
						text : '注册',
						name : 'register',
						action : 'register'
					}, {
						text : '登陆',
						name : 'login',
						action : 'login'
					}]
		});