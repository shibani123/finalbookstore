package com.aciworldwide.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aciworldwide.model.Book;
import com.aciworldwide.model.Customer;
import com.aciworldwide.repositories.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	public List<Customer> getCustomers(){
		return customerRepository.findAll();
	}
	
	public Customer saveCustomers(Customer customer) {
		return customerRepository.saveAndFlush(customer);
	}
	
	public void deleteCustomers(long id) {
		customerRepository.deleteById(id);
	}
	
	public Customer updateCustomers(Customer customer) {
		return customerRepository.saveAndFlush(customer);
	}
	
	public Customer getByCustomerUsername(String username) {
		return customerRepository.findByUsername(username);
	}
	
	
}
