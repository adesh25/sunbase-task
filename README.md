# Sunbase Task
# Customer Management System
  This project is a Customer Management System that provides a web interface to manage customer data. The backend is built with Spring Boot and uses a MySQL database, while the frontend is created with React. The system supports JWT authentication for secure access
  
## Project Description

The Customer Management System allows users to create, update, delete, and view customer information. It includes a login screen for authentication, a customer list screen with pagination, sorting, and searching, and a form to add new customers.
## Project Structure
customer-management-system/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── com/example/customer/
│   │   │   │   │   ├── controller/
│   │   │   │   │   ├── model/
│   │   │   │   │   ├── repository/
│   │   │   │   │   ├── service/
│   │   │   │   │   └── CustomerManagementApplication.java
│   │   │   ├── resources/
│   │   │   │   └── application.properties
│   └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── CustomerList.js
│   │   │   ├── CustomerForm.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
└── README.md



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
     Postman Application
     or any other
     

## Build and run the backend:
     mvn spring-boot:run
     
## Frontend Setup
  1. Navigate to the frontend directory:
     cd ../frontend
  2.Install the dependencies and start the frontend server:
     npm install
     npm start
##   Usage
1. Open your browser and go to http://localhost:3000.
2.Log in using the credentials specified in the backend (default: test@sunbasedata.com / Test@123).
3.Use the interface to manage customers:
      Login Screen: Enter your credentials to log in.
      Customer List Screen: View, search, and sort the list of customers. Use the Sync button 
      to fetch customer data from the remote API.
       Add a New Customer: Fill out the form to add a new customer.
  ## Features
    JWT Authentication
    Create, update, delete, and view customer data
    Pagination, sorting, and searching for customer list
## Technologies Used
    Backend: Spring Boot, MySQL, Maven
    Frontend: React, HTML, CSS, JavaScript
    Authentication: JWT
      
   
