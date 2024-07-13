package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserRepository;
import com.demo.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User signUpUser(User user) {
		return userRepository.save(user);
	}
	public User signInUser(String userName, String password) {
		return userRepository.findByUserNameAndPassword(userName, password);
	}
}
