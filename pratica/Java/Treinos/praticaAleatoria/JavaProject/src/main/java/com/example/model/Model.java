package com.example.model;

/**
 * Model class for representing data entities
 */
public class Model {
    private String name;
    private int value;

    public Model() {
    }

    public Model(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Model{name='" + name + "', value=" + value + "}";
    }
}

