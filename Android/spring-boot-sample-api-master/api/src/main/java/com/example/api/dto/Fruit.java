package com.example.api.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fruit {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private Double price;

	protected Fruit() {
	}

	public Fruit(String name, Double price) {
		this.name = name;
		this.price = price;
	}

	@Override
	public String toString() {
		return String.format("Fruit[id=%d, name='%s', price=%f]", id, name, price);
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}
	
	public void setPrice(Double price) {
		this.price = price;
	}

}
