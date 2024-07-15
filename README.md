# Sunbase Task
# Customer Management System
  This project is a Customer Management System that provides a web interface to manage customer data. The backend is built with Spring Boot and uses a MySQL database, while the frontend is created with React. The system supports JWT authentication for secure access
  
## Project Description

The Customer Management System allows users to create, update, delete, and view customer information. It includes a login screen for authentication, a customer list screen with pagination, sorting, and searching, and a form to add new customers.

## Installation

  JDK 11 or later
- Node.js and npm
- MySQL
- Maven
### Backend Setup
    create  spring stater project
    add project name and pacakge
    eg. Name Sb1 - packege-com.demo
    
  ## Add Dependency
   1.Spring Boot DevTools
   2.MySQL Driver
   3.SpringData JPA

  ## Creating All pacakge com.demo
   .com.demo
     eg.package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

}

   
      com.demo.dao
      com.demo.service
      com.demo.controller
  
  ## Adding Database And server
  ## application.properties
  eg.spring.application.name=sb1

#server properties

server.port=8080


#database properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/datbase-name
spring.datasource.username=root
spring.datasource.password=root

#hibernate properties
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.hbm2ddl.auto=update
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.forma

      
  ## API Cheking
     PostMan App or any other

## Build and run the backend:
     mvn spring-boot:run

  

      
   
