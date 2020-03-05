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

import com.aciworldwide.model.Promotion;
import com.aciworldwide.services.PromotionService;


@RestController
@RequestMapping("/api/promotions")
@CrossOrigin(origins="http://localhost:4200")
public class PromotionController {

	@Autowired
	private PromotionService promotionService;
	
	@GetMapping("/all")
	public List<Promotion> getPromotions(){
		return promotionService.getPromotions();
	}
	
	@GetMapping("/bypromocode/{code}")
	public Promotion findpromo(@PathVariable String code) {
		return promotionService.findpromo(code);
	}
	
	@PostMapping("/insert")
	public Promotion savePromotion( @RequestBody Promotion p) {
		return promotionService.savePromotion(p);
	}
	
	@PutMapping("/update")
	public Promotion updatePromotion( @RequestBody Promotion p) {
		return promotionService.updatePromotion(p);
	}
	
	@DeleteMapping("/delete")
	public void deletePromotion(long id) {
		promotionService.deletePromotion(id);
	}
	
	
}
