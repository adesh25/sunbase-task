package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.CustomerRepository;
import com.demo.model.Customer;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;

	public Customer addCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	public Customer findCustomerById(int id) {
		return customerRepository.findById(id).orElse(null);
	}

	public List<Customer> findAllCustomer() {
		List<Customer> customers = customerRepository.findAll();
		if (customers != null && customers.size() > 0) {
			return customers;
		} else {
			return null;
		}
	}

	public Customer deleteCustomer(Integer id) {
		if (id != null) {
			Customer customerToBeDeleted = findCustomerById(id);
			customerRepository.deleteById(id);
			return customerToBeDeleted;
		} else {
			return null;
		}
	}

	public Customer updateCustomer(Customer customer) {
		if (customer != null && customer.getId() != 0) {
			Optional<Customer> optional = customerRepository.findById(customer.getId());
			if (optional.isPresent()) {
				Customer existCustomer = optional.get();
				existCustomer.setFirstName(customer.getFirstName());
				existCustomer.setLastName(customer.getLastName());
				existCustomer.setStreet(customer.getStreet());
				existCustomer.setAddress(customer.getAddress());
				existCustomer.setCity(customer.getCity());
				existCustomer.setState(customer.getState());
				existCustomer.setEmail(customer.getEmail());
				existCustomer.setPhone(customer.getPhone());
				return customerRepository.save(existCustomer);
			}
		}
		return null;
	}

	public Customer findByEmail(String email) {
		return customerRepository.findByEmail(email);
	}

	public Customer findByPhone(String phone) {
		return customerRepository.findByPhone(phone);
	}

	public List<Customer> searchByFirstName(String firstName) {
		return customerRepository.findByFirstName(firstName);
	}

	public List<Customer> searchByCity(String city) {
		return customerRepository.findByCity(city);
	}
}
