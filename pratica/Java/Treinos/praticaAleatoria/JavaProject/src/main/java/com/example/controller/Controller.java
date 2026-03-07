package com.example.controller;

import com.example.model.Model;
import com.example.repository.Repository;
import com.example.service.Service;
import java.util.List;

/**
 * Controller class for handling requests
 */
public class Controller {

    private final Repository repository;
    private final Service service;

    public Controller() {
        this.repository = new Repository();
        this.service = new Service();
    }

    public String handleRequest(String name, int value) {
        Model model = new Model(name, value);
        
        if (!service.validate(model)) {
            return "Invalid model data";
        }
        
        repository.save(model);
        return service.process(model);
    }

    public List<Model> getAllModels() {
        return repository.findAll();
    }

    public Model findByName(String name) {
        return repository.findByName(name).orElse(null);
    }

    public void deleteModel(String name) {
        repository.delete(name);
    }
}

