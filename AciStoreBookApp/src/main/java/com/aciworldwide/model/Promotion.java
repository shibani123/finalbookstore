package com.aciworldwide.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="promotions")
public class Promotion{
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pid")
	private long pid;
	
	@Column(name="code", nullable = false)
	private String code;
	
	@Column(name="discount")
	private String discount;

	public Promotion() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Promotion(long pid, String code, String discount) {
		super();
		this.pid = pid;
		this.code = code;
		this.discount = discount;
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDiscount() {
		return discount;
	}

	public void setDiscount(String discount) {
		this.discount = discount;
	}
	
	

}