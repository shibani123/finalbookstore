package com.aciworldwide.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aciworldwide.model.Order;
import com.aciworldwide.services.OrderService;



@RestController
@RequestMapping("api/orders")
@CrossOrigin(origins="http://localhost:4200")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	
	@PostMapping("/save")
	public Order saveOrders(@RequestBody Order order) {
		return orderService.saveOrders(order);
	}
	
	@GetMapping("/ab")
	public List<Order> getOrders() {
		return orderService.getOrders();
	}
}
