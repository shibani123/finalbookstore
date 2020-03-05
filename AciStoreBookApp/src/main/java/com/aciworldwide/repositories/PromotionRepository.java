package com.aciworldwide.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aciworldwide.model.Promotion;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {

	
	@Query("select p from Promotion p where p.code =?1")
	Promotion findByPromoCode(String code);
}
