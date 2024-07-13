package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.demo.model.Customer;
import com.demo.service.CustomerService;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/customer")
    public String addCustomer(@RequestBody Customer customer) {
        customerService.addCustomer(customer);
        return "Customer added successfully";
    }
    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable Integer id) {
        return customerService.findCustomerById(id);
    }
    
    @DeleteMapping("/delete")
    public String deleteCustomer(@RequestParam int id) {
    	Customer deleteCustomer = customerService.deleteCustomer(id);
    	if (deleteCustomer != null) {
        	return "Customer deleted";
		}
        else {
        	return "Customer not found";
        }
    }
    
    @GetMapping("/customers")
    public List<Customer> fetchAll(){
    	List<Customer> customers = customerService.findAllCustomer();
    	
    	if (customers != null) {
			return customers;
		}
    	else {
    		return null;
    	}
    }

    @PutMapping("/update")
    public String updateCustomer(@RequestBody Customer customer) {
    	Customer updatedCustomer = customerService.updateCustomer(customer);
        if (updatedCustomer != null) {
        	return "Customer updated";
		}
        else {
        	return "Customer not found";
        }
        
    }
}
