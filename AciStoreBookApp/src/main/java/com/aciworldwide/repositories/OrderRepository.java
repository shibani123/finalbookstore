package com.aciworldwide.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aciworldwide.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
