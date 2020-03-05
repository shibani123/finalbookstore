package com.aciworldwide.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aciworldwide.model.Book;
import com.aciworldwide.model.Promotion;
import com.aciworldwide.repositories.PromotionRepository;

@Service
public class PromotionService {

	@Autowired
	private PromotionRepository promotionRepository;
	
	public List<Promotion> getPromotions(){
		return promotionRepository.findAll();
	}
	
	public Promotion findpromo(String code) {
		return promotionRepository.findByPromoCode(code);
	}
	public Promotion savePromotion(Promotion p) {
		return promotionRepository.saveAndFlush(p);
	}
	
	public Promotion updatePromotion(Promotion p) {
		return promotionRepository.saveAndFlush(p);
	}
	
	public void deletePromotion(long id) {
		promotionRepository.deleteById(id);
	}
	
}
