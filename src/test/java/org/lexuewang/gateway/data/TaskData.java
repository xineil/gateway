/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package org.lexuewang.gateway.data;

import org.lexuewang.gateway.entity.Task;
import org.lexuewang.gateway.entity.User;
import org.springside.modules.test.data.RandomData;

/**
 * Task相关实体测试数据生成.
 * 
 * @author calvin
 */
public class TaskData {

	public static Task randomTask() {
		Task task = new Task();
		task.setTitle(randomTitle());
		User user = new User(1L);
		task.setUser(user);
		return task;
	}

	public static String randomTitle() {
		return RandomData.randomName("Task");
	}
}
