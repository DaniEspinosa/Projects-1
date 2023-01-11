package com.example.api.resource;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static javax.servlet.http.HttpServletResponse.SC_NO_CONTENT;
import static javax.servlet.http.HttpServletResponse.SC_NOT_FOUND;

import com.example.api.dto.Fruit;
import com.example.api.repository.FruitRepository;

@RestController
public class FruitController {
	
	private static final Logger log = LoggerFactory.getLogger(FruitController.class);
	
	FruitRepository fruitRepository;

	@Autowired
	public FruitController(FruitRepository fruitRepository) {
		this.fruitRepository = fruitRepository;
	}
	
	@GetMapping("/fruits")
	public List<Fruit> getFruits() {
		log.info("GET /fruits call");
		return fruitRepository.findAll();
	}
	
	@GetMapping("/fruits/{id}")
	public Optional<Fruit> getFruit(@PathVariable Long id, HttpServletResponse response) throws IOException {
    	log.info("GET /fruits/{}", id);
    	Optional<Fruit> fruit = fruitRepository.findById(id);
    	if (!fruit.isPresent()) {
    		response.sendError(SC_NOT_FOUND);
    	}
    	return fruit;
    }
	
	@GetMapping(path="/fruits", params = {"name"})
	public List<Fruit> findFruitByName(@RequestParam(name = "name") String name) {
    	log.info("GET /fruits?name={}", name);
        return fruitRepository.findByName(name);
    }
	
	@PostMapping("/fruits")
	public Fruit createFruit(@RequestBody Fruit request) {
    	log.info("POST /fruits {}", request);
        return fruitRepository.save(request);
    }
	
	@PutMapping("/fruits/{id}")
	public Fruit updateFruit(@PathVariable Long id, @RequestBody Fruit request, HttpServletResponse response) throws IOException {
    	log.info("PUT /fruits/{} {}", id, request);
    	Optional<Fruit> fruit = fruitRepository.findById(id);
    	if (!fruit.isPresent()) {
    		response.sendError(SC_NOT_FOUND);
    	}
    	fruit.get().setName(request.getName());
    	fruit.get().setPrice(request.getPrice());
        return fruitRepository.save(fruit.get());
    }
	
	@DeleteMapping("/fruits/{id}")
	public void deleteFruit(@PathVariable Long id, HttpServletResponse response) {
    	log.info("DELETE /fruits/{}", id);
        fruitRepository.deleteById(id);
        response.setStatus(SC_NO_CONTENT);
        return;
    }

}