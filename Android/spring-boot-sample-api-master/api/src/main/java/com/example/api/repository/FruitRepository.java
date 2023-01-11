package com.example.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.api.dto.Fruit;

public interface FruitRepository extends CrudRepository<Fruit, Long> {
	
	  List<Fruit> findByName(String name);
	  
	  List<Fruit> findAll();

	  Fruit findById(long id);

}
