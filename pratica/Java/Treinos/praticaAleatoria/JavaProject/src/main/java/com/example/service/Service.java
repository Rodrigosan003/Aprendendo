package com.example.service;

import com.example.model.Model;

/**
 * Service class for business logic
 */
public class Service {

    public String process(Model model) {
        if (model == null) {
            return "Model is null";
        }
        return "Processed: " + model.getName() + " with value " + model.getValue();
    }

    public boolean validate(Model model) {
        return model != null && model.getName() != null && !model.getName().isEmpty();
    }
}

