package com.aciworldwide.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aciworldwide.model.Order;
import com.aciworldwide.repositories.OrderRepository;


@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	public List<Order> getOrders(){
		return orderRepository.findAll();
	}
	
	public Order saveOrders(Order order) {
		return orderRepository.saveAndFlush(order);
	}
}
