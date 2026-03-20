package com.example.repository;

import com.example.model.Model;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Repository class for data access
 */
public class Repository {

    private List<Model> dataStore = new ArrayList<>();

    public void save(Model model) {
        dataStore.add(model);
    }

    public Optional<Model> findByName(String name) {
        return dataStore.stream()
                .filter(m -> m.getName().equals(name))
                .findFirst();
    }

    public List<Model> findAll() {
        return new ArrayList<>(dataStore);
    }

    public void delete(String name) {
        dataStore.removeIf(m -> m.getName().equals(name));
    }

    public int count() {
        return dataStore.size();
    }
}

