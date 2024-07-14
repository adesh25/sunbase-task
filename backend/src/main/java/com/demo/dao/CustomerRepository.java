package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	List<Customer> findByFirstName(String firstName);

	List<Customer> findByCity(String city);

	Customer findByEmail(String email);

	Customer findByPhone(String phone);
}
