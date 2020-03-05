package com.aciworldwide.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aciworldwide.model.Book;
import com.aciworldwide.model.Customer;
import com.aciworldwide.services.CustomerService;

@RestController
@RequestMapping("api/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/a")
	public List<Customer> getCustomers(){
		return customerService.getCustomers();
	}
	
	@PostMapping("/save")
	public Customer saveCustomers(@RequestBody Customer customer) {
		return customerService.saveCustomers(customer);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteCustomers(@PathVariable long id) {
		 customerService.deleteCustomers(id);
	}
	
	@PutMapping("/update")
	public Customer updateCustomers( @RequestBody Customer customer) {
		return customerService.updateCustomers(customer);
	}
	
	@GetMapping("/byusername/{username}")
	public Customer getByCustomerUsername(@PathVariable String username) {
		return customerService.getByCustomerUsername(username);
	}
}
